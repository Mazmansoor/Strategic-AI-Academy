'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-notion-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SA</span>
            </div>
            <span className="text-lg font-semibold text-notion-text">Strategic AI Academy</span>
          </Link>
          <div className="hidden md:flex gap-1 items-center">
            <Link
              href="/courses"
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all",
                isActive('/courses')
                  ? "text-primary-600 bg-primary-50 font-medium"
                  : "text-notion-text-light hover:text-notion-text hover:bg-notion-hover"
              )}
            >
              Capabilities
            </Link>
            <Link
              href="/diagnostic"
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all",
                isActive('/diagnostic')
                  ? "text-primary-600 bg-primary-50 font-medium"
                  : "text-notion-text-light hover:text-notion-text hover:bg-notion-hover"
              )}
            >
              Diagnostic
            </Link>
            <Link
              href="/how-it-works"
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all",
                isActive('/how-it-works')
                  ? "text-primary-600 bg-primary-50 font-medium"
                  : "text-notion-text-light hover:text-notion-text hover:bg-notion-hover"
              )}
            >
              How It Works
            </Link>
            <Link
              href="/manifesto"
              className={cn(
                "px-4 py-2 text-sm rounded-md transition-all",
                isActive('/manifesto')
                  ? "text-primary-600 bg-primary-50 font-medium"
                  : "text-notion-text-light hover:text-notion-text hover:bg-notion-hover"
              )}
            >
              Manifesto
            </Link>
            <div className="w-px h-6 bg-notion-border mx-2"></div>
            <Link
              href="/login"
              className="px-4 py-2 text-sm text-white bg-notion-accent hover:bg-primary-700 rounded-md transition-all font-medium shadow-sm hover:shadow"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
