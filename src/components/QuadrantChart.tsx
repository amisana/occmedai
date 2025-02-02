'use client';

import { useEffect, useRef, useMemo, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';

interface DataPoint {
  specialty: string;
  exposure: number;
  complementarity: number;
  salary: number;
  riskScore?: number;
}

const TRANSITION_DURATION = 750;

type QuadrantKey = 'high_high' | 'high_low' | 'low_high' | 'low_low';

const QUADRANT_LABELS: Record<QuadrantKey, string> = {
  high_high: "Zone of Opportunity",
  high_low: "Risk Zone",
  low_high: "Protected Zone",
  low_low: "Stable Zone"
};

const QUADRANT_DESCRIPTIONS: Record<QuadrantKey, string> = {
  high_high: "High exposure to AI automation but protected by strong complementarity factors",
  high_low: "High exposure to AI automation with limited protection from complementarity",
  low_high: "Limited exposure to AI automation with strong complementarity protection",
  low_low: "Limited exposure to AI automation but also limited complementarity protection"
};

// Convert CSV data to proper format
const data: DataPoint[] = [
  { specialty: "Anesthesiology", exposure: 0.85, complementarity: 0.45, salary: 455253 },
  { specialty: "Cardiology", exposure: 0.40, complementarity: 0.55, salary: 525601 },
  { specialty: "CritCare", exposure: 0.30, complementarity: 0.90, salary: 412000 },
  { specialty: "Derm", exposure: 0.90, complementarity: 0.60, salary: 455755 },
  { specialty: "EM", exposure: 0.20, complementarity: 0.95, salary: 352000 },
  { specialty: "Endocrinology", exposure: 0.55, complementarity: 0.35, salary: 271774 },
  { specialty: "ENT", exposure: 0.10, complementarity: 0.75, salary: 486768 },
  { specialty: "Family Medicine", exposure: 0.60, complementarity: 0.85, salary: 264020 },
  { specialty: "Geriatrics", exposure: 0.85, complementarity: 0.75, salary: 275704 },
  { specialty: "GI", exposure: 0.40, complementarity: 0.50, salary: 498834 },
  { specialty: "Heme/Onc", exposure: 0.60, complementarity: 0.70, salary: 455156 },
  { specialty: "ID", exposure: 0.60, complementarity: 0.50, salary: 275304 },
  { specialty: "IM", exposure: 0.75, complementarity: 0.50, salary: 283447 },
  { specialty: "Nephrology", exposure: 0.50, complementarity: 0.40, salary: 312000 },
  { specialty: "Neurology", exposure: 0.80, complementarity: 0.70, salary: 313000 },
  { specialty: "Neurosurgery", exposure: 0.25, complementarity: 0.95, salary: 788313 },
  { specialty: "OB/GYN", exposure: 0.06, complementarity: 0.875, salary: 337000 },
  { specialty: "Ophthalmology", exposure: 0.20, complementarity: 0.70, salary: 418658 },
  { specialty: "Orthopedics", exposure: 0.25, complementarity: 0.75, salary: 598522 },
  { specialty: "Pathology", exposure: 0.90, complementarity: 0.25, salary: 339000 },
  { specialty: "Pediatrics", exposure: 0.75, complementarity: 0.90, salary: 246916 },
  { specialty: "Plastics", exposure: 0.10, complementarity: 0.90, salary: 595187 },
  { specialty: "PM&R", exposure: 0.40, complementarity: 0.80, salary: 306000 },
  { specialty: "PrevMed", exposure: 0.75, complementarity: 0.40, salary: 275068 },
  { specialty: "Psychiatry", exposure: 0.35, complementarity: 0.70, salary: 309000 },
  { specialty: "Pulmonology", exposure: 0.50, complementarity: 0.45, salary: 389325 },
  { specialty: "Rad Onc", exposure: 0.80, complementarity: 0.60, salary: 547026 },
  { specialty: "Radiology", exposure: 0.70, complementarity: 0.35, salary: 493282 },
  { specialty: "Rheum", exposure: 0.50, complementarity: 0.40, salary: 290395 },
  { specialty: "Surgery", exposure: 0.15, complementarity: 0.80, salary: 442000 },
  { specialty: "Thoracic", exposure: 0.10, complementarity: 0.80, salary: 706775 },
  { specialty: "Urology", exposure: 0.30, complementarity: 0.60, salary: 505873 },
  { specialty: "Vascular", exposure: 0.20, complementarity: 0.65, salary: 557632 }
];

export function QuadrantChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedQuadrant, setSelectedQuadrant] = useState<string | null>(null);
  const [hoveredPoint, setHoveredPoint] = useState<DataPoint | null>(null);
  
  // Create sophisticated color scales
  const colorScales = useMemo(() => ({
    primary: d3.scaleSequential()
      .domain([0, 1])
      .interpolator(d3.interpolateHsl(
        d3.hsl(142, 0.8, 0.3),
        d3.hsl(142, 0.9, 0.6)
      )),
    salary: d3.scaleSequential()
      .domain([200000, 800000])
      .interpolator(d3.interpolateHsl(
        d3.hsl(142, 0.4, 0.2), // Darker green for lower salaries
        d3.hsl(142, 0.9, 0.7)  // Brighter green for higher salaries
      )),
    accent: d3.scaleSequential()
      .domain([0, 1])
      .interpolator(d3.interpolateHsl(
        d3.hsl(32, 0.9, 0.4),
        d3.hsl(32, 0.9, 0.6)
      ))
  }), []);

  // Transform data with quadrant information and risk score
  const transformedData = useMemo(() => {
    return data.map(d => ({
      ...d,
      quadrant: `${d.exposure > 0.5 ? 'high' : 'low'}_${d.complementarity > 0.5 ? 'high' : 'low'}`,
      riskScore: (d.exposure * (1 - d.complementarity)) * 100
    }));
  }, []);

  // Calculate quadrant statistics
  const quadrantStats = useMemo(() => {
    return Object.keys(QUADRANT_LABELS).reduce((acc, quadrant) => {
      const points = transformedData.filter(d => d.quadrant === quadrant);
      return {
        ...acc,
        [quadrant]: {
          count: points.length,
          avgSalary: d3.mean(points, d => d.salary) || 0,
          avgRiskScore: d3.mean(points, d => d.riskScore) || 0
        }
      };
    }, {} as Record<string, { count: number; avgSalary: number; avgRiskScore: number }>);
  }, [transformedData]);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;
    const margin = { top: 60, right: 100, bottom: 60, left: 80 };

    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    svg.selectAll("*").transition().duration(TRANSITION_DURATION).style("opacity", 0).remove();

    const scales = {
      x: d3.scaleLinear()
        .domain([0, 1])
        .range([0, innerWidth])
        .nice(),
      y: d3.scaleLinear()
        .domain([0, 1])
        .range([innerHeight, 0])
        .nice()
    };

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Enhanced gradient definitions
    const defs = svg.append("defs");
    
    ['quadrant', 'axis', 'highlight'].forEach(type => {
      const gradient = defs.append("linearGradient")
        .attr("id", `${type}-gradient`)
        .attr("gradientUnits", "userSpaceOnUse");

      const gradientColors = {
        quadrant: [
          { offset: "0%", color: "rgba(34, 197, 94, 0.05)" },
          { offset: "100%", color: "rgba(34, 197, 94, 0.02)" }
        ],
        axis: [
          { offset: "0%", color: "rgba(34, 197, 94, 0.2)" },
          { offset: "100%", color: "rgba(34, 197, 94, 0.1)" }
        ],
        highlight: [
          { offset: "0%", color: "rgba(34, 197, 94, 0.15)" },
          { offset: "100%", color: "rgba(34, 197, 94, 0.05)" }
        ]
      };

      gradient
        .selectAll("stop")
        .data(gradientColors[type as keyof typeof gradientColors])
        .enter()
        .append("stop")
        .attr("offset", d => d.offset)
        .attr("stop-color", d => d.color);
    });

    // Add quadrant backgrounds with enhanced styling
    Object.entries(QUADRANT_LABELS).forEach(([key, label], i) => {
      const [exposureType, complementarityType] = key.split('_');
      const x = exposureType === 'high' ? scales.x(0.5) : 0;
      const y = complementarityType === 'low' ? scales.y(0.5) : 0;
      const width = innerWidth / 2;
      const height = innerHeight / 2;

      const quadrantGroup = g.append("g")
        .attr("class", `quadrant ${key}`)
        .style("cursor", "pointer")
        .on("click", () => setSelectedQuadrant(selectedQuadrant === key ? null : key));

      quadrantGroup.append("rect")
        .attr("x", x)
        .attr("y", y)
        .attr("width", width)
        .attr("height", height)
        .attr("fill", `url(#quadrant-gradient)`)
        .attr("stroke", "rgba(34, 197, 94, 0.1)")
        .attr("stroke-width", selectedQuadrant === key ? 2 : 1)
        .style("opacity", selectedQuadrant && selectedQuadrant !== key ? 0.3 : 1);

      quadrantGroup.append("text")
        .attr("x", x + width / 2)
        .attr("y", y + height / 2)
        .attr("text-anchor", "middle")
        .attr("fill", "rgba(34, 197, 94, 0.6)")
        .attr("font-size", "14px")
        .text(label);
    });

    // Enhanced axes with animated grid
    const axes = {
      x: d3.axisBottom(scales.x)
        .ticks(10)
        .tickSize(-innerHeight)
        .tickFormat(d => `${(d as number * 100).toFixed(0)}%`),
      y: d3.axisLeft(scales.y)
        .ticks(10)
        .tickSize(-innerWidth)
        .tickFormat(d => `${(d as number * 100).toFixed(0)}%`)
    };

    ["x", "y"].forEach(axis => {
      const gridGroup = g.append("g")
        .attr("class", `grid ${axis}-grid`)
        .attr("transform", axis === "x" ? `translate(0,${innerHeight})` : "");

      gridGroup.call(axes[axis as "x" | "y"])
        .call(g => {
          g.selectAll("line")
            .attr("stroke", "rgba(34, 197, 94, 0.1)")
            .attr("stroke-dasharray", "4,4")
            .style("opacity", 0)
            .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", 1);

          g.selectAll("text")
            .attr("fill", "rgba(34, 197, 94, 0.8)")
            .style("opacity", 0)
            .transition()
            .duration(TRANSITION_DURATION)
            .style("opacity", 1);
        });
    });

    // Add points with enhanced interactions
    const points = g.selectAll(".point")
      .data(transformedData)
      .enter()
      .append("g")
      .attr("class", "point")
      .attr("transform", d => `translate(${scales.x(d.exposure)},${scales.y(d.complementarity)})`)
      .style("cursor", "pointer")
      .on("mouseover", (event, d) => setHoveredPoint(d))
      .on("mouseout", () => setHoveredPoint(null));

    points.append("circle")
      .attr("r", 8) // Fixed size for all points
      .style("fill", d => colorScales.salary(d.salary))
      .style("stroke", "rgba(255, 255, 255, 0.2)")
      .style("stroke-width", 1)
      .style("opacity", 0.9)
      .transition()
      .duration(TRANSITION_DURATION)
      .attr("r", 8);

    points.append("text")
      .attr("dy", -12) // Adjusted for fixed circle size
      .attr("text-anchor", "middle")
      .attr("fill", "rgba(255, 255, 255, 0.9)")
      .attr("font-size", "11px")
      .text(d => d.specialty)
      .style("opacity", 0)
      .transition()
      .duration(TRANSITION_DURATION)
      .style("opacity", 1);

  }, [transformedData, colorScales, selectedQuadrant]);

  return (
    <div className="relative w-full space-y-4">
      <div className="aspect-square w-full">
        <svg 
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 800 800"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>

      <AnimatePresence>
        {hoveredPoint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bg-black/95 border border-green-500/20 p-4 rounded-lg shadow-lg"
            style={{
              left: `${hoveredPoint.exposure * 100}%`,
              top: `${(1 - hoveredPoint.complementarity) * 100}%`
            }}
          >
            <div className="font-medium text-white/90">{hoveredPoint.specialty}</div>
            <div className="mt-2 space-y-1">
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Exposure</span>
                <span className="font-mono">{(hoveredPoint.exposure * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Complementarity</span>
                <span className="font-mono">{(hoveredPoint.complementarity * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Salary</span>
                <span className="font-mono">${hoveredPoint.salary.toLocaleString()}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-white/60">Risk Score</span>
                <span className="font-mono">{hoveredPoint.riskScore?.toFixed(1) || 'N/A'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {selectedQuadrant && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 left-4 right-4 bg-black/95 border border-green-500/20 p-4 rounded-lg shadow-lg"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium text-white/90">
                {QUADRANT_LABELS[selectedQuadrant as QuadrantKey]}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                {QUADRANT_DESCRIPTIONS[selectedQuadrant as QuadrantKey]}
              </p>
            </div>
            <button
              onClick={() => setSelectedQuadrant(null)}
              className="text-white/60 hover:text-white/90"
            >
              ×
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-sm text-white/60">Specialties</div>
              <div className="mt-1 text-lg font-medium text-white/90">
                {quadrantStats[selectedQuadrant as QuadrantKey].count}
              </div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-sm text-white/60">Avg. Salary</div>
              <div className="mt-1 text-lg font-medium text-white/90">
                ${Math.round(quadrantStats[selectedQuadrant as QuadrantKey].avgSalary).toLocaleString()}
              </div>
            </div>
            <div className="p-3 bg-white/5 rounded-lg">
              <div className="text-sm text-white/60">Avg. Risk Score</div>
              <div className="mt-1 text-lg font-medium text-white/90">
                {quadrantStats[selectedQuadrant as QuadrantKey].avgRiskScore.toFixed(1)}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
} 