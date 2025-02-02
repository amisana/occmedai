'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Power, Shield, Zap, Activity, Binary, Skull, Brain, Cpu, Radio, Waypoints, LucideIcon, Heart, Gauge, Sword, Battery, Radar, Siren, Flame, Radiation } from 'lucide-react'

interface TerminalProps {
  messages: string[];
  speed?: number;
  className?: string;
}

interface MagiSystemProps {
  name: string;
  status: number;
  delay: number;
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

interface ATFieldVisualizationProps {
  emergency: boolean;
  berserkerMode: boolean;
}

interface PilotVitals {
  heartRate: number;
  syncRate: number;
  mentalContamination: number;
  egoBarrier: number;
}

interface DamageZone {
  location: string;
  integrity: number;
  critical: boolean;
}

interface EVADamageDisplayProps {
  emergency: boolean;
}

interface S2EngineStatus {
  temperature: number;
  output: number;
  stability: number;
  containment: number;
}

interface NeuralLinkStatus {
  contamination: number;
  synchronization: number;
  egoBarrier: number;
  mentalStability: number;
}

interface AngelData {
  distance: number;
  pattern: string;
  threat: number;
  atFieldStrength: number;
}

interface WeaponStatus {
  progressiveKnife: number;
  umbilicalPower: number;
  s2Engine: number;
}

interface S2EngineMonitorProps {
  emergency: boolean;
  berserkerMode: boolean;
}

interface WeaponSystemsProps {
  emergency: boolean;
  berserkerMode: boolean;
}

interface AngelRadarProps {
  emergency: boolean;
}

const ATFieldVisualization = ({ emergency, berserkerMode }: ATFieldVisualizationProps) => {
  return (
    <div className="relative w-full h-96 perspective-1000">
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotateY: [0, 360],
          rotateX: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {/* Generate multiple layers of the AT Field */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-full h-full 
              ${emergency 
                ? 'border-red-500/30 shadow-red-500/20' 
                : 'border-orange-500/30 shadow-orange-500/20'} 
              border-2 origin-center
              ${berserkerMode ? 'shadow-lg' : 'shadow-sm'}`}
            style={{
              transform: `scale(${1 - i * 0.1}) rotate(${i * 45}deg)`,
            }}
            animate={berserkerMode ? {
              scale: [1 - i * 0.1, 1 - i * 0.05, 1 - i * 0.1],
              rotate: [i * 45, i * 45 + 180, i * 45 + 360],
              borderWidth: ['2px', '4px', '2px'],
            } : {}}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Center Core */}
        <motion.div 
          className={`absolute w-24 h-24 rounded-full 
            ${emergency 
              ? 'bg-red-500/30 shadow-red-500' 
              : 'bg-orange-500/30 shadow-orange-500'} 
            shadow-lg backdrop-blur-sm
            ${berserkerMode ? 'animate-pulse' : ''}`}
          animate={berserkerMode ? {
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Inner Geometric Patterns */}
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-full h-full border-2 
                  ${emergency ? 'border-red-200/30' : 'border-orange-200/30'}`}
                animate={{
                  rotate: [0, 360],
                  scale: [1 - i * 0.2, 1 - i * 0.1],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>
        </motion.div>
        
        {/* Particle Effects */}
        {berserkerMode && [...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full
              ${emergency ? 'bg-red-500' : 'bg-orange-500'}`}
            initial={{
              scale: 0,
              x: 0,
              y: 0,
            }}
            animate={{
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          />
        ))}
      </motion.div>
    </div>
  )
}

const HexPattern = () => (
  <div className="fixed inset-0 opacity-20 pointer-events-none">
    {[...Array(100)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-orange-500/20 text-xs"
        initial={{ 
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0
        }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: Math.random() * 5 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      >
        {Math.random().toString(16).substring(2, 8)}
      </motion.div>
    ))}
  </div>
)

const Terminal = ({ messages, speed = 50, className = "" }: TerminalProps) => {
  const [text, setText] = useState('')
  const [messageIndex, setMessageIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (messageIndex >= messages.length) return

    const interval = setInterval(() => {
      if (charIndex < messages[messageIndex].length) {
        setText(prev => prev + messages[messageIndex][charIndex])
        setCharIndex(c => c + 1)
      } else {
        setTimeout(() => {
          setMessageIndex(m => m + 1)
          setCharIndex(0)
          setText(prev => prev + '\n')
        }, 500)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [messageIndex, charIndex, messages, speed])

  return (
    <div className={`font-mono text-sm ${className}`}>
      {text}
      <span className="animate-pulse">_</span>
    </div>
  )
}

const MagiSystem = ({ name, status, delay }: MagiSystemProps) => (
  <motion.div
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay }}
    className="border border-orange-900/30 bg-black/80 p-6 relative overflow-hidden"
  >
    <div className="text-orange-500 font-mono mb-4 flex justify-between">
      <span>{name}</span>
      <span className="text-xs">{status}%</span>
    </div>
    <div className="h-2 bg-orange-900/30">
      <motion.div
        className="h-full bg-orange-500"
        initial={{ width: 0 }}
        animate={{ width: `${status}%` }}
        transition={{ duration: 2, delay }}
      />
    </div>
    <motion.div
      className="absolute inset-0 bg-orange-500/20"
      animate={{ opacity: [0, 0.2, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  </motion.div>
)

const GlitchText = ({ text, className = "" }: GlitchTextProps) => (
  <motion.span
    className={`inline-block ${className}`}
    animate={{
      x: [0, -2, 2, -2, 0],
      opacity: [1, 0.8, 1, 0.8, 1]
    }}
    transition={{
      duration: 0.2,
      repeat: Infinity,
      repeatType: "reverse"
    }}
  >
    {text}
  </motion.span>
)

interface SystemStatus {
  power: number;
  sync: number;
  shield: number;
  neural: number;
  core: number;
}

interface MagiStatus {
  melchior: number;
  balthasar: number;
  casper: number;
}

const EVADamageDisplay = ({ emergency }: EVADamageDisplayProps) => {
  const [damageZones, setDamageZones] = useState<DamageZone[]>([
    { location: 'Head', integrity: 100, critical: false },
    { location: 'Core', integrity: 100, critical: false },
    { location: 'Chest', integrity: 100, critical: false },
    { location: 'Arms', integrity: 100, critical: false },
    { location: 'Legs', integrity: 100, critical: false },
  ])

  useEffect(() => {
    if (emergency) {
      const interval = setInterval(() => {
        setDamageZones(prev => prev.map(zone => ({
          ...zone,
          integrity: Math.max(0, zone.integrity - Math.random() * 5),
          critical: zone.integrity < 30
        })))
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [emergency])

  return (
    <div className="grid grid-cols-2 gap-4">
      {damageZones.map((zone) => (
        <div key={zone.location} className="relative border border-orange-500/30 p-2">
          <div className="text-xs text-orange-500 mb-1">{zone.location}</div>
          <div className="h-2 bg-orange-900/30">
            <motion.div
              className={`h-full ${zone.critical ? 'bg-red-500' : 'bg-orange-500'}`}
              initial={{ width: '100%' }}
              animate={{ width: `${zone.integrity}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

const S2EngineMonitor = ({ emergency, berserkerMode }: S2EngineMonitorProps) => {
  const [status, setStatus] = useState<S2EngineStatus>({
    temperature: 65,
    output: 85,
    stability: 92,
    containment: 98
  })

  useEffect(() => {
    if (emergency || berserkerMode) {
      const interval = setInterval(() => {
        setStatus(prev => ({
          temperature: Math.min(200, prev.temperature + Math.random() * 15),
          output: berserkerMode ? 200 : Math.min(150, prev.output + Math.random() * 10),
          stability: Math.max(0, prev.stability - Math.random() * 20),
          containment: Math.max(0, prev.containment - Math.random() * 15)
        }))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [emergency, berserkerMode])

  return (
    <div className="grid grid-cols-2 gap-4">
      {Object.entries({
        'Core Temperature': [Flame, status.temperature, '°C'] as [LucideIcon, number, string],
        'Power Output': [Battery, status.output, 'MW'] as [LucideIcon, number, string],
        'Core Stability': [Radiation, status.stability, '%'] as [LucideIcon, number, string],
        'Containment': [Shield, status.containment, '%'] as [LucideIcon, number, string]
      }).map(([label, [Icon, value, unit]], index) => (
        <motion.div
          key={label}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="border border-orange-500/30 p-3"
        >
          <div className="flex items-center gap-2 mb-2">
            <Icon className="w-4 h-4 text-orange-500" />
            <span className="text-xs text-orange-500">{label}</span>
          </div>
          <div className="text-xl text-orange-500">
            {Math.round(value)}{unit}
          </div>
          <motion.div
            className={`h-1 mt-2 ${value > 150 ? 'bg-red-500' : 'bg-orange-500'}`}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, (value / 200) * 100)}%` }}
          />
        </motion.div>
      ))}
    </div>
  )
}

const AngelRadar = ({ emergency }: AngelRadarProps) => {
  const [angel, setAngel] = useState<AngelData>({
    distance: 20000,
    pattern: 'BLUE',
    threat: 85,
    atFieldStrength: 90
  })

  useEffect(() => {
    if (emergency) {
      const interval = setInterval(() => {
        setAngel(prev => ({
          distance: Math.max(0, prev.distance - Math.random() * 1000),
          pattern: prev.distance < 5000 ? 'ORANGE' : 'BLUE',
          threat: Math.min(100, prev.threat + Math.random() * 5),
          atFieldStrength: Math.min(100, prev.atFieldStrength + Math.random() * 2)
        }))
      }, 1500)
      return () => clearInterval(interval)
    }
  }, [emergency])

  return (
    <div className="relative h-64 border border-green-500/30 rounded-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="w-full h-1 bg-green-500/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute w-4 h-4 bg-red-500/50 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            left: `${50 + Math.cos(Date.now() / 1000) * 40}%`,
            top: `${50 + Math.sin(Date.now() / 1000) * 40}%`
          }}
        />
      </div>
      <div className="absolute bottom-4 left-4 text-green-500 text-sm">
        <div>Distance: {Math.round(angel.distance)}m</div>
        <div>Pattern: {angel.pattern}</div>
        <div>Threat Level: {angel.threat}%</div>
      </div>
    </div>
  )
}

const WeaponSystems = ({ emergency, berserkerMode }: WeaponSystemsProps) => {
  const [weapons, setWeapons] = useState<WeaponStatus>({
    progressiveKnife: 100,
    umbilicalPower: 100,
    s2Engine: 0
  })

  useEffect(() => {
    if (emergency) {
      const interval = setInterval(() => {
        setWeapons(prev => ({
          progressiveKnife: Math.max(0, prev.progressiveKnife - Math.random() * 5),
          umbilicalPower: berserkerMode ? 0 : Math.max(0, prev.umbilicalPower - Math.random() * 2),
          s2Engine: berserkerMode ? 100 : prev.s2Engine
        }))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [emergency, berserkerMode])

  return (
    <div className="space-y-4">
      {Object.entries({
        'Progressive Knife': [Sword, weapons.progressiveKnife] as [LucideIcon, number],
        'Umbilical Power': [Power, weapons.umbilicalPower] as [LucideIcon, number],
        'S2 Engine Output': [Battery, weapons.s2Engine] as [LucideIcon, number]
      }).map(([label, [Icon, value]]) => (
        <div key={label} className="flex items-center gap-4">
          <Icon className={`w-5 h-5 ${value < 20 ? 'text-red-500' : 'text-green-500'}`} />
          <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className={`h-full ${value < 20 ? 'bg-red-500' : 'bg-green-500'}`}
              initial={{ width: 0 }}
              animate={{ width: `${value}%` }}
            />
          </div>
          <span className="text-xs">{Math.round(value)}%</span>
        </div>
      ))}
    </div>
  )
}

export default function EVATerminal() {
  const alarmRef = useRef<HTMLAudioElement>(null)
  const berserkerRef = useRef<HTMLAudioElement>(null)
  
  const [emergency, setEmergency] = useState(false)
  const [berserkerMode, setBerserkerMode] = useState(false)
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    power: 0,
    sync: 0,
    shield: 0,
    neural: 0,
    core: 0
  })
  const [magiStatus, setMagiStatus] = useState<MagiStatus>({
    melchior: 85,
    balthasar: 92,
    casper: 78
  })
  const [pilotVitals, setPilotVitals] = useState<PilotVitals>({
    heartRate: 75,
    syncRate: 65,
    mentalContamination: 12,
    egoBarrier: 98,
  })

  const primaryBootSequence = [
    '> INITIALIZING NERV CENTRAL DOGMA',
    '> ESTABLISHING SECURE CONNECTION...',
    '> MAGI SYSTEM ONLINE',
    '> LOADING EVANGELION PROTOCOLS...',
    '> SYNCHRO-START INITIALIZATION',
    '> PILOT LINK ESTABLISHED',
    '!!WARNING!! BLOOD PATTERN: BLUE',
    '!!ALERT!! AT FIELD DETECTED IN VICINITY',
    '‼ EMERGENCY PROTOCOLS ENGAGED ‼'
  ]

  const secondaryBootSequence = [
    'ANALYZING LCL DENSITY...',
    'NEURAL BRIDGE INTEGRITY: 96.7%',
    'CORE TEMPERATURE NOMINAL',
    'ENGAGING S2 ENGINE',
    'PILOT VITALS: STABLE'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (!emergency) return
      setSystemStatus(prev => ({
        ...prev,
        power: Math.min(150, prev.power + Math.random() * 10),
        sync: Math.min(150, prev.sync + Math.random() * 10),
        shield: Math.min(150, prev.shield + Math.random() * 10),
        neural: Math.min(150, prev.neural + Math.random() * 10),
        core: Math.min(150, prev.core + Math.random() * 10)
      }))
    }, 1000)

    return () => clearInterval(interval)
  }, [emergency])

  useEffect(() => {
    if (emergency && alarmRef.current) {
      alarmRef.current.play()
    }
    if (berserkerMode && berserkerRef.current) {
      berserkerRef.current.play()
    }
  }, [emergency, berserkerMode])

  useEffect(() => {
    if (emergency || berserkerMode) {
      const interval = setInterval(() => {
        setPilotVitals(prev => ({
          heartRate: Math.min(200, prev.heartRate + Math.random() * 10),
          syncRate: berserkerMode ? 400 : Math.min(150, prev.syncRate + Math.random() * 5),
          mentalContamination: Math.min(100, prev.mentalContamination + Math.random() * 15),
          egoBarrier: Math.max(0, prev.egoBarrier - Math.random() * 10),
        }))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [emergency, berserkerMode])

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch(e.key.toUpperCase()) {
        case 'B':
          setBerserkerMode(true)
          break
        case 'E':
          setEmergency(prev => !prev)
          break
        case 'R':
          // Reset all systems
          setBerserkerMode(false)
          setEmergency(false)
          setSystemStatus({
            power: 0,
            sync: 0,
            shield: 0,
            neural: 0,
            core: 0
          })
          setPilotVitals({
            heartRate: 75,
            syncRate: 65,
            mentalContamination: 12,
            egoBarrier: 98,
          })
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  return (
    <div className={`min-h-screen bg-black ${emergency ? 'bg-red-950/20' : ''} transition-colors duration-1000 overflow-hidden`}>
      {/* Hex Pattern Background */}
      <HexPattern />

      {/* Emergency Pattern */}
      <AnimatePresence>
        {emergency && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 pointer-events-none"
            style={{
              backgroundImage: "repeating-linear-gradient(45deg, #000 0px, #000 10px, #ff000015 10px, #ff000015 20px)"
            }}
          />
        )}
      </AnimatePresence>

      {/* AT Field Hexagon Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 17.32v34.64L30 60 0 51.96V17.32L30 0zm0 5L5 19.32v30.64L30 55l25-5.04V19.32L30 5z' fill='%23${emergency ? 'ff0000' : '00ff00'}' fill-opacity='0.2' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 container mx-auto p-4">
        {/* NERV Header */}
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          className="mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Primary Terminal */}
            <div className={`border-l-4 ${emergency ? 'border-red-500 bg-red-900/20' : 'border-green-500 bg-green-900/20'} p-4`}>
              <GlitchText 
                text="NERV CENTRAL COMMAND" 
                className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-green-500'}`}
              />
              <Terminal 
                messages={primaryBootSequence} 
                className={emergency ? 'text-red-500' : 'text-green-500'}
              />
            </div>

            {/* Secondary Terminal */}
            <div className={`border-l-4 ${emergency ? 'border-orange-500 bg-orange-900/20' : 'border-blue-500 bg-blue-900/20'} p-4`}>
              <GlitchText 
                text="EVANGELION SYSTEMS" 
                className={`font-bold tracking-wider ${emergency ? 'text-orange-500' : 'text-blue-500'}`}
              />
              <Terminal 
                messages={secondaryBootSequence} 
                className={emergency ? 'text-orange-500' : 'text-blue-500'}
                speed={75}
              />
            </div>
          </div>
        </motion.div>

        {/* MAGI System Interface */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <MagiSystem name="MELCHIOR" status={magiStatus.melchior} delay={0.2} />
          <MagiSystem name="BALTHASAR" status={magiStatus.balthasar} delay={0.4} />
          <MagiSystem name="CASPER" status={magiStatus.casper} delay={0.6} />
        </div>

        {/* AT Field Visualization */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="AT FIELD VISUALIZATION" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-orange-500'}`}
            />
          </div>
          <ATFieldVisualization emergency={emergency} berserkerMode={berserkerMode} />
        </div>

        {/* Pilot Vitals */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="PILOT VITALS" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-orange-500'}`}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries({
              'Heart Rate': [Heart, pilotVitals.heartRate, 'bpm'] as [LucideIcon, number, string],
              'Sync Rate': [Gauge, pilotVitals.syncRate, '%'] as [LucideIcon, number, string],
              'Mental Contamination': [Brain, pilotVitals.mentalContamination, '%'] as [LucideIcon, number, string],
              'Ego Barrier': [Shield, pilotVitals.egoBarrier, '%'] as [LucideIcon, number, string],
            }).map(([label, [Icon, value, unit]], index) => (
              <motion.div
                key={label}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Icon className={`w-5 h-5 ${emergency ? 'text-red-500' : 'text-green-500'}`} />
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-1">{label}</div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${value > 100 ? 'bg-red-500 animate-pulse' : emergency ? 'bg-orange-500' : 'bg-green-500'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, value)}%` }}
                      />
                    </div>
                    <span className={`text-xs ${value > 100 ? 'text-red-500 animate-pulse' : ''}`}>
                      {Math.round(value)}{unit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* EVA Damage Display */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="EVA DAMAGE STATUS" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-orange-500'}`}
            />
          </div>
          <EVADamageDisplay emergency={emergency} />
        </div>

        {/* S2 Engine Status */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="S2 ENGINE STATUS" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-orange-500'}`}
            />
          </div>
          <S2EngineMonitor emergency={emergency} berserkerMode={berserkerMode} />
        </div>

        {/* Angel Radar */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="ANGEL DETECTION SYSTEM" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-green-500'}`}
            />
          </div>
          <AngelRadar emergency={emergency} />
        </div>

        {/* Weapon Systems */}
        <div className="mb-8 bg-black/40 rounded-lg p-6 backdrop-blur-sm">
          <div className="text-center mb-4">
            <GlitchText 
              text="WEAPON SYSTEMS" 
              className={`font-bold tracking-wider ${emergency ? 'text-red-500' : 'text-green-500'}`}
            />
          </div>
          <WeaponSystems emergency={emergency} berserkerMode={berserkerMode} />
        </div>

        {/* Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="space-y-4">
            {Object.entries({
              'Core Power': [Power, systemStatus.power] as [LucideIcon, number],
              'Neural Sync': [Brain, systemStatus.sync] as [LucideIcon, number],
              'AT Field': [Shield, systemStatus.shield] as [LucideIcon, number],
              'Bio-Links': [Activity, systemStatus.neural] as [LucideIcon, number],
              'LCL Density': [Binary, systemStatus.core] as [LucideIcon, number]
            }).map(([label, [Icon, value]], index) => (
              <motion.div
                key={label}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <Icon className={`w-5 h-5 ${emergency ? 'text-red-500' : 'text-green-500'}`} />
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full ${emergency ? 'bg-red-500' : 'bg-green-500'} ${value > 100 ? 'animate-pulse' : ''}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.min(100, value)}%` }}
                  />
                </div>
                <span className={`w-12 text-xs ${value > 100 ? 'text-red-500 animate-pulse' : ''}`}>
                  {Math.round(value)}%
                </span>
              </motion.div>
            ))}
          </div>

          {/* Control Panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              ['INITIATE LAUNCH', Cpu] as [string, LucideIcon],
              ['NEURAL OVERRIDE', Brain] as [string, LucideIcon],
              ['BERSERKER MODE', Skull] as [string, LucideIcon],
              ['FORCE SYNC', Radio] as [string, LucideIcon]
            ].map(([label, Icon]) => (
              <motion.button
                key={label}
                className={`relative border ${emergency ? 'border-red-500/50' : 'border-green-500/30'} 
                  p-4 text-center overflow-hidden group`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setEmergency(true);
                  if (label === 'BERSERKER MODE') setBerserkerMode(true);
                }}
              >
                <Icon className={`w-6 h-6 mx-auto mb-2 ${emergency ? 'text-red-500' : 'text-green-500'}`} />
                <span className={emergency ? 'text-red-500' : 'text-green-500'}>{label}</span>
                <motion.div
                  className="absolute inset-0 bg-red-500/20"
                  initial={false}
                  animate={{ opacity: emergency ? [0, 0.2, 0] : 0 }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Scrolling Warning Bar */}
        <motion.div 
          className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur border-t border-red-500/30"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
        >
          <motion.div
            animate={{
              x: ['-100%', '100%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear'
            }}
            className={`py-2 whitespace-nowrap ${emergency ? 'text-red-500' : 'text-green-500'}`}
          >
            {emergency ? 
              'WARNING: ANGEL APPROACH DETECTED // AT FIELD PATTERN: BLUE // MAGI SYSTEM: EMERGENCY PROTOCOLS ENGAGED // LCL PRESSURE CRITICAL // PILOT SYNC RATE EXCEEDING SAFETY PARAMETERS // TERMINAL DOGMA BREACH IMMINENT //' :
              'NERV CENTRAL DOGMA OPERATIONAL // ALL SYSTEMS NOMINAL // EVANGELION UNIT-01 READY FOR DEPLOYMENT // PILOT VITALS STABLE // MAGI CONSENSUS ACHIEVED //'
            }
          </motion.div>
        </motion.div>
      </div>

      {/* Audio Elements */}
      <audio ref={alarmRef} loop>
        <source src="/alarm.mp3" type="audio/mpeg" />
      </audio>
      <audio ref={berserkerRef} loop>
        <source src="/berserker.mp3" type="audio/mpeg" />
      </audio>

      {/* Emergency Plug Ejection Button */}
      <motion.button
        className={`fixed bottom-4 right-4 px-6 py-3 bg-red-900/20 border-2 border-red-500/50 
          text-red-500 font-mono text-sm backdrop-blur-sm z-50 ${emergency ? 'visible' : 'invisible'}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          if (window.confirm('WARNING: EMERGENCY PLUG EJECTION WILL TERMINATE EVA CONTROL. PROCEED?')) {
            // Trigger ejection sequence
            setEmergency(false)
            setBerserkerMode(false)
            // Could add more dramatic effects here
          }
        }}
      >
        EMERGENCY PLUG EJECTION
      </motion.button>

      <style jsx>{`
        @keyframes scan {
          from { background-position: 0 0 }
          to { background-position: 0 100% }
        }
        
        @keyframes glitch {
          0% { transform: translate(0) }
          20% { transform: translate(-2px, 2px) }
          40% { transform: translate(-2px, -2px) }
          60% { transform: translate(2px, 2px) }
          80% { transform: translate(2px, -2px) }
          100% { transform: translate(0) }
        }
      `}</style>
    </div>
  )
}