'use client'
import React from 'react'
import { Command } from 'cmdk'
import { Terminal, Code, Book, GraduationCap, BookOpen } from 'lucide-react'
import { useRouter } from 'next/navigation'

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const runCommand = (command: string) => {
    setOpen(false)
    switch (command) {
      case 'concepts':
        router.push('/concepts')
        break
      case 'process':
        router.push('/process')
        break
      case 'prompts':
        router.push('/prompts')
        break
      case 'education':
        router.push('/education')
        break
      case 'blog':
        window.open('https://kianimd.substack.com', '_blank')
        break
      default:
        break
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
      <div className="fixed inset-0 max-w-md mx-auto mt-[20vh]">
        <Command className="w-full border border-green-900/30 bg-black/90 rounded-lg overflow-hidden backdrop-blur-sm">
          <div className="flex items-center border-b border-green-900/30 px-3">
            <Terminal className="w-4 h-4 text-green-500 mr-2" />
            <Command.Input 
              placeholder="Enter command..." 
              className="flex-1 h-12 bg-transparent outline-none placeholder:text-green-500/50 text-green-500"
            />
          </div>
          <Command.List className="p-2 max-h-[300px] overflow-y-auto">
            <Command.Group heading="Navigation">
              <Command.Item 
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-green-500/10 rounded text-gray-400 hover:text-green-500"
                onSelect={() => runCommand('education')}
              >
                <GraduationCap size={16} />
                <span>Education & Training</span>
              </Command.Item>
              <Command.Item 
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-green-500/10 rounded text-gray-400 hover:text-green-500"
                onSelect={() => runCommand('concepts')}
              >
                <Book size={16} />
                <span>Visual Concepts</span>
              </Command.Item>
              <Command.Item 
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-green-500/10 rounded text-gray-400 hover:text-green-500"
                onSelect={() => runCommand('process')}
              >
                <Code size={16} />
                <span>Process Terminal</span>
              </Command.Item>
              <Command.Item 
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-green-500/10 rounded text-gray-400 hover:text-green-500"
                onSelect={() => runCommand('prompts')}
              >
                <Terminal size={16} />
                <span>Prompt Engineering</span>
              </Command.Item>
              <Command.Item 
                className="flex items-center gap-2 p-2 cursor-pointer hover:bg-green-500/10 rounded text-gray-400 hover:text-green-500"
                onSelect={() => runCommand('blog')}
              >
                <BookOpen size={16} />
                <span>Blog</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}

export default CommandMenu 