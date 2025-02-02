'use client';

import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScatterChart, Scatter, LineChart, Line, Area, AreaChart, XAxis, YAxis, ZAxis, 
         Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { TrendingUp, Brain, Shield, Network, Waves, Hexagon, Activity, GitBranch, Zap } from 'lucide-react';

interface MetricData {
    timestamp: number;
    complexity: number;
    emergence: number;
    synthesis: number;
    resonance: number;
    velocity: number;
    [key: string]: number;  // Index signature for dynamic access
}

interface MetricConfig {
    label: string;
    description: string;
    color: string;
    gradient: string[];
    icon: React.ElementType;
}

interface MetricSystem {
    complexity: MetricConfig;
    emergence: MetricConfig;
    synthesis: MetricConfig;
    resonance: MetricConfig;
}

type CustomTooltipProps = {
    active?: boolean;
    payload?: Array<{
        value: number;
        name: string;
        dataKey: string;
        color: string;
    }>;
    label?: string;
};

const renderGradientStops = (gradient: string[], i: number) => (
    <stop 
        key={i}
        offset={`${i * 50}%`}
        stopColor={gradient[i]}
        stopOpacity={0.8 - (i * 0.2)}
    />
);

export const QuantumAIAnalytics = () => {
    const [activeDataset, setActiveDataset] = useState('temporal');
    const [focusedMetric, setFocusedMetric] = useState<keyof MetricSystem>('complexity');
    const [selectedPoint, setSelectedPoint] = useState<MetricData | null>(null);
    
    const metricSystem = useMemo<MetricSystem>(() => ({
        complexity: {
            label: 'Cognitive Complexity Index',
            description: 'Measures the intricate patterns of AI-human cognitive interaction',
            color: '#6366f1',
            gradient: ['#312e81', '#4338ca', '#6366f1'],
            icon: Brain
        },
        emergence: {
            label: 'AI Emergence Vector',
            description: 'Tracks spontaneous emergence of novel AI behaviors',
            color: '#14b8a6',
            gradient: ['#134e4a', '#0d9488', '#14b8a6'],
            icon: Zap
        },
        synthesis: {
            label: 'Human-AI Synthesis',
            description: 'Quantifies the seamless integration of human and AI capabilities',
            color: '#f59e0b',
            gradient: ['#78350f', '#d97706', '#f59e0b'],
            icon: GitBranch
        },
        resonance: {
            label: 'Quantum Resonance',
            description: 'Analyzes quantum-level coherence in AI processing',
            color: '#ec4899',
            gradient: ['#831843', '#be185d', '#ec4899'],
            icon: Activity
        }
    }), []);

    const generateTemporalData = useCallback((): MetricData[] => {
        return Array.from({ length: 24 }, (_, i) => {
            const timepoint = i / 23;
            return {
                timestamp: i,
                complexity: 40 + Math.sin(timepoint * Math.PI * 2) * 20 + timepoint * 30,
                emergence: 30 + Math.cos(timepoint * Math.PI * 1.5) * 15 + timepoint * 35,
                synthesis: 45 + Math.sin(timepoint * Math.PI * 1.8) * 18 + timepoint * 25,
                resonance: 35 + Math.cos(timepoint * Math.PI * 1.2) * 22 + timepoint * 28,
                velocity: 50 + Math.cos(timepoint * Math.PI * 0.8) * 25
            };
        });
    }, []);

    const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
        if (!active || !payload) return null;
        
        return (
            <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-900 bg-opacity-90 backdrop-blur-lg p-4 rounded-lg border border-gray-700 shadow-xl"
            >
                {payload.map((entry, i) => (
                    <div key={i} className="flex items-center space-x-2 py-1">
                        <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-gray-300">{entry.name}:</span>
                        <span className="text-white font-mono">
                            {entry.value.toFixed(2)}
                        </span>
                    </div>
                ))}
            </motion.div>
        );
    };

    const renderComplexityMatrix = useCallback(() => (
        <div className="relative h-96">
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <defs>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <XAxis 
                        type="number" 
                        dataKey="complexity" 
                        name="Complexity"
                        label={{ value: 'Complexity Vector', position: 'bottom', fill: '#9CA3AF' }}
                        stroke="#4B5563"
                        tickLine={false}
                    />
                    <YAxis 
                        type="number" 
                        dataKey="synthesis" 
                        name="Synthesis"
                        label={{ value: 'Synthesis Index', angle: -90, position: 'left', fill: '#9CA3AF' }}
                        stroke="#4B5563"
                        tickLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Scatter 
                        data={generateTemporalData()} 
                        fill={metricSystem[focusedMetric].color}
                    >
                        {generateTemporalData().map((entry, index) => (
                            <motion.circle
                                key={index}
                                r={4}
                                filter="url(#glow)"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.02 }}
                            />
                        ))}
                    </Scatter>
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    ), [focusedMetric, generateTemporalData, metricSystem]);

    const renderTemporalFlow = useCallback(() => (
        <div className="relative h-96">
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={generateTemporalData()}>
                    <defs>
                        {Object.entries(metricSystem).map(([key, { gradient }]) => (
                            <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
                                {gradient.map(renderGradientStops)}
                            </linearGradient>
                        ))}
                    </defs>
                    {Object.entries(metricSystem).map(([key, { label, color }]) => (
                        <Area
                            key={key}
                            type="monotone"
                            dataKey={key}
                            name={label}
                            stroke={color}
                            fill={`url(#gradient-${key})`}
                            strokeWidth={2}
                            fillOpacity={0.2}
                        />
                    ))}
                    <XAxis 
                        stroke="#4B5563" 
                        tickLine={false}
                        label={{ value: 'Time', position: 'bottom', fill: '#9CA3AF' }}
                    />
                    <YAxis 
                        stroke="#4B5563" 
                        tickLine={false}
                        label={{ value: 'Value', angle: -90, position: 'left', fill: '#9CA3AF' }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    ), [generateTemporalData, metricSystem]);

    return (
        <div className="bg-gray-950 text-white p-8 rounded-xl shadow-2xl">
            <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <header className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        Quantum AI Analytics Interface
                    </h1>
                    <p className="text-gray-400 text-lg">
                        Advanced visualization system for mapping AI-human complexity dynamics
                    </p>
                </header>

                <nav className="flex space-x-4">
                    {Object.entries(metricSystem).map(([key, { label, color, icon: Icon }]) => (
                        <motion.button
                            key={key}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 rounded-lg bg-gray-900 border border-gray-800 flex items-center space-x-2"
                            style={{
                                borderColor: focusedMetric === key ? color : 'transparent'
                            }}
                            onClick={() => setFocusedMetric(key as keyof MetricSystem)}
                        >
                            <Icon size={16} style={{ color: focusedMetric === key ? color : '#9CA3AF' }} />
                            <span 
                                className="text-sm"
                                style={{ color: focusedMetric === key ? color : '#9CA3AF' }}
                            >
                                {label}
                            </span>
                        </motion.button>
                    ))}
                </nav>

                <div className="grid grid-cols-2 gap-8">
                    <motion.div 
                        className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <div className="flex items-center space-x-2 mb-4">
                            {React.createElement(metricSystem[focusedMetric].icon, {
                                className: "w-5 h-5",
                                style: { color: metricSystem[focusedMetric].color }
                            })}
                            <h2 className="text-xl font-semibold">Complexity Matrix</h2>
                        </div>
                        {renderComplexityMatrix()}
                    </motion.div>

                    <motion.div 
                        className="bg-gray-900 p-6 rounded-xl border border-gray-800"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h2 className="text-xl font-semibold mb-4">Temporal Flow Analysis</h2>
                        {renderTemporalFlow()}
                    </motion.div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                    {Object.entries(metricSystem).map(([key, { label, color, description, icon: Icon }]) => (
                        <motion.div
                            key={key}
                            className="bg-gray-900 p-4 rounded-lg border border-gray-800"
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="flex items-center space-x-2 mb-2">
                                <Icon className="w-5 h-5" style={{ color }} />
                                <h3 className="text-sm font-medium text-gray-400">{label}</h3>
                            </div>
                            <div className="text-2xl font-bold mb-2" style={{ color }}>
                                {(generateTemporalData()[23][key as keyof Pick<MetricData, 'complexity' | 'emergence' | 'synthesis' | 'resonance'>]).toFixed(2)}
                            </div>
                            <p className="text-xs text-gray-500">{description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}; 