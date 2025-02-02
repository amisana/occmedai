'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Line, LineChart, Tooltip, ResponsiveContainer } from 'recharts';

const DunningKrugerAI = () => {
    const [hoveredPoint, setHoveredPoint] = useState(null);

    const data = [
        { x: 0, y: 10, label: "Initial Exposure" },
        { x: 10, y: 85, label: "Peak Dismissal" },
        { x: 20, y: 15, label: "Professional Crisis" },
        { x: 60, y: 70, label: "Identity Rediscovery" },
        { x: 100, y: 80, label: "Human-AI Synergy" },
    ];

    const annotations = [
        {
            x: 10,
            y: 90,
            subtext: "AI Could Never Replace Me",
            description: "Rejecting the notion that AI can rival and replace human capabilities.",
            griefStage: "Emotional Stage: Denial & Anger",
            color: "text-red-600"
        },
        {
            x: 20,
            y: 20,
            subtext: "Demoralization & Depression",
            description: "Feeling overwhelmed by AI. Questioning worth and value.",
            griefStage: "Emotional Stage: Depression",
            color: "text-blue-600"
        },
        {
            x: 60,
            y: 75,
            subtext: "Re-Evaluation",
            description: "Confronting the reality of AI's capabilities.",
            griefStage: "Emotional Stage: Early Acceptance",
            color: "text-green-600"
        },
        {
            x: 100,
            y: 85,
            subtext: "Personal & Professional Evolution",
            description: "A renewed sense of purpose and identity.",
            griefStage: "Emotional Stage: Integration",
            color: "text-emerald-600"
        }
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const point = annotations.find(a => a.x === payload[0].payload.x);
            return (
                <div className="bg-white p-2 rounded-md shadow-lg border border-gray-200 max-w-xs">
                    <p className="font-semibold text-gray-800 text-sm mb-1">{point?.subtext}</p>
                    <p className="text-xs text-gray-600 mb-1">{point?.description}</p>
                    <p className={`text-xs italic ${point?.color}`}>{point?.griefStage}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-6"
            >
                <div className="h-96 w-full">
                    <ResponsiveContainer>
                        <LineChart
                            data={data}
                            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                            onMouseMove={(e) => {
                                if (e.activePayload) {
                                    setHoveredPoint(e.activePayload[0].payload);
                                }
                            }}
                            onMouseLeave={() => setHoveredPoint(null)}
                        >
                            <Tooltip content={<CustomTooltip />} />
                            <Line 
                                type="monotone"
                                dataKey="y"
                                stroke="#059669"
                                strokeWidth={3}
                                dot={false}
                                activeDot={{ 
                                    r: 8,
                                    fill: "#059669",
                                    stroke: "#fff",
                                    strokeWidth: 2
                                }}
                            />
                            
                            {annotations.map((annotation, index) => (
                                <motion.g 
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: index * 0.2 }}
                                >
                                    {hoveredPoint?.x === annotation.x && (
                                        <text
                                            x={annotation.x}
                                            y={annotation.y - 20}
                                            textAnchor="middle"
                                            className={`text-sm ${annotation.color} font-semibold`}
                                        >
                                            {annotation.text}
                                        </text>
                                    )}
                                </motion.g>
                            ))}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="mt-2 text-sm text-gray-600 text-center">
                    Hover over the curve to explore our path to enlightenment
                </div>
            </motion.div>
        </div>
    );
};

export default DunningKrugerAI;