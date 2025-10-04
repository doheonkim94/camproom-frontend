import Header from '@/components/layout/Header';

export default function PartyComparisonPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">정당 비교</h1>
          <p className="mt-2 text-gray-600">정당별 SNS 활동과 이슈 대응을 비교 분석하세요</p>
        </div>

        {/* 기간 선택 */}
        <div className="mb-6">
          <div className="flex gap-2">
            {['7일', '30일', '90일'].map((period) => (
              <button
                key={period}
                className="px-4 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* 정당별 활동 통계 */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">정당별 활동 통계</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">정당</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">게시물</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">총 반응</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">평균 참여율</th>
                    <th className="text-right py-3 px-4 text-sm font-semibold text-gray-900">증감률</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: '정당 A', color: 'bg-blue-500', posts: 342, reactions: '125K', engagement: '4.2%', trend: '+12%' },
                    { name: '정당 B', color: 'bg-red-500', posts: 298, reactions: '98K', engagement: '3.8%', trend: '+8%' },
                    { name: '정당 C', color: 'bg-green-500', posts: 256, reactions: '82K', engagement: '3.5%', trend: '-3%' },
                  ].map((party) => (
                    <tr key={party.name} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className={`w-3 h-3 rounded-full ${party.color}`}></div>
                          <span className="font-medium text-gray-900">{party.name}</span>
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 text-gray-900">{party.posts}</td>
                      <td className="text-right py-3 px-4 text-gray-900">{party.reactions}</td>
                      <td className="text-right py-3 px-4 text-gray-900">{party.engagement}</td>
                      <td className="text-right py-3 px-4">
                        <span className={party.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                          {party.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 프레임별 언급 비중 */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">프레임별 언급 비중</h2>
            <div className="h-80 flex items-center justify-center bg-gray-50 rounded">
              <p className="text-gray-500">차트 영역 (프레임별 비교 차트)</p>
            </div>
          </div>
        </div>

        {/* 정당별 TOP 5 정치인 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['정당 A', '정당 B', '정당 C'].map((party) => (
            <div key={party} className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{party} TOP 5</h3>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((rank) => (
                  <div key={rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-gray-500 w-6">{rank}</span>
                      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                      <span className="text-sm text-gray-900">정치인 {rank}</span>
                    </div>
                    <span className="text-sm text-gray-600">{(6 - rank) * 2}K</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
