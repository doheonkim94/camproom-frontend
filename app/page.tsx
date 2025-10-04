import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary">CampRoom</h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">홈</a>
                <a href="#features" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">기능</a>
                <a href="#about" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">소개</a>
                <a href="#contact" className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">문의</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-gray-500 hover:text-primary px-3 py-2 text-sm font-medium transition-colors">로그인</button>
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">회원가입</button>
            </div>
          </div>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              정치인 SNS를 한눈에
              <span className="text-primary block">CampRoom</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              정치인들의 SNS 활동을 실시간으로 모니터링하고 분석하세요.
              트렌드와 이슈를 놓치지 않고 정치적 동향을 파악할 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors w-full sm:w-auto">
                무료로 시작하기
              </button>
              <Link href="/dashboard" className="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg text-lg font-medium transition-colors w-full sm:w-auto text-center">
                데모 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 통계 카드 섹션 */}
      <section className="py-16 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1,247</h3>
              <p className="text-gray-600">모니터링 정치인</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">58,943</h3>
              <p className="text-gray-600">수집된 포스트</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">127</h3>
              <p className="text-gray-600">급상승 이슈</p>
            </div>
          </div>
        </div>
      </section>

      {/* 핵심 기능 섹션 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">핵심 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              정치인들의 SNS 활동을 체계적으로 모니터링하고 분석할 수 있는 강력한 도구들을 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">실시간 모니터링</h3>
              <p className="text-gray-600">정치인들의 SNS 포스트를 실시간으로 수집하고 모니터링하여 즉각적인 인사이트를 제공합니다.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">트렌드 분석</h3>
              <p className="text-gray-600">AI 기반 분석을 통해 정치적 트렌드와 이슈를 파악하고 예측할 수 있습니다.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">맞춤형 대시보드</h3>
              <p className="text-gray-600">사용자의 관심사에 맞게 커스터마이징 가능한 대시보드로 필요한 정보만 집중할 수 있습니다.</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-5 5v-5zM4.868 19.718A9.957 9.957 0 0012 22a9.958 9.958 0 007.132-2.282M4.868 19.718A9.958 9.958 0 012 12a9.958 9.958 0 012.868-7.718M4.868 19.718L2 22M19.132 4.282A9.958 9.958 0 0122 12a9.958 9.958 0 01-2.868 7.718M19.132 4.282A9.957 9.957 0 0012 2a9.958 9.958 0 00-7.132 2.282M19.132 4.282L22 2M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">스마트 알림</h3>
              <p className="text-gray-600">중요한 이슈나 급상승 키워드에 대한 즉시 알림으로 놓치지 않고 대응할 수 있습니다.</p>
            </div>

            <div className="text-center">
              <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">데이터 시각화</h3>
              <p className="text-gray-600">복잡한 데이터를 직관적인 차트와 그래프로 시각화하여 쉽게 이해할 수 있습니다.</p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">자동 보고서</h3>
              <p className="text-gray-600">정기적인 분석 보고서를 자동으로 생성하여 정치적 동향을 체계적으로 파악할 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 시작하세요
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            CampRoom과 함께 정치인들의 SNS 활동을 효과적으로 모니터링하고,
            정치적 트렌드를 놓치지 마세요.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg text-lg font-medium transition-colors w-full sm:w-auto">
              14일 무료 체험
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg text-lg font-medium transition-colors w-full sm:w-auto">
              상담 예약하기
            </button>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">CampRoom</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                정치인 SNS 대시보드 플랫폼으로, 정치적 트렌드와 이슈를 실시간으로 모니터링하고 분석할 수 있는 혁신적인 솔루션을 제공합니다.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">대시보드</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">트렌드 분석</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">실시간 모니터링</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">보고서 생성</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">지원</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">도움말</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">문의하기</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">개발자 API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">상태 페이지</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 CampRoom. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">이용약관</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">쿠키 정책</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
