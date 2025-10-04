import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  TrendingUp,
  Calendar,
  Clock,
  MessageSquare,
  Target,
  ArrowUp,
  ArrowDown,
  Plus,
  BarChart3,
  FileText
} from 'lucide-react';
import Link from 'next/link';

export default function CompetitorsPage() {
  // Mock data
  const competitors = [
    {
      id: '1',
      name: '김철수',
      party: '민주당',
      district: '서울 강남갑',
      relationship: 'same_district',
      powerIndex: 82.3,
      trend: -0.5,
      activity: {
        weeklyPosts: 8,
        avgEngagement: 2500,
        engagementRate: 3.2
      },
      status: 'high'
    },
    {
      id: '2',
      name: '이영희',
      party: '국민의힘',
      district: '서울 서초구',
      relationship: 'opponent_party',
      powerIndex: 75.1,
      trend: 2.1,
      activity: {
        weeklyPosts: 5,
        avgEngagement: 1800,
        engagementRate: 2.8
      },
      status: 'medium'
    },
    {
      id: '3',
      name: '박민수',
      party: '민주당',
      district: '서울 송파구',
      relationship: 'same_party',
      powerIndex: 71.8,
      trend: 0.3,
      activity: {
        weeklyPosts: 3,
        avgEngagement: 1200,
        engagementRate: 2.1
      },
      status: 'low'
    },
  ];

  const recentActivities = [
    {
      competitor: '김철수',
      action: '새 게시물 발행',
      content: '부동산 정책에 대한 의견을 발표했습니다.',
      engagement: 3200,
      timeAgo: '2시간 전',
      platform: 'twitter'
    },
    {
      competitor: '이영희',
      action: '급속 확산',
      content: '청년 고용 정책 발표 게시물이 평소 대비 300% 반응',
      engagement: 8500,
      timeAgo: '5시간 전',
      platform: 'facebook'
    },
    {
      competitor: '김철수',
      action: '선제 발언',
      content: '동일 정책 이슈로 30분 먼저 발언',
      engagement: 2100,
      timeAgo: '어제',
      platform: 'twitter'
    },
  ];

  const competitorAnalysis = {
    competitor: '김철수',
    publishingPattern: {
      frequency: 8,
      bestDays: ['월', '수', '금'],
      bestTimes: ['10:00', '19:00']
    },
    contentStrategy: {
      types: [
        { type: '정책 설명', percentage: 60 },
        { type: '일상 공유', percentage: 30 },
        { type: '공격', percentage: 10 }
      ],
      tone: '격식',
      targetAudience: '30-40대 남성'
    },
    performance: {
      avgEngagement: 2500,
      engagementRate: 3.2,
      trend: 15
    }
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
                <Users className="h-8 w-8 text-primary" />
                경쟁 인텔리전스
              </h1>
              <p className="mt-2 text-muted-foreground">
                경쟁자들의 SNS 활동을 실시간으로 모니터링하고 전략을 분석합니다
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              경쟁자 추가
            </Button>
          </div>
        </div>

        {/* 경쟁자 목록 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {competitors.map((competitor) => (
            <Card key={competitor.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{competitor.name}</CardTitle>
                    <CardDescription>{competitor.district}</CardDescription>
                  </div>
                  <Badge variant={
                    competitor.status === 'high' ? 'destructive' :
                    competitor.status === 'medium' ? 'default' :
                    'secondary'
                  }>
                    {competitor.status === 'high' ? '활발' :
                     competitor.status === 'medium' ? '보통' :
                     '저조'}
                  </Badge>
                </div>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">{competitor.party}</Badge>
                  <Badge variant="outline" className="text-xs">
                    {competitor.relationship === 'same_district' ? '같은 지역' :
                     competitor.relationship === 'same_party' ? '같은 정당' :
                     '경쟁 정당'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* 파워 지수 */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <span className="text-sm text-muted-foreground">파워 지수</span>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-lg">{competitor.powerIndex}</span>
                      {competitor.trend > 0 ? (
                        <span className="text-green-600 text-sm flex items-center">
                          <ArrowUp className="h-3 w-3" />
                          +{competitor.trend}
                        </span>
                      ) : (
                        <span className="text-red-600 text-sm flex items-center">
                          <ArrowDown className="h-3 w-3" />
                          {competitor.trend}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 활동 지표 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center p-2 rounded-lg bg-muted/30">
                      <div className="text-xs text-muted-foreground mb-1">주간 게시</div>
                      <div className="font-bold">{competitor.activity.weeklyPosts}회</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-muted/30">
                      <div className="text-xs text-muted-foreground mb-1">평균 참여</div>
                      <div className="font-bold">{(competitor.activity.avgEngagement / 1000).toFixed(1)}K</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <Link href={`/competitors/${competitor.id}`}>
                        <BarChart3 className="h-4 w-4 mr-1" />
                        분석
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <FileText className="h-4 w-4 mr-1" />
                      리포트
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* 최근 활동 */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                최근 활동 알림
              </CardTitle>
              <CardDescription>경쟁자들의 주요 활동을 실시간으로 확인하세요</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{activity.competitor}</span>
                        <Badge variant="outline" className="text-xs">
                          {activity.platform === 'twitter' ? 'X' :
                           activity.platform === 'facebook' ? 'Facebook' :
                           activity.platform}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.timeAgo}</span>
                    </div>
                    <div className="mb-2">
                      <Badge variant="secondary" className="mb-2">{activity.action}</Badge>
                      <p className="text-sm">{activity.content}</p>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MessageSquare className="h-3 w-3" />
                        참여 {(activity.engagement / 1000).toFixed(1)}K
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                전체 활동 보기
              </Button>
            </CardContent>
          </Card>

          {/* 주간 요약 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                주간 요약
              </CardTitle>
              <CardDescription>지난 7일 동안의 주요 인사이트</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="text-sm font-semibold mb-1">가장 활발한 경쟁자</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">김철수</span>
                    <Badge>8 포스트</Badge>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <div className="text-sm font-semibold mb-1 text-green-900 dark:text-green-100">
                    급성장 중
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-900 dark:text-green-100">이영희</span>
                    <Badge variant="outline" className="text-green-700 dark:text-green-300">
                      +2.1점
                    </Badge>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-muted/50">
                  <div className="text-sm font-semibold mb-2">공통 관심 이슈</div>
                  <div className="flex flex-wrap gap-1">
                    <Badge variant="secondary" className="text-xs">부동산 정책</Badge>
                    <Badge variant="secondary" className="text-xs">청년 고용</Badge>
                    <Badge variant="secondary" className="text-xs">의료 개혁</Badge>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  상세 리포트 다운로드
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 전략 분석 샘플 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              전략 분석: {competitorAnalysis.competitor}
            </CardTitle>
            <CardDescription>경쟁자의 SNS 전략을 심층 분석합니다</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 발행 패턴 */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  발행 패턴
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">주간 평균</span>
                    <span className="font-semibold">{competitorAnalysis.publishingPattern.frequency}회</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">효과적인 요일</span>
                    <span className="font-semibold">
                      {competitorAnalysis.publishingPattern.bestDays.join(', ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">최적 시간대</span>
                    <span className="font-semibold">
                      {competitorAnalysis.publishingPattern.bestTimes.join(', ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* 콘텐츠 전략 */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  콘텐츠 전략
                </h4>
                <div className="space-y-2">
                  {competitorAnalysis.contentStrategy.types.map((type, index) => (
                    <div key={index}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{type.type}</span>
                        <span className="font-semibold">{type.percentage}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-1.5">
                        <div
                          className="bg-primary h-1.5 rounded-full transition-all"
                          style={{ width: `${type.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="pt-2 mt-2 border-t text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-muted-foreground">톤앤매너</span>
                      <span className="font-semibold">{competitorAnalysis.contentStrategy.tone}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">타깃</span>
                      <span className="font-semibold text-xs">{competitorAnalysis.contentStrategy.targetAudience}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 성과 지표 */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  성과 지표
                </h4>
                <div className="space-y-3">
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-xs text-muted-foreground mb-1">평균 참여</div>
                    <div className="text-xl font-bold">
                      {(competitorAnalysis.performance.avgEngagement / 1000).toFixed(1)}K
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50">
                    <div className="text-xs text-muted-foreground mb-1">참여율</div>
                    <div className="text-xl font-bold">
                      {competitorAnalysis.performance.engagementRate}%
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
                    <div className="text-xs text-muted-foreground mb-1">최근 2주 추이</div>
                    <div className="text-xl font-bold text-green-600 dark:text-green-400 flex items-center gap-1">
                      <ArrowUp className="h-5 w-5" />
                      +{competitorAnalysis.performance.trend}%
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <h5 className="font-semibold mb-2 text-sm">💡 인사이트</h5>
              <p className="text-sm text-muted-foreground">
                {competitorAnalysis.competitor}은(는) 주로 평일 오전과 저녁 시간대에 게시하며,
                정책 설명 중심의 격식 있는 콘텐츠로 30-40대 남성층의 높은 참여를 이끌어내고 있습니다.
                최근 2주간 참여율이 {competitorAnalysis.performance.trend}% 상승하는 등 성장세를 보이고 있어 주의가 필요합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
