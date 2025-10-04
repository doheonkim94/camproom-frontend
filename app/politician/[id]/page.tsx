import Header from '@/components/layout/Header';

export default async function PoliticianProfilePage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 프로필 헤더 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900">정치인 이름</h1>
              <p className="text-gray-600">정당명 · 직책</p>
              <div className="flex gap-4 mt-4">
                <button className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary transition-colors">
                  즐겨찾기 추가
                </button>
                <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">
                  공유
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 기간 선택 */}
        <div className="mb-6">
          <div className="flex gap-2">
            {['1일', '7일', '30일'].map((period) => (
              <button
                key={period}
                className="px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">게시물</h3>
            <p className="text-3xl font-bold text-gray-900">24</p>
            <p className="text-sm text-green-600 mt-1">↑ 12% vs 이전 기간</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">총 반응</h3>
            <p className="text-3xl font-bold text-gray-900">15.2K</p>
            <p className="text-sm text-green-600 mt-1">↑ 8% vs 이전 기간</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">평균 참여율</h3>
            <p className="text-3xl font-bold text-gray-900">4.2%</p>
            <p className="text-sm text-red-600 mt-1">↓ 2% vs 이전 기간</p>
          </div>
        </div>

        {/* 활동 추이 차트 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">활동 추이</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">차트 영역</p>
          </div>
        </div>

        {/* 플랫폼별 최신 포스트 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">최신 포스트</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border-b border-gray-200 pb-4 last:border-0">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                    <span className="text-xs font-semibold text-blue-600">X</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">포스트 내용이 여기에 표시됩니다...</p>
                    <div className="flex gap-4 mt-2 text-sm text-gray-500">
                      <span>👍 1.2K</span>
                      <span>💬 45</span>
                      <span>🔄 123</span>
                      <span className="ml-auto">2시간 전</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 키워드 & 감성 분석 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">주요 키워드</h2>
            <div className="flex flex-wrap gap-2">
              {['경제', '복지', '노동', '교육', '환경'].map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">감성 분석</h2>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-green-600">긍정</span>
                  <span className="text-gray-600">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">중립</span>
                  <span className="text-gray-600">25%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-gray-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-red-600">부정</span>
                  <span className="text-gray-600">10%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
