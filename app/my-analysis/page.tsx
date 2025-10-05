'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  TrendingUp,
  TrendingDown,
  Users,
  MessageCircle,
  Eye,
  Hash,
  Clock,
  Target,
  BarChart3,
  Calendar,
  Download,
  Filter
} from 'lucide-react';

export default function MyAnalysisPage() {
  // Mock data - PRD 3.2.2 나의 SNS 분석 대시보드
  const performanceTrends = {
    period: '최근 30일',
    metrics: {
      followers: {
        current: 15420,
        change: 850,
        changePercent: 5.8,
        trend: 'up' as const
      },
      engagementRate: {
        current: 3.2,
        change: 0.4,
        changePercent: 14.3,
        trend: 'up' as const
      },
      reach: {
        current: 125000,
        change: -5000,
        changePercent: -3.8,
        trend: 'down' as 'up' | 'down'
      }
    }
  };

  const contentAnalysis = {
    effectiveTypes: [
      { type: '정책 설명', avgEngagement: 3.8, postCount: 12, performance: 'high' },
      { type: '일상 공유', avgEngagement: 3.2, postCount: 8, performance: 'medium' },
      { type: '지역 활동', avgEngagement: 2.5, postCount: 15, performance: 'medium' },
      { type: '공격/비판', avgEngagement: 1.8, postCount: 5, performance: 'low' }
    ],
    optimalTimes: [
      { time: '오전 10시', avgEngagement: 4.2, dayPattern: '평일' },
      { time: '저녁 7시', avgEngagement: 3.9, dayPattern: '평일' },
      { time: '오후 2시', avgEngagement: 3.5, dayPattern: '주말' }
    ],
    topHashtags: [
      { tag: '#민생경제', usage: 8, avgEngagement: 3.5 },
      { tag: '#강남구', usage: 12, avgEngagement: 3.2 },
      { tag: '#정책제안', usage: 6, avgEngagement: 3.8 }
    ]
  };

  const audienceAnalysis = {
    demographics: {
      age: [
        { range: '20-29세', percentage: 15 },
        { range: '30-39세', percentage: 32 },
        { range: '40-49세', percentage: 28 },
        { range: '50-59세', percentage: 18 },
        { range: '60세 이상', percentage: 7 }
      ],
      gender: {
        male: 58,
        female: 42
      }
    },
    highEngagementSegments: [
      { segment: '30-40대 직장인', engagementRate: 5.2, size: 4500 },
      { segment: '지역 상인', engagementRate: 4.8, size: 2100 },
      { segment: '학부모', engagementRate: 4.1, size: 3200 }
    ],
    followerSources: [
      { source: '게시물 공유', percentage: 35, count: 298 },
      { source: '검색', percentage: 28, count: 238 },
      { source: '해시태그', percentage: 22, count: 187 },
      { source: '기타', percentage: 15, count: 127 }
    ]
  };

  const benchmarking = {
    vsCompetitors: {
      followerGrowth: { mine: 5.8, competitorAvg: 4.2, rank: 2, total: 8 },
      engagementRate: { mine: 3.2, competitorAvg: 2.8, rank: 3, total: 8 },
      postFrequency: { mine: 8, competitorAvg: 6.5, rank: 1, total: 8 }
    },
    vsNationalAvg: {
      followerGrowth: { mine: 5.8, nationalAvg: 3.5 },
      engagementRate: { mine: 3.2, nationalAvg: 2.1 },
      contentQuality: { mine: 78, nationalAvg: 65 }
    }
  };

  const weeklyReports = [
    { week: '9월 4주', powerIndex: 78.5, followers: 15420, posts: 8, topPost: '부동산 정책 제안' },
    { week: '9월 3주', powerIndex: 77.3, followers: 15120, posts: 6, topPost: '지역 간담회 후기' },
    { week: '9월 2주', powerIndex: 76.8, followers: 14890, posts: 9, topPost: '민생경제 토론' }
  ];

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">나의 성과 분석</h1>
            <p className="text-muted-foreground mt-2">데이터 기반 성과 리포트 및 인사이트</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              기간 설정
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              리포트 다운로드
            </Button>
          </div>
        </div>

        {/* Performance Trends */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            성과 트렌드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">팔로워 성장</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">{performanceTrends.metrics.followers.current.toLocaleString()}</div>
                    <div className={`flex items-center gap-1 mt-2 ${performanceTrends.metrics.followers.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {performanceTrends.metrics.followers.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-semibold">
                        +{performanceTrends.metrics.followers.change} ({performanceTrends.metrics.followers.changePercent}%)
                      </span>
                    </div>
                  </div>
                  <Users className="h-12 w-12 text-blue-500/20" />
                </div>
                <p className="text-xs text-muted-foreground mt-4">{performanceTrends.period}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">참여율</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">{performanceTrends.metrics.engagementRate.current}%</div>
                    <div className={`flex items-center gap-1 mt-2 ${performanceTrends.metrics.engagementRate.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {performanceTrends.metrics.engagementRate.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-semibold">
                        +{performanceTrends.metrics.engagementRate.change}% ({performanceTrends.metrics.engagementRate.changePercent}%)
                      </span>
                    </div>
                  </div>
                  <MessageCircle className="h-12 w-12 text-green-500/20" />
                </div>
                <p className="text-xs text-muted-foreground mt-4">{performanceTrends.period}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">도달률</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-bold">{performanceTrends.metrics.reach.current.toLocaleString()}</div>
                    <div className={`flex items-center gap-1 mt-2 ${performanceTrends.metrics.reach.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                      {performanceTrends.metrics.reach.trend === 'up' ? (
                        <TrendingUp className="h-4 w-4" />
                      ) : (
                        <TrendingDown className="h-4 w-4" />
                      )}
                      <span className="text-sm font-semibold">
                        {performanceTrends.metrics.reach.change.toLocaleString()} ({performanceTrends.metrics.reach.changePercent}%)
                      </span>
                    </div>
                  </div>
                  <Eye className="h-12 w-12 text-purple-500/20" />
                </div>
                <p className="text-xs text-muted-foreground mt-4">{performanceTrends.period}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content Analysis */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            콘텐츠 분석
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Effective Content Types */}
            <Card>
              <CardHeader>
                <CardTitle>효과적인 콘텐츠 유형</CardTitle>
                <CardDescription>콘텐츠 유형별 평균 참여율</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contentAnalysis.effectiveTypes.map((type) => (
                  <div key={type.type}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{type.type}</span>
                        <Badge variant={
                          type.performance === 'high' ? 'default' :
                          type.performance === 'medium' ? 'secondary' :
                          'outline'
                        }>
                          {type.performance === 'high' ? '우수' : type.performance === 'medium' ? '보통' : '개선 필요'}
                        </Badge>
                      </div>
                      <span className="text-sm text-muted-foreground">{type.postCount}개 게시물</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${
                            type.performance === 'high' ? 'bg-green-600' :
                            type.performance === 'medium' ? 'bg-blue-600' :
                            'bg-gray-400'
                          }`}
                          style={{ width: `${(type.avgEngagement / 5) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">{type.avgEngagement}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Optimal Posting Times */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  최적 게시 시간
                </CardTitle>
                <CardDescription>시간대별 평균 참여율</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contentAnalysis.optimalTimes.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div>
                      <div className="font-semibold">{slot.time}</div>
                      <div className="text-sm text-muted-foreground">{slot.dayPattern}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{slot.avgEngagement}%</div>
                      <div className="text-xs text-muted-foreground">평균 참여율</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Top Hashtags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Hash className="h-5 w-5" />
                  효과적인 해시태그
                </CardTitle>
                <CardDescription>해시태그별 사용 횟수 및 참여율</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {contentAnalysis.topHashtags.map((hashtag) => (
                  <div key={hashtag.tag} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{hashtag.tag}</Badge>
                      <span className="text-sm text-muted-foreground">{hashtag.usage}회 사용</span>
                    </div>
                    <span className="font-semibold text-primary">{hashtag.avgEngagement}%</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Audience Analysis */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            오디언스 분석
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Demographics */}
            <Card>
              <CardHeader>
                <CardTitle>인구통계</CardTitle>
                <CardDescription>팔로워 연령 및 성별 분포</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">연령대별 분포</h4>
                  <div className="space-y-3">
                    {audienceAnalysis.demographics.age.map((age) => (
                      <div key={age.range}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm">{age.range}</span>
                          <span className="text-sm font-semibold">{age.percentage}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${age.percentage}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">성별 분포</h4>
                  <div className="flex gap-4">
                    <div className="flex-1 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                      <div className="text-sm text-muted-foreground">남성</div>
                      <div className="text-2xl font-bold text-blue-600">{audienceAnalysis.demographics.gender.male}%</div>
                    </div>
                    <div className="flex-1 p-4 bg-pink-50 dark:bg-pink-950/20 rounded-lg">
                      <div className="text-sm text-muted-foreground">여성</div>
                      <div className="text-2xl font-bold text-pink-600">{audienceAnalysis.demographics.gender.female}%</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* High Engagement Segments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  고참여 세그먼트
                </CardTitle>
                <CardDescription>참여도가 높은 오디언스 그룹</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {audienceAnalysis.highEngagementSegments.map((segment, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold">{segment.segment}</div>
                        <div className="text-sm text-muted-foreground">{segment.size.toLocaleString()}명</div>
                      </div>
                      <Badge className="bg-green-600">{segment.engagementRate}%</Badge>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 mt-3">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(segment.engagementRate / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Follower Sources */}
            <Card>
              <CardHeader>
                <CardTitle>신규 팔로워 유입 경로</CardTitle>
                <CardDescription>최근 30일 신규 팔로워 획득 채널</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {audienceAnalysis.followerSources.map((source) => (
                  <div key={source.source}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{source.source}</span>
                      <span className="text-sm font-semibold">{source.count}명 ({source.percentage}%)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${source.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benchmarking */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            벤치마킹
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* vs Competitors */}
            <Card>
              <CardHeader>
                <CardTitle>경쟁 정치인 대비</CardTitle>
                <CardDescription>같은 지역구/정당 정치인과의 비교</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">팔로워 성장률</span>
                    <Badge>#{benchmarking.vsCompetitors.followerGrowth.rank}/{benchmarking.vsCompetitors.followerGrowth.total}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <div className="text-xs text-muted-foreground">나의 성과</div>
                      <div className="text-xl font-bold text-primary">{benchmarking.vsCompetitors.followerGrowth.mine}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">경쟁자 평균</div>
                      <div className="text-xl font-bold">{benchmarking.vsCompetitors.followerGrowth.competitorAvg}%</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">참여율</span>
                    <Badge>#{benchmarking.vsCompetitors.engagementRate.rank}/{benchmarking.vsCompetitors.engagementRate.total}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <div className="text-xs text-muted-foreground">나의 성과</div>
                      <div className="text-xl font-bold text-primary">{benchmarking.vsCompetitors.engagementRate.mine}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">경쟁자 평균</div>
                      <div className="text-xl font-bold">{benchmarking.vsCompetitors.engagementRate.competitorAvg}%</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">게시 빈도</span>
                    <Badge className="bg-green-600">#{benchmarking.vsCompetitors.postFrequency.rank}/{benchmarking.vsCompetitors.postFrequency.total}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-3">
                    <div>
                      <div className="text-xs text-muted-foreground">나의 성과</div>
                      <div className="text-xl font-bold text-primary">{benchmarking.vsCompetitors.postFrequency.mine}회/주</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">경쟁자 평균</div>
                      <div className="text-xl font-bold">{benchmarking.vsCompetitors.postFrequency.competitorAvg}회/주</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* vs National Average */}
            <Card>
              <CardHeader>
                <CardTitle>전국 평균 대비</CardTitle>
                <CardDescription>전체 정치인 평균과의 비교</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                  <div className="font-medium mb-3">팔로워 성장률</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">나</div>
                      <div className="text-2xl font-bold text-primary">{benchmarking.vsNationalAvg.followerGrowth.mine}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">전국 평균</div>
                      <div className="text-2xl font-bold">{benchmarking.vsNationalAvg.followerGrowth.nationalAvg}%</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-green-600 font-semibold">
                    +{(benchmarking.vsNationalAvg.followerGrowth.mine - benchmarking.vsNationalAvg.followerGrowth.nationalAvg).toFixed(1)}%p 우수
                  </div>
                </div>

                <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                  <div className="font-medium mb-3">참여율</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">나</div>
                      <div className="text-2xl font-bold text-primary">{benchmarking.vsNationalAvg.engagementRate.mine}%</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">전국 평균</div>
                      <div className="text-2xl font-bold">{benchmarking.vsNationalAvg.engagementRate.nationalAvg}%</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-green-600 font-semibold">
                    +{(benchmarking.vsNationalAvg.engagementRate.mine - benchmarking.vsNationalAvg.engagementRate.nationalAvg).toFixed(1)}%p 우수
                  </div>
                </div>

                <div className="p-4 border-l-4 border-primary bg-primary/5 rounded">
                  <div className="font-medium mb-3">콘텐츠 품질 점수</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs text-muted-foreground">나</div>
                      <div className="text-2xl font-bold text-primary">{benchmarking.vsNationalAvg.contentQuality.mine}점</div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">전국 평균</div>
                      <div className="text-2xl font-bold">{benchmarking.vsNationalAvg.contentQuality.nationalAvg}점</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-green-600 font-semibold">
                    +{benchmarking.vsNationalAvg.contentQuality.mine - benchmarking.vsNationalAvg.contentQuality.nationalAvg}점 우수
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Weekly Reports */}
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="h-6 w-6 text-primary" />
            주간 리포트
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>최근 주간 성과</CardTitle>
              <CardDescription>주차별 핵심 지표 요약</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {weeklyReports.map((report) => (
                  <div key={report.week} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-6">
                      <div className="font-semibold w-24">{report.week}</div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">파워지수 {report.powerIndex}</Badge>
                        <Badge variant="secondary">{report.followers.toLocaleString()} 팔로워</Badge>
                        <Badge variant="secondary">{report.posts}개 게시물</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      최고 게시물: {report.topPost}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
