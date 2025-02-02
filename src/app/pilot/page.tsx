'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Power, Shield, Brain, Cpu, LucideIcon } from 'lucide-react'

interface SystemStatus {
  power: number;
  sync: number;
  shield: number;
  neural: number;
  core: number;
}

// Particle effect component
const ParticleEffect = ({ active }: { active: boolean }) => (
  <AnimatePresence>
    {active && (
      <motion.div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-500"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1
            }}
          />
        ))}
      </motion.div>
    )}
  </AnimatePresence>
)

export default function PilotPage() {
  const [text, setText] = useState('')
  const [currentLine, setCurrentLine] = useState(0)
  const [berserkerMode, setBerserkerMode] = useState(false)
  const [syncRatio, setSyncRatio] = useState(0)
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    power: 100,
    sync: 0,
    shield: 100,
    neural: 100,
    core: 100
  })
  
  const bootSequence = [
    'INITIALIZING EVA UNIT-01 SYSTEMS...',
    'LOADING NEURAL INTERFACE...',
    'SYNCHRO START...',
    'CONNECTING TO TERMINAL DOGMA...',
    'LCL IONIZATION: NOMINAL',
    'A.T. FIELD: STABLE',
    'PILOT LINK: ESTABLISHED',
    'EVA-01 READY FOR LAUNCH'
  ]

  const berserkerSequence = [
    '!! WARNING !! SYNC RATIO EXCEEDING SAFETY PARAMETERS',
    'PILOT MENTAL CONTAMINATION DETECTED',
    'ATTEMPTING TO SUPPRESS BERSERKER SIGNAL...',
    'SUPPRESSION FAILED',
    'EVA UNIT-01 ENTERING BERSERKER MODE',
    '!! BERSERKER MODE ACTIVE !!'
  ]

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timer = setTimeout(() => {
        setText(prev => prev + '\n' + bootSequence[currentLine])
        setCurrentLine(prev => prev + 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [currentLine])

  useEffect(() => {
    if (berserkerMode) {
      // System deterioration effect
      const interval = setInterval(() => {
        setSyncRatio(prev => Math.min(400, prev + Math.random() * 20))
        setSystemStatus(prev => ({
          power: Math.max(0, prev.power + (Math.random() * 40 - 20)),
          sync: Math.min(400, prev.sync + Math.random() * 30),
          shield: Math.max(0, prev.shield + (Math.random() * 40 - 20)),
          neural: Math.max(0, prev.neural + (Math.random() * 40 - 20)),
          core: Math.max(0, prev.core + (Math.random() * 40 - 20))
        }))
      }, 500)
      
      // Screen shake effect
      document.documentElement.style.animation = 'shake 0.5s infinite'
      
      return () => {
        clearInterval(interval)
        document.documentElement.style.animation = ''
      }
    }
  }, [berserkerMode])

  const activateBerserker = () => {
    setBerserkerMode(true)
    setText(prev => prev + '\n\n' + berserkerSequence.join('\n'))
    // Flash effect
    document.documentElement.style.animation = 'flash 0.5s'
  }

  return (
    <main className={`min-h-screen bg-black ${berserkerMode ? 'bg-red-950/20' : ''} transition-colors duration-1000 p-4 font-mono`}>
      <ParticleEffect active={berserkerMode} />
      
      <div className="max-w-2xl mx-auto mt-8">
        {/* Status Display */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <motion.div 
            className={`border ${berserkerMode ? 'border-red-500/30' : 'border-green-500/30'} p-4`}
            animate={{ borderColor: berserkerMode ? ['rgba(239, 68, 68, 0.3)', 'rgba(239, 68, 68, 0.6)', 'rgba(239, 68, 68, 0.3)'] : undefined }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Brain className={berserkerMode ? 'text-red-500' : 'text-green-500'} />
              <span>SYNC RATIO</span>
            </div>
            <div className={`text-2xl ${berserkerMode ? 'text-red-500 animate-pulse' : 'text-green-500'}`}>
              {syncRatio.toFixed(1)}%
            </div>
          </motion.div>

          <motion.div 
            className={`border ${berserkerMode ? 'border-red-500/30' : 'border-green-500/30'} p-4`}
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield className={berserkerMode ? 'text-red-500' : 'text-green-500'} />
              <span>AT FIELD</span>
            </div>
            <div className={`text-2xl ${berserkerMode ? 'text-red-500' : 'text-green-500'}`}>
              {berserkerMode ? 'UNSTABLE' : 'NOMINAL'}
            </div>
          </motion.div>
        </div>

        {/* CRT Screen Effect */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`border ${berserkerMode ? 'border-red-500/30' : 'border-green-500/30'} bg-black/50 p-6 rounded-lg relative overflow-hidden`}
        >
          {/* Warning Banner */}
          <AnimatePresence>
            {berserkerMode && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                className="bg-red-500/20 text-red-500 p-2 mb-4 flex items-center gap-2"
              >
                <AlertTriangle className="animate-pulse" />
                BERSERKER MODE ACTIVE
              </motion.div>
            )}
          </AnimatePresence>

          {/* Scan lines */}
          <div className="absolute inset-0 pointer-events-none bg-scan-lines opacity-10" />
          
          {/* Terminal Output */}
          <pre className={`whitespace-pre-wrap ${berserkerMode ? 'text-red-500' : 'text-green-500'}`}>
            {text}
            <span className="animate-pulse">_</span>
          </pre>
        </motion.div>

        {/* Control Panel */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <button 
            className={`border ${berserkerMode ? 'border-red-500/30 hover:bg-red-500/10' : 'border-green-500/30 hover:bg-green-500/10'} 
              bg-black/50 p-4 text-center transition-colors`}
            onClick={() => setSyncRatio(prev => prev + 10)}
          >
            INCREASE SYNC
          </button>
          <button 
            className={`border ${berserkerMode ? 'border-red-500/30 hover:bg-red-500/10' : 'border-green-500/30 hover:bg-green-500/10'} 
              bg-black/50 p-4 text-center transition-colors relative overflow-hidden`}
            onClick={activateBerserker}
            disabled={berserkerMode}
          >
            {berserkerMode && (
              <motion.div
                className="absolute inset-0 bg-red-500/20"
                animate={{ opacity: [0, 0.2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
            BERSERKER MODE
          </button>
        </div>
      </div>

      <style jsx>{`
        .bg-scan-lines {
          background: linear-gradient(
            to bottom,
            transparent 0%,
            ${berserkerMode ? 'rgba(239, 68, 68, 0.05)' : 'rgba(0, 255, 0, 0.05)'} 50%,
            transparent 100%
          );
          background-size: 100% 4px;
        }
      `}</style>

      <style jsx global>{`
        @keyframes flash {
          0%, 100% { background: transparent; }
          50% { background: rgba(255, 0, 0, 0.2); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }

        @keyframes glitch {
          0% { clip-path: inset(40% 0 61% 0); }
          20% { clip-path: inset(92% 0 1% 0); }
          40% { clip-path: inset(43% 0 1% 0); }
          60% { clip-path: inset(25% 0 58% 0); }
          80% { clip-path: inset(54% 0 7% 0); }
          100% { clip-path: inset(58% 0 43% 0); }
        }

        .berserker-active {
          animation: glitch 0.5s infinite;
        }

        .emergency-text {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </main>
  )
}
