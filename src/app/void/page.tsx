'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter, useSearchParams } from 'next/navigation';
import { 
  Terminal, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Brain, 
  Globe, 
  Code,
  BookOpen,
  Mail,
  Compass,
  TestTube
} from 'lucide-react';
import { NoiseBackground } from '@/components/NoiseBackground';
import { PageTransition } from '@/components/PageTransition';
import { CommandSuggestion } from '@/components/CommandSuggestion';
import { TypeWriter } from '@/components/TypeWriter';

interface Command {
  id: string;
  command: string;
  description: string;
  path: string;
  icon: JSX.Element;
}

const VoidTerminal = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldInitialize = searchParams.get('init') === 'true';
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [showCommands, setShowCommands] = useState(false);
  const [currentLine, setCurrentLine] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isEntering, setIsEntering] = useState(shouldInitialize);
  const [isNavigating, setIsNavigating] = useState(false);
  const [navigationText, setNavigationText] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const [bootPhase, setBootPhase] = useState(0);
  const [bootComplete, setBootComplete] = useState(!shouldInitialize);
  const [hasBooted, setHasBooted] = useState(!shouldInitialize);
  const outputRef = useRef<HTMLDivElement>(null);

  const commands: Command[] = [
    {
      id: 'explore',
      command: 'navigate explore',
      description: 'Explore articles and deep dives',
      path: '/explore',
      icon: <Compass className="w-4 h-4" />
    },
    {
      id: 'education',
      command: 'navigate education',
      description: 'View academic background and training timeline',
      path: '/education',
      icon: <GraduationCap className="w-4 h-4" />
    },
    {
      id: 'projects',
      command: 'navigate projects',
      description: 'Explore professional projects and initiatives',
      path: '/projects',
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      id: 'expertise',
      command: 'navigate expertise',
      description: 'View areas of professional expertise',
      path: '/concepts',
      icon: <Brain className="w-4 h-4" />
    },
    {
      id: 'experience',
      command: 'navigate experience',
      description: 'Professional experience and clinical rotations',
      path: '/process',
      icon: <Terminal className="w-4 h-4" />
    },
    {
      id: 'blog',
      command: 'navigate blog',
      description: 'Read articles and insights on Substack',
      path: 'https://kianimd.substack.com',
      icon: <BookOpen className="w-4 h-4" />
    }
  ];

  const bootSequence = [
    {
      command: 'sudo initialize occdoc_terminal',
      output: [
        'Initializing OccDoc Terminal v1.0...',
        '[OK] Core systems check',
        '[OK] Neural interface active',
        '[OK] Quantum processors online',
        'Beginning boot sequence...'
      ]
    },
    {
      command: './mount_knowledge_base.sh',
      output: [
        'Mounting professional knowledge base...',
        '> Medical expertise................OK',
        '> Environmental health............OK',
        '> Occupational medicine..........OK',
        '> AI integration.................OK',
        'Knowledge base successfully mounted.'
      ]
    },
    {
      command: 'configure --security-protocols',
      output: [
        'Configuring security protocols...',
        'Establishing quantum-encrypted channel...',
        'Neural handshake complete.',
        'Terminal secured.'
      ]
    },
    {
      command: './launch_interface.sh --mode=professional',
      output: [
        'Launching professional interface...',
        'Loading command modules...',
        'Calibrating neural responses...',
        'Interface ready.',
        '',
        'Welcome, Dr. Kiani.',
        'Type "help" for available commands.'
      ]
    }
  ];

  useEffect(() => {
    let mounted = true;

    const runBootSequence = async () => {
      if (!mounted || !shouldInitialize) return;
      
      // Run normal boot sequence
      setOutput([]);
      await new Promise(r => setTimeout(r, 500));
      if (!mounted) return;
      setOutput(['INITIALIZING OCCDOC TERMINAL v1.0...']);
      await new Promise(r => setTimeout(r, 1000));

      let currentOutput: string[] = ['INITIALIZING OCCDOC TERMINAL v1.0...'];

      // Process each phase sequentially
      for (const phase of bootSequence) {
        if (!mounted) return;

        // Add command
        const commandLine = `root@system:~# ${phase.command}`;
        currentOutput = [...currentOutput, commandLine];
        setOutput(currentOutput);
        await new Promise(r => setTimeout(r, 800));

        // Process each line of output
        for (const line of phase.output) {
          if (!mounted) return;
          currentOutput = [...currentOutput, line];
          setOutput(currentOutput);
          await new Promise(r => setTimeout(r, 200));
        }

        // Add spacing between phases
        currentOutput = [...currentOutput, ''];
        setOutput(currentOutput);
        await new Promise(r => setTimeout(r, 500));
      }

      if (!mounted) return;

      // Add final messages
      currentOutput = [
        ...currentOutput,
        'SYSTEM READY',
        'Type "help" for available commands.',
        ''
      ];
      setOutput(currentOutput);

      // Mark as booted when complete
      if (mounted) {
        setHasBooted(true);
        setBootComplete(true);
        setShowCommands(true);
        setIsEntering(false);
        
        // Remove the init parameter from URL
        router.replace('/void');
      }
    };

    if (shouldInitialize) {
      runBootSequence();
    } else {
      setOutput([
        'OCCDOC TERMINAL v1.0',
        'Type "help" for available commands.',
        ''
      ]);
      setShowCommands(true);
    }

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      mounted = false;
    };
  }, [shouldInitialize, router]); // Add router to dependencies

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Ctrl/Cmd + K to focus input
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const input = document.querySelector('input');
        if (input) input.focus();
      }
      
      // Esc to clear input
      if (e.key === 'Escape') {
        setInput('');
      }
      
      // Ctrl/Cmd + L to clear terminal
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        handleCommand('clear');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      handleCommand(input);
    }
    
    // Command history navigation
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    }
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }

    // Tab completion
    if (e.key === 'Tab') {
      e.preventDefault();
      const matchingCommands = commands
        .map(c => c.command)
        .filter(c => c.startsWith(input.toLowerCase()));
      
      if (matchingCommands.length === 1) {
        setInput(matchingCommands[0]);
      }
    }

    // Handle suggestion navigation
    if (suggestions.length > 0) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedSuggestion(prev => 
          prev < suggestions.length - 1 ? prev + 1 : -1
        );
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedSuggestion(prev => 
          prev > -1 ? prev - 1 : suggestions.length - 1
        );
      }
      if (e.key === 'Enter' && selectedSuggestion !== -1) {
        e.preventDefault();
        handleCommand(suggestions[selectedSuggestion]);
        setSuggestions([]);
        setSelectedSuggestion(-1);
        return;
      }
      if (e.key === 'Escape') {
        setSuggestions([]);
        setSelectedSuggestion(-1);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInput(value);

    if (value.trim()) {
      const matchingCommands = commands
        .map(c => c.command)
        .filter(c => c.toLowerCase().includes(value.toLowerCase()));
      setSuggestions(matchingCommands);
      setSelectedSuggestion(-1);
    } else {
      setSuggestions([]);
      setSelectedSuggestion(-1);
    }
  };

  const handleSuggestionSelect = (command: string) => {
    setInput(command);
    setSuggestions([]);
    setSelectedSuggestion(-1);
  };

  const handleCommand = async (command: string) => {
    const cmd = command.toLowerCase().trim();
    
    // Add reboot command
    if (cmd === 'reboot' || cmd === 'restart') {
      setOutput(prev => [...prev, `guest@occdoc:~$ ${command}`, 'Initiating system reboot...']);
      await new Promise(r => setTimeout(r, 1000));
      sessionStorage.removeItem('terminalBooted');
      setHasBooted(false);
      window.location.reload();
      return;
    }

    const matchedCommand = commands.find(c => c.command === cmd);

    // Add command to output with cursor
    setOutput(prev => [...prev, `guest@occdoc:~$ ${command}`]);
    
    if (matchedCommand) {
      // Add "thinking" effect
      setOutput(prev => [...prev, 'Processing command...']);
      await new Promise(r => setTimeout(r, 500));
      
      // Show navigation message with scanning effect
      setOutput(prev => [
        ...prev, 
        `Preparing to load ${matchedCommand.id.toUpperCase()}_MODULE...`,
        'Scanning neural pathways...',
        'Establishing secure connection...',
        `Redirecting to ${matchedCommand.id.toUpperCase()}_INTERFACE...`
      ]);
      
      setIsNavigating(true);
      setNavigationText(`LOADING_${matchedCommand.id.toUpperCase()}_SYSTEM...`);
      
      setTimeout(() => {
        if (matchedCommand.path.startsWith('http')) {
          window.open(matchedCommand.path, '_blank');
          setIsNavigating(false);
        } else {
          router.push(matchedCommand.path);
        }
      }, 2000);
    } else if (cmd === 'help') {
      setOutput(prev => [
        ...prev,
        `> ${command}`,
        'Available commands:',
        ...commands.map(c => `  ${c.command} - ${c.description}`),
        '  help    - Show this help message',
        '  clear   - Clear terminal',
        '  reboot  - Restart terminal with boot sequence',
        '',
        'Keyboard shortcuts:',
        '  Ctrl/Cmd + K  - Focus input',
        '  Ctrl/Cmd + L  - Clear terminal',
        '  Esc          - Clear input',
        '  Tab          - Autocomplete command',
        '  Up/Down      - Navigate command history'
      ]);
    } else if (cmd === 'clear') {
      setOutput([]);
    } else {
      setOutput(prev => [
        ...prev,
        'ERROR: Command not recognized.',
        'Neural pattern matching failed.',
        'Type "help" for available commands.'
      ]);
    }
    setInput('');
  };

  // Add scroll to bottom effect
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]); // Scroll whenever output changes

  // Save state changes to session
  useEffect(() => {
    if (output.length > 0) {
      sessionStorage.setItem('terminalOutput', JSON.stringify(output));
    }
  }, [output]);

  useEffect(() => {
    if (commandHistory.length > 0) {
      sessionStorage.setItem('commandHistory', JSON.stringify(commandHistory));
    }
  }, [commandHistory]);

  // Clear session on unmount (optional)
  useEffect(() => {
    return () => {
      // Uncomment if you want to clear session on page leave
      // sessionStorage.clear();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <NoiseBackground />
      <PageTransition isNavigating={isNavigating} text={navigationText} />
      
      <div className="relative z-10 container mx-auto px-4 md:px-6 py-24 md:py-32">
        <motion.div 
          className="border border-green-900/30 bg-black/80 rounded-lg overflow-hidden backdrop-blur-sm crt-overlay"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Terminal Header - Stays Fixed */}
          <div className="border-b border-green-900/30 p-2 flex items-center space-x-2 bg-black/90 backdrop-blur-sm sticky top-0 z-20">
            <div className="h-3 w-3 rounded-full bg-red-500"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
            <div className="h-3 w-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-green-500/50 terminal-flicker">OCCDOC_TERMINAL_v1.0</span>
          </div>

          {/* Terminal Content - Scrollable Area */}
          <div className="relative">
            {/* Scanline effect */}
            <div className="scanline absolute inset-0 pointer-events-none" />
            
            {/* Scrollable Output Area */}
            <div 
              ref={outputRef}
              className="p-4 space-y-2 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-track-black/20 scrollbar-thumb-green-500/20 hover:scrollbar-thumb-green-500/30"
            >
              {/* Output */}
              <div className="space-y-1">
                {output.map((line, index) => (
                  <motion.div 
                    key={`line-${index}`}
                    className="text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className={
                      line.includes('ERROR') ? 'text-red-500' :
                      line.includes('OK') ? 'text-green-500' :
                      line.startsWith('root@system') ? 'text-yellow-500' :
                      'text-gray-300'
                    }>
                      {line}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Command Grid */}
              {showCommands && bootComplete && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="pt-4"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {commands.map((cmd, index) => (
                      <motion.button
                        key={cmd.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border border-green-900/30 p-3 text-left hover:border-green-500/50 hover:bg-green-500/5 group"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCommand(cmd.command)}
                      >
                        <div className="flex items-center space-x-2 mb-2 text-green-500">
                          {cmd.icon}
                          <span>{cmd.id.toUpperCase()}</span>
                        </div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">
                          {cmd.description}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Line - Stays at Bottom */}
            {bootComplete && (
              <div className="border-t border-green-900/30 bg-black/90 backdrop-blur-sm p-4 sticky bottom-0">
                <div className="flex items-center space-x-2 relative">
                  <span className="text-green-500/50">guest@occdoc:~$</span>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={input}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      className="w-full bg-transparent border-none outline-none text-green-500"
                      autoFocus
                    />
                    <CommandSuggestion
                      suggestions={suggestions}
                      visible={suggestions.length > 0}
                      onSelect={handleSuggestionSelect}
                      selectedIndex={selectedSuggestion}
                    />
                  </div>
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'}`}>_</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default VoidTerminal;
