'use client';

import { useState } from 'react';
import Header from '@/components/layout/Header';

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackNotifications, setSlackNotifications] = useState(false);

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">설정</h1>
          <p className="mt-2 text-gray-600">알림 및 계정 설정을 관리하세요</p>
        </div>

        <div className="space-y-6">
          {/* 알림 설정 */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">알림 설정</h2>

            <div className="space-y-4">
              {/* 이메일 알림 */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">이메일 알림</h3>
                  <p className="text-sm text-gray-500">신규 포스트 및 급상승 이슈 알림을 이메일로 받습니다</p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    emailNotifications ? 'bg-primary' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {/* Slack 웹훅 */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">Slack 알림</h3>
                  <p className="text-sm text-gray-500">Slack 웹훅을 통해 실시간 알림을 받습니다</p>
                </div>
                <button
                  onClick={() => setSlackNotifications(!slackNotifications)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    slackNotifications ? 'bg-primary' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      slackNotifications ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>

              {slackNotifications && (
                <div className="ml-0 mt-2">
                  <input
                    type="text"
                    placeholder="Slack 웹훅 URL 입력"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              )}
            </div>
          </section>

          {/* 알림 빈도 */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">알림 빈도</h2>

            <div className="space-y-3">
              {[
                { value: 'realtime', label: '실시간', desc: '이슈 발생 즉시 알림' },
                { value: 'hourly', label: '1시간마다', desc: '1시간 단위로 요약 알림' },
                { value: 'daily', label: '하루 1회', desc: '매일 오전 9시 요약 알림' },
              ].map((option) => (
                <label key={option.value} className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="frequency"
                    value={option.value}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <div className="ml-3">
                    <p className="font-medium text-gray-900">{option.label}</p>
                    <p className="text-sm text-gray-500">{option.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          {/* 주간 리포트 */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">주간 리포트</h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-gray-900">주간 리포트 구독</h3>
                  <p className="text-sm text-gray-500">매주 월요일 주간 분석 리포트를 받습니다</p>
                </div>
                <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-primary">
                  <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">리포트 형식</label>
                <div className="flex gap-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary rounded" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">PDF</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-4 h-4 text-primary focus:ring-primary rounded" defaultChecked />
                    <span className="ml-2 text-sm text-gray-700">웹 링크</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* 즐겨찾기 관리 */}
          <section className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">즐겨찾기 관리</h2>

            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-gray-900">정치인 이름 {i}</p>
                      <p className="text-sm text-gray-500">정당명</p>
                    </div>
                  </div>
                  <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                    삭제
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* 저장 버튼 */}
          <div className="flex justify-end">
            <button className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-secondary transition-colors">
              설정 저장
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
