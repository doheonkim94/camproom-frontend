'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchType, setSearchType] = useState<'all' | 'politician' | 'party' | 'keyword'>('all');

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">검색</h1>
          <p className="mt-2 text-gray-600">정치인, 정당, 키워드를 검색하세요</p>
        </div>

        {/* 검색 바 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex gap-4 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="검색어를 입력하세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors">
              검색
            </button>
          </div>

          {/* 검색 타입 필터 */}
          <div className="flex gap-2">
            {[
              { value: 'all', label: '전체' },
              { value: 'politician', label: '정치인' },
              { value: 'party', label: '정당' },
              { value: 'keyword', label: '키워드' },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() => setSearchType(type.value as any)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  searchType === type.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* 검색 결과 */}
        {searchQuery ? (
          <div className="space-y-6">
            {/* 정치인 결과 */}
            {(searchType === 'all' || searchType === 'politician') && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">정치인</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">정치인 이름 {i}</h3>
                          <p className="text-sm text-gray-500">정당명 · 직책</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 정당 결과 */}
            {(searchType === 'all' || searchType === 'party') && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">정당</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition-shadow cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded"></div>
                        <div>
                          <h3 className="font-semibold text-gray-900">정당 이름 {i}</h3>
                          <p className="text-sm text-gray-500">의원 수 · 최근 활동</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 키워드 결과 */}
            {(searchType === 'all' || searchType === 'keyword') && (
              <section>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">관련 키워드</h2>
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex flex-wrap gap-2">
                    {['경제정책', '복지개혁', '노동법', '교육예산', '환경보호'].map((keyword) => (
                      <button
                        key={keyword}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm hover:bg-blue-200 transition-colors"
                      >
                        {keyword}
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-gray-500">검색어를 입력하여 정치인, 정당, 키워드를 찾아보세요</p>
          </div>
        )}
      </main>
    </>
  );
}
