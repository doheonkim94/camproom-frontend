import Header from '@/components/layout/Header';

export default function TrendsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">이슈 트렌드</h1>
          <p className="mt-2 text-gray-600">실시간 급상승 키워드와 이슈를 확인하세요</p>
        </div>

        {/* 필터 */}
        <div className="mb-6 flex gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
            <option>전체 기간</option>
            <option>최근 1시간</option>
            <option>최근 6시간</option>
            <option>오늘</option>
            <option>최근 7일</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md text-sm">
            <option>전체 카테고리</option>
            <option>경제</option>
            <option>복지</option>
            <option>안보</option>
            <option>노동</option>
            <option>의료</option>
          </select>
        </div>

        {/* 급상승 이슈 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <span className="text-sm font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                  급상승 #{i}
                </span>
                <span className="text-sm text-green-600 font-semibold">+{150 - i * 10}%</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">키워드 이름</h3>
              <p className="text-sm text-gray-600 mb-3">언급 {2000 - i * 100}회</p>
              <div className="flex gap-2 mb-3">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">경제</span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">복지</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
                <span>{5 + i}명 언급</span>
              </div>
            </div>
          ))}
        </div>

        {/* 키워드별 타임라인 */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">키워드 타임라인</h2>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded">
            <p className="text-gray-500">타임라인 차트 영역</p>
          </div>
        </div>

        {/* 키워드별 감성 분석 */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">키워드별 감성 분석</h2>
          <div className="space-y-4">
            {['키워드 A', '키워드 B', '키워드 C'].map((keyword) => (
              <div key={keyword} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">{keyword}</h4>
                  <span className="text-sm text-gray-500">언급 1,234회</span>
                </div>
                <div className="flex gap-1 h-4 rounded-full overflow-hidden">
                  <div className="bg-green-500" style={{ width: '60%' }}></div>
                  <div className="bg-gray-400" style={{ width: '30%' }}></div>
                  <div className="bg-red-500" style={{ width: '10%' }}></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>긍정 60%</span>
                  <span>중립 30%</span>
                  <span>부정 10%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
