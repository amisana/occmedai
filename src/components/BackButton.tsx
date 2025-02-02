'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label: string;
}

export function BackButton({ href, label }: BackButtonProps) {
  return (
    <Link 
      href={href}
      className="text-green-500 hover:text-green-400 flex items-center gap-2 mb-4"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
} 