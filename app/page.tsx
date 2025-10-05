'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [selectedPersona, setSelectedPersona] = useState<'incumbent' | 'candidate' | 'staff'>('incumbent');
  const [showSampleModal, setShowSampleModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);

  return (
    <>
      {/* 헤더 */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-[#8edec5]">CampRoom</h1>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-500 hover:text-[#8edec5] px-3 py-2 text-sm font-medium transition-colors">기능</a>
                <a href="#how-it-works" className="text-gray-500 hover:text-[#8edec5] px-3 py-2 text-sm font-medium transition-colors">작동 방식</a>
                <a href="#pricing" className="text-gray-500 hover:text-[#8edec5] px-3 py-2 text-sm font-medium transition-colors">요금</a>
                <a href="#faq" className="text-gray-500 hover:text-[#8edec5] px-3 py-2 text-sm font-medium transition-colors">FAQ</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFormModal(true)}
                className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-2 rounded-md text-sm font-semibold transition-colors"
              >
                무료 측정 시작
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* 히어로 섹션 */}
      <section className="relative bg-gradient-to-br from-[#141930] to-[#1f2847] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              정치인의 SNS 전략 비서
            </h1>
            <p className="text-2xl md:text-3xl text-[#8edec5] mb-8 font-medium">
              경쟁자를 분석하고, 나를 성장시키는 AI 파트너
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              경쟁 인텔리전스(자동 모니터링) · 파워 지수(랭킹/추이) · AI 컨설팅(실행 전략)<br />
              — 5분 요약 리포트로 회의 전에 결정하세요
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <button
                onClick={() => setShowFormModal(true)}
                className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 w-full sm:w-auto shadow-lg"
              >
                내 파워 지수 무료 측정
              </button>
              <button
                onClick={() => setShowSampleModal(true)}
                className="border-2 border-[#8edec5] text-[#8edec5] hover:bg-[#8edec5] hover:text-[#141930] px-8 py-4 rounded-lg text-lg font-bold transition-all w-full sm:w-auto"
              >
                경쟁자 분석 샘플 보기
              </button>
            </div>

            {/* Proof Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#8edec5]/30">
                <p className="text-[#8edec5] font-semibold text-sm">경쟁자 자동 모니터링</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#8edec5]/30">
                <p className="text-[#8edec5] font-semibold text-sm">랭킹/성장 추이</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#8edec5]/30">
                <p className="text-[#8edec5] font-semibold text-sm">AI 전략 제안</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-[#8edec5]/30">
                <p className="text-[#8edec5] font-semibold text-sm">5분 리포트</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 페르소나 맞춤 섹션 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#141930] mb-12">
            당신의 역할에 맞는 솔루션
          </h2>

          {/* 탭 */}
          <div className="flex justify-center mb-12 border-b border-gray-200">
            <button
              onClick={() => setSelectedPersona('incumbent')}
              className={`px-8 py-4 text-lg font-semibold transition-all border-b-4 ${
                selectedPersona === 'incumbent'
                  ? 'border-[#8edec5] text-[#141930]'
                  : 'border-transparent text-gray-500 hover:text-[#141930]'
              }`}
            >
              현역 의원
            </button>
            <button
              onClick={() => setSelectedPersona('candidate')}
              className={`px-8 py-4 text-lg font-semibold transition-all border-b-4 ${
                selectedPersona === 'candidate'
                  ? 'border-[#8edec5] text-[#141930]'
                  : 'border-transparent text-gray-500 hover:text-[#141930]'
              }`}
            >
              예비 후보/당직자
            </button>
            <button
              onClick={() => setSelectedPersona('staff')}
              className={`px-8 py-4 text-lg font-semibold transition-all border-b-4 ${
                selectedPersona === 'staff'
                  ? 'border-[#8edec5] text-[#141930]'
                  : 'border-transparent text-gray-500 hover:text-[#141930]'
              }`}
            >
              보좌진
            </button>
          </div>

          {/* 현역 의원 */}
          {selectedPersona === 'incumbent' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-[#141930] mb-4">
                다음 선거 전까지, &apos;내 파워 지수&apos;와 &apos;경쟁자 추이&apos;를 매주 확인하세요
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">재선 대비 경쟁 지형 요약(5분)</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">지역·이슈별 강/약점 분석</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">AI 전략 제안으로 즉시 실행</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowFormModal(true)}
                  className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  내 파워 지수 무료 측정
                </button>
                <button
                  onClick={() => setShowFormModal(true)}
                  className="border-2 border-[#8edec5] text-[#8edec5] hover:bg-[#8edec5] hover:text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  주간 리포트 받기
                </button>
              </div>
            </div>
          )}

          {/* 예비 후보/당직자 */}
          {selectedPersona === 'candidate' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-[#141930] mb-4">
                선배와의 격차, 파워 지수로 좁힙니다
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">랭킹·성장 추이로 위치 파악</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">성공 사례 학습(벤치마크 카드)</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">최적 발행 시간/주제/톤 추천</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowSampleModal(true)}
                  className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  성공 사례 모아보기
                </button>
                <button
                  onClick={() => setShowFormModal(true)}
                  className="border-2 border-[#8edec5] text-[#8edec5] hover:bg-[#8edec5] hover:text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  성장 플랜 받기
                </button>
              </div>
            </div>
          )}

          {/* 보좌진 */}
          {selectedPersona === 'staff' && (
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-[#141930] mb-4">
                경쟁자 체크·위기 모니터링을 자동으로
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">일일 경쟁자 리포트 자동 메일</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">급상승 이슈 알림</p>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#8edec5] rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-[#141930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <p className="text-lg text-gray-700">주간 성과 보고서 1페이지 완성</p>
                </div>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => setShowFormModal(true)}
                  className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  자동 알림 신청
                </button>
                <button
                  onClick={() => setShowSampleModal(true)}
                  className="border-2 border-[#8edec5] text-[#8edec5] hover:bg-[#8edec5] hover:text-[#141930] px-8 py-3 rounded-lg text-lg font-bold transition-all flex-1"
                >
                  보고서 샘플 다운로드
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 가치 제안 3카드 */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141930] mb-4">핵심 기능</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              경쟁 인텔리전스 · 성장 지표 · AI 전략을 하나로
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 경쟁 인텔리전스 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#8edec5] transition-all">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-2xl font-bold text-[#141930] mb-4">경쟁 인텔리전스</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                경쟁자 활동 자동 모니터링 → 일일 경쟁자 리포트 & 전략 분석
              </p>

              {/* 미니 UI */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-sm font-bold">A</div>
                    <div>
                      <p className="font-semibold text-sm">후보 A</p>
                      <p className="text-xs text-gray-500">활동량 ↑ 23%</p>
                    </div>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">급상승</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm font-bold">B</div>
                    <div>
                      <p className="font-semibold text-sm">후보 B</p>
                      <p className="text-xs text-gray-500">활동량 ↓ 5%</p>
                    </div>
                  </div>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">안정</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-sm font-bold">C</div>
                    <div>
                      <p className="font-semibold text-sm">후보 C</p>
                      <p className="text-xs text-gray-500">활동량 ↑ 12%</p>
                    </div>
                  </div>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">주목</span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-4">원문 링크, KST 기준, 데이터 출처 공개</p>

              <button
                onClick={() => setShowSampleModal(true)}
                className="w-full bg-[#141930] hover:bg-[#1f2847] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                오늘의 경쟁자 리포트 보기
              </button>
            </div>

            {/* 파워 지수 */}
            <div className="bg-gradient-to-br from-[#8edec5]/10 to-white rounded-2xl shadow-xl p-8 border-2 border-[#8edec5] transform md:scale-105">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-[#141930] mb-4">나의 성장 지표 (파워 지수)</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                ER·성장률·활동 지속성·이슈 반응성 합산 지수 → 랭킹/추이/강약점
              </p>

              {/* 미니 UI */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <svg className="transform -rotate-90 w-32 h-32">
                      <circle cx="64" cy="64" r="56" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                      <circle cx="64" cy="64" r="56" stroke="#8edec5" strokeWidth="8" fill="none"
                        strokeDasharray="352" strokeDashoffset="88" strokeLinecap="round" />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-[#141930]">75</span>
                      <span className="text-xs text-gray-500">파워 지수</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">주간 성장률</span>
                    <span className="font-semibold text-green-600">+8.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">지역 내 랭킹</span>
                    <span className="font-semibold text-[#141930]">#3</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowFormModal(true)}
                className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-3 rounded-lg font-bold transition-all"
              >
                내 파워 지수 무료 측정
              </button>
            </div>

            {/* AI 전략 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 border-2 border-gray-100 hover:border-[#8edec5] transition-all">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-[#141930] mb-4">AI 전략 컨설팅</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                데이터 기반 콘텐츠 추천(주제·톤앤매너·해시태그) + 최적 발행 시간
              </p>

              {/* 미니 UI */}
              <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6 space-y-3">
                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-xs text-blue-600 font-semibold mb-1">다음 주 메시지 제안 1</p>
                  <p className="text-sm text-gray-700">&quot;지역 교통 개선&quot; + 긍정적 톤</p>
                  <p className="text-xs text-gray-500 mt-1">최적 시간: 화 19:00</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-xs text-green-600 font-semibold mb-1">다음 주 메시지 제안 2</p>
                  <p className="text-sm text-gray-700">&quot;청년 일자리&quot; + 공감형 스토리</p>
                  <p className="text-xs text-gray-500 mt-1">최적 시간: 목 10:00</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <p className="text-xs text-purple-600 font-semibold mb-1">다음 주 메시지 제안 3</p>
                  <p className="text-sm text-gray-700">&quot;환경 정책&quot; + 비전 제시형</p>
                  <p className="text-xs text-gray-500 mt-1">최적 시간: 금 14:00</p>
                </div>
              </div>

              <button
                onClick={() => setShowFormModal(true)}
                className="w-full bg-[#141930] hover:bg-[#1f2847] text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                다음 주 전략 3줄 받기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 데모 & 샘플 */}
      <section className="py-20 bg-gradient-to-br from-[#141930] to-[#1f2847]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">5분 요약 리포트 미리보기</h2>
            <p className="text-xl text-gray-300">실제 리포트 샘플을 확인해보세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#141930] mb-4">📊 1페이지 샘플 리포트</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <span className="text-[#8edec5] mr-2">✓</span> 급상승 키워드 분석
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-[#8edec5] mr-2">✓</span> 감성·프레임 트렌드
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-[#8edec5] mr-2">✓</span> 최적 발행 시간대
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-[#8edec5] mr-2">✓</span> 파워 지수 추이 차트
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-[#8edec5] mr-2">✓</span> 다음 주 전략 3줄 제안
                </li>
              </ul>
              <button
                onClick={() => setShowSampleModal(true)}
                className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-3 rounded-lg font-bold transition-all"
              >
                샘플 PDF 다운로드
              </button>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h3 className="text-xl font-bold text-[#141930] mb-4">⚡ 경쟁자 비교 데모</h3>
              <div className="space-y-3 mb-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">후보 A</span>
                    <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">파워 지수 82</span>
                  </div>
                  <p className="text-sm text-gray-600">증감: +15% | 핵심 이슈: 교통, 환경</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">후보 B</span>
                    <span className="text-sm bg-yellow-100 text-yellow-700 px-2 py-1 rounded">파워 지수 75</span>
                  </div>
                  <p className="text-sm text-gray-600">증감: +8% | 핵심 이슈: 청년, 복지</p>
                </div>
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">후보 C</span>
                    <span className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded">파워 지수 68</span>
                  </div>
                  <p className="text-sm text-gray-600">증감: -3% | 핵심 이슈: 교육, 안전</p>
                </div>
              </div>
              <button
                onClick={() => setShowFormModal(true)}
                className="w-full bg-[#141930] hover:bg-[#1f2847] text-white px-6 py-3 rounded-lg font-bold transition-all"
              >
                우리 팀 맞춤 리포트 받기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141930] mb-4">작동 방식</h2>
            <p className="text-xl text-gray-600">4단계로 간단하게 시작하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#8edec5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#141930]">
                1
              </div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">대상 설정</h3>
              <p className="text-gray-600">
                본인 계정 + 경쟁자 3명 + 이슈 2개 입력
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8edec5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#141930]">
                2
              </div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">자동 수집/분석</h3>
              <p className="text-gray-600">
                공식 계정 데이터 기반<br />(ER·성장률·프레임·감성)
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8edec5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#141930]">
                3
              </div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">전달</h3>
              <p className="text-gray-600">
                일일 경쟁자 리포트<br />주간 5분 요약<br />급상승 알림
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#8edec5] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-[#141930]">
                4
              </div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">실행</h3>
              <p className="text-gray-600">
                AI 전략 제안<br />(주제·톤·시간·형식) 적용
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowFormModal(true)}
              className="bg-[#141930] hover:bg-[#1f2847] text-white px-10 py-4 rounded-lg text-lg font-bold transition-all inline-block"
            >
              2주 파일럿 신청 (무료)
            </button>
          </div>
        </div>
      </section>

      {/* 가격/파일럿 */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141930] mb-4">요금제</h2>
            <p className="text-xl text-gray-600">부담 없이 시작하고, 필요한 만큼 확장하세요</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border-2 border-[#8edec5] rounded-2xl p-8 bg-gradient-to-br from-[#8edec5]/5 to-white">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#141930] mb-2">파일럿 (2주 무료)</h3>
                <p className="text-4xl font-bold text-[#8edec5] mb-4">₩0</p>
                <p className="text-gray-600">검증 기간 제공</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">계정 1개 + 경쟁자 3명 + 이슈 2개</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">일일 경쟁자 리포트 (이메일)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">주간 5분 요약 리포트</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">급상승 이슈 알림</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-700">파워 지수 측정 및 추이 분석</span>
                </li>
              </ul>

              <button
                onClick={() => setShowFormModal(true)}
                className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-4 rounded-lg text-lg font-bold transition-all"
              >
                파일럿 시작하기
              </button>
            </div>

            <div className="border-2 border-[#141930] rounded-2xl p-8 bg-gradient-to-br from-[#141930] to-[#1f2847]">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">팀 플랜</h3>
                <p className="text-4xl font-bold text-[#8edec5] mb-4">맞춤 견적</p>
                <p className="text-gray-300">귀하의 니즈에 맞춘 플랜</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">계정 수 확장 (무제한)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">리포트 빈도 커스터마이징</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">알림 채널 확장 (Slack, SMS)</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">맞춤형 대시보드 구축</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-[#8edec5] mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-200">전담 지원팀 배정</span>
                </li>
              </ul>

              <button
                onClick={() => setShowFormModal(true)}
                className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-4 rounded-lg text-lg font-bold transition-all"
              >
                견적 문의하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 신뢰/중립/정확성 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#141930] mb-4">신뢰할 수 있는 데이터</h2>
            <p className="text-xl text-gray-600">투명하고 정확한 분석</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">데이터 출처 공개</h3>
              <p className="text-gray-600">
                모든 데이터의 출처와 산출 로직을 투명하게 공개합니다. 파워 지수는 ER·성장률·활동·반응성을 가중 합산합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">분석 한계 고지</h3>
              <p className="text-gray-600">
                감성·프레임 분석은 추정치이며 오류 가능성이 있습니다. 모든 원문 링크를 제공하여 직접 검증 가능합니다.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#141930] mb-3">정책/약관 준수</h3>
              <p className="text-gray-600">
                API 사용 범위 내에서 운영하며, 로봇배제표준(robots.txt)을 준수합니다. 모든 데이터는 공개 정보만 활용합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#141930] mb-4">자주 묻는 질문</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#8edec5]">
              <h3 className="text-xl font-bold text-[#141930] mb-3">
                여론조사나 뉴스 모니터링이면 충분하지 않나요?
              </h3>
              <p className="text-gray-700">
                여론조사와 뉴스는 중요하지만, CampRoom은 <strong>정치인 계정 데이터의 실시간 신호</strong>와 <strong>즉시 실행 가능한 전략</strong>을 제공합니다.
                경쟁자가 무엇을 말하고 있는지, 내 메시지가 어떻게 받아들여지는지를 데이터로 확인하고 다음 액션을 계획할 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#8edec5]">
              <h3 className="text-xl font-bold text-[#141930] mb-3">
                데이터 정확도와 편향성은 어떻게 관리하나요?
              </h3>
              <p className="text-gray-700">
                모든 계산 로직을 공개하고, 분석의 한계를 명시적으로 고지합니다.
                감성·프레임 분석은 AI 추정치이며 오류 가능성이 있음을 안내하고, <strong>모든 데이터에 원문 검증 링크</strong>를 제공하여
                직접 확인하실 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#8edec5]">
              <h3 className="text-xl font-bold text-[#141930] mb-3">
                우리 케이스에도 적용 가능한가요?
              </h3>
              <p className="text-gray-700">
                지역구, 정당, 후보 특성에 관계없이 활용 가능합니다.
                확신이 서지 않으신다면 <strong>2주 무료 파일럿</strong>으로 귀하의 상황에서 직접 검증해보세요.
                맞춤 설정을 통해 귀하의 니즈에 최적화된 리포트를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 최종 CTA */}
      <section className="py-20 bg-gradient-to-br from-[#141930] to-[#1f2847]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            지금 시작하세요
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            48시간 내 샘플 리포트를 받아보고,<br />
            정치인 SNS 전략의 새로운 기준을 경험하세요
          </p>
          <button
            onClick={() => setShowFormModal(true)}
            className="bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-12 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-2xl"
          >
            내 파워 지수 무료 측정 시작
          </button>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-[#141930] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-[#8edec5]">CampRoom</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                정치인의 SNS 전략 비서 — 경쟁자를 분석하고, 나를 성장시키는 AI 파트너
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">서비스</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-300 hover:text-[#8edec5] transition-colors">경쟁 인텔리전스</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-[#8edec5] transition-colors">파워 지수</a></li>
                <li><a href="#features" className="text-gray-300 hover:text-[#8edec5] transition-colors">AI 전략</a></li>
                <li><a href="#pricing" className="text-gray-300 hover:text-[#8edec5] transition-colors">요금제</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">지원</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-300 hover:text-[#8edec5] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8edec5] transition-colors">문의하기</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8edec5] transition-colors">개인정보처리방침</a></li>
                <li><a href="#" className="text-gray-300 hover:text-[#8edec5] transition-colors">이용약관</a></li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-700 my-8" />

          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2024 CampRoom. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* 샘플 리포트 모달 */}
      {showSampleModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowSampleModal(false)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#141930]">샘플 리포트 미리보기</h3>
              <button onClick={() => setShowSampleModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-[#8edec5] pl-4 py-2">
                <h4 className="font-bold text-[#141930] mb-1">급상승 키워드</h4>
                <p className="text-gray-600 text-sm">#교통개선 (+340%) / #청년정책 (+180%) / #환경 (+95%)</p>
              </div>
              <div className="border-l-4 border-[#8edec5] pl-4 py-2">
                <h4 className="font-bold text-[#141930] mb-1">감성·프레임 트렌드</h4>
                <p className="text-gray-600 text-sm">긍정형 메시지 62% ↑ / 문제제기형 38% / 비전제시형 효과 최상</p>
              </div>
              <div className="border-l-4 border-[#8edec5] pl-4 py-2">
                <h4 className="font-bold text-[#141930] mb-1">최적 발행 시간</h4>
                <p className="text-gray-600 text-sm">화·목 19:00-21:00 / 주말 오전 10:00-12:00</p>
              </div>
              <div className="border-l-4 border-[#8edec5] pl-4 py-2">
                <h4 className="font-bold text-[#141930] mb-1">파워 지수 추이</h4>
                <p className="text-gray-600 text-sm">현재 75점 (지역 #3) / 주간 +8.3% / 월간 +22%</p>
              </div>
              <div className="border-l-4 border-[#8edec5] pl-4 py-2">
                <h4 className="font-bold text-[#141930] mb-1">다음 주 전략 제안</h4>
                <p className="text-gray-600 text-sm">
                  1. 교통 개선 성과 + 사진 (화 19:00)<br />
                  2. 청년 간담회 후기 (목 10:00)<br />
                  3. 환경 비전 제시 (금 14:00)
                </p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowSampleModal(false);
                setShowFormModal(true);
              }}
              className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-4 rounded-lg text-lg font-bold transition-all"
            >
              전체 리포트 받아보기
            </button>
          </div>
        </div>
      )}

      {/* 리드 캡처 폼 모달 */}
      {showFormModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowFormModal(false)}>
          <div className="bg-white rounded-2xl max-w-lg w-full p-8" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-[#141930]">무료 파워 지수 측정 신청</h3>
              <button onClick={() => setShowFormModal(false)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">이메일 *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8edec5]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">소속/직함 *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8edec5]"
                  placeholder="예: OO당 OO구 예비후보"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">캠페인 목표 (선택)</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8edec5]">
                  <option>선택해주세요</option>
                  <option>재선 준비</option>
                  <option>신규 출마 준비</option>
                  <option>당내 경선 준비</option>
                  <option>일상 활동 관리</option>
                  <option>기타</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">SNS 계정 링크 (선택)</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8edec5]"
                  placeholder="https://instagram.com/your_account"
                />
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  ✓ 제출 후 48시간 내 샘플 리포트를 발송해드립니다<br />
                  ✓ 추가 상담이 필요하신 경우 미팅 일정을 안내해드립니다
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#8edec5] hover:bg-[#7cd4ba] text-[#141930] px-6 py-4 rounded-lg text-lg font-bold transition-all"
              >
                샘플 리포트 받기
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
