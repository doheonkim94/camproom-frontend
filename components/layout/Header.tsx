'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/constants';

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href={ROUTES.HOME} className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">CampRoom</h1>
            </Link>

            <div className="hidden md:flex ml-10 space-x-8">
              <Link
                href={ROUTES.DASHBOARD}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(ROUTES.DASHBOARD)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                대시보드
              </Link>
              <Link
                href={ROUTES.PARTY_COMPARISON}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(ROUTES.PARTY_COMPARISON)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                정당 비교
              </Link>
              <Link
                href={ROUTES.TRENDS}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(ROUTES.TRENDS)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                이슈 트렌드
              </Link>
              <Link
                href={ROUTES.SEARCH}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(ROUTES.SEARCH)
                    ? 'text-primary'
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                검색
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-primary p-2 rounded-md transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <Link
              href={ROUTES.SETTINGS}
              className="text-gray-500 hover:text-primary p-2 rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
