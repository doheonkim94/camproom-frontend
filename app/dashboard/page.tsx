import Header from '@/components/layout/Header';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
          <p className="mt-2 text-gray-600">정치인과 정당의 SNS 활동을 한눈에 확인하세요</p>
        </div>

        {/* 즐겨찾기 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">즐겨찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 즐겨찾기 카드 플레이스홀더 */}
            <div className="bg-white rounded-lg shadow p-6 border-2 border-dashed border-gray-300">
              <div className="text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p>정치인/정당을 즐겨찾기에 추가하세요</p>
              </div>
            </div>
          </div>
        </section>

        {/* 급상승 이슈 */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900">급상승 이슈</h2>
            <a href="/trends" className="text-primary hover:text-secondary text-sm font-medium">
              전체 보기 →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                    급상승
                  </span>
                  <span className="text-sm text-gray-500">+{120 + i * 10}%</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">키워드 #{i}</h3>
                <p className="text-sm text-gray-600 mb-3">언급 {1000 + i * 100}회</p>
                <div className="flex gap-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">경제</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 최근 활동 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">최근 활동</h2>
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 text-center text-gray-500">
              <p>즐겨찾기한 정치인의 최근 활동이 여기에 표시됩니다</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
