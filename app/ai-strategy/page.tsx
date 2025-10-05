import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Lightbulb,
  Target,
  TrendingUp,
  Calendar,
  Clock,
  Users,
  Sparkles,
  AlertCircle,
  CheckCircle,
  ChevronRight,
  Download,
  Send
} from 'lucide-react';

export default function AIStrategyPage() {
  // Mock data
  const weeklyStrategy = {
    weekStart: '2025-10-07',
    weekEnd: '2025-10-13',
    focusTopics: [
      {
        topic: '부동산 정책',
        reason: '경쟁자 5명 중 3명이 이미 관련 발언 시작',
        competitorActivity: 5,
        trendScore: 230
      },
      {
        topic: '청년 고용',
        reason: '전체 국회의원 게시물의 18%가 이 주제',
        competitorActivity: 8,
        trendScore: 180
      }
    ],
    recommendedActions: [
      {
        id: '1',
        type: 'post',
        title: '부동산 정책 입장 정리 게시',
        description: '현 정부 부동산 정책에 대한 명확한 입장과 대안을 제시하는 게시물',
        suggestedTiming: '수요일 오전 10시',
        difficulty: 'medium',
        priority: 'high'
      },
      {
        id: '2',
        type: 'video',
        title: '지역구 사례 기반 Q&A 영상',
        description: '지역구 주민들의 부동산 고민에 대한 Q&A 형식 숏폼 영상',
        suggestedTiming: '금요일 저녁 7시',
        difficulty: 'hard',
        priority: 'high'
      },
      {
        id: '3',
        type: 'post',
        title: '현장 방문 사진과 공감형 메시지',
        description: '주말 현장 방문 사진과 함께 서민 공감 메시지',
        suggestedTiming: '토요일 오후 2시',
        difficulty: 'easy',
        priority: 'medium'
      }
    ],
    expectedImpact: {
      powerIndexIncrease: 2.5,
      newFollowersEstimate: 500,
      mediaAttentionProbability: 'medium'
    }
  };

  const contentFeedback = {
    originalContent: '오늘 국회에서 민생경제법안 통과시켰습니다. 서민들의 부담을 줄이는 데 도움이 될 것입니다.',
    suggestions: [
      {
        type: 'tone',
        issue: '너무 공식적인 톤',
        recommendation: '친근함 추가 및 이모지 활용'
      },
      {
        type: 'structure',
        issue: '구체적 숫자/사례 부족',
        recommendation: '실제 혜택 금액 명시 (예: 월 평균 8만원)'
      },
      {
        type: 'visual',
        issue: '비주얼 콘텐츠 없음',
        recommendation: '국회 현장 사진 또는 인포그래픽 첨부'
      }
    ],
    improvedContent: `오늘 드디어! 🎉
서민 여러분의 생활비 부담을 월 평균 8만원 줄여드릴 민생경제법안을 통과시켰습니다.

특히 우리 지역구 자영업자분들께 실질적 도움이 되도록 ○○, ○○ 조항을 제안해 반영했습니다.

여러분의 목소리가 국회를 움직였습니다. 감사합니다! 🙏

+ 국회 현장 사진 또는 인포그래픽 첨부 추천`,
    expectedMetrics: {
      engagementRate: { current: 1.2, expected: 3.5 },
      reach: { current: 5000, expected: 15000 }
    }
  };

  const optimalTiming = {
    currentTime: '월요일 오후 3시',
    currentReachEstimate: 2300,
    optimalTime: '오늘 저녁 7시 30분',
    optimalReachEstimate: 8500,
    alternatives: [
      { time: '오늘 저녁 7시 30분', reachEstimate: 8500, improvement: 270 },
      { time: '내일 오전 10시', reachEstimate: 6200, improvement: 170 },
      { time: '수요일 저녁 8시', reachEstimate: 7800, improvement: 239 }
    ]
  };

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Lightbulb className="h-8 w-8 text-primary" />
            AI 전략 컨설팅
          </h1>
          <p className="mt-2 text-muted-foreground">
            데이터 기반으로 최적의 SNS 전략을 제안합니다
          </p>
        </div>

        {/* 주간 전략 브리핑 */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  이번 주 전략 브리핑
                </CardTitle>
                <CardDescription className="mt-1">
                  {weeklyStrategy.weekStart} - {weeklyStrategy.weekEnd}
                </CardDescription>
              </div>
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                PDF 다운로드
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* 집중 주제 */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  집중 주제
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {weeklyStrategy.focusTopics.map((topic, index) => (
                    <div key={index} className="p-4 rounded-lg bg-background border">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-bold text-lg">{topic.topic}</h4>
                        <Badge variant="destructive">급상승 +{topic.trendScore}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{topic.reason}</p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Users className="h-3 w-3" />
                        <span>경쟁자 {topic.competitorActivity}명 활동 중</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 추천 액션 */}
              <div>
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  추천 액션 플랜
                </h3>
                <div className="space-y-3">
                  {weeklyStrategy.recommendedActions.map((action) => (
                    <div key={action.id} className="p-4 rounded-lg bg-background border hover:border-primary/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-semibold">{action.title}</h4>
                            <Badge variant={action.priority === 'high' ? 'destructive' : 'secondary'}>
                              {action.priority === 'high' ? '높음' : '보통'}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {action.difficulty === 'easy' ? '쉬움' :
                               action.difficulty === 'medium' ? '보통' : '어려움'}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">{action.description}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <Clock className="h-3 w-3 text-primary" />
                            <span className="font-medium text-primary">{action.suggestedTiming}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 예상 효과 */}
              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h3 className="font-semibold mb-3 flex items-center gap-2 text-green-900 dark:text-green-100">
                  <Sparkles className="h-5 w-5" />
                  예상 효과
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      +{weeklyStrategy.expectedImpact.powerIndexIncrease}점
                    </div>
                    <div className="text-xs text-muted-foreground">파워 지수 상승</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      ~{weeklyStrategy.expectedImpact.newFollowersEstimate}명
                    </div>
                    <div className="text-xs text-muted-foreground">신규 팔로워</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {weeklyStrategy.expectedImpact.mediaAttentionProbability === 'high' ? '높음' :
                       weeklyStrategy.expectedImpact.mediaAttentionProbability === 'medium' ? '중상' : '낮음'}
                    </div>
                    <div className="text-xs text-muted-foreground">미디어 언급 가능성</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 실시간 콘텐츠 피드백 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                AI 콘텐츠 피드백
              </CardTitle>
              <CardDescription>게시물 초안을 분석하고 개선안을 제시합니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* 원본 */}
                <div>
                  <div className="text-sm font-semibold mb-2">원본 초안</div>
                  <div className="p-3 rounded-lg bg-muted/50 text-sm">
                    {contentFeedback.originalContent}
                  </div>
                </div>

                {/* 개선 제안 */}
                <div>
                  <div className="text-sm font-semibold mb-2">개선 포인트</div>
                  <div className="space-y-2">
                    {contentFeedback.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex gap-2 text-sm">
                        <AlertCircle className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium">{suggestion.issue}</div>
                          <div className="text-muted-foreground text-xs">
                            → {suggestion.recommendation}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 개선안 */}
                <div>
                  <div className="text-sm font-semibold mb-2 flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    AI 개선안
                  </div>
                  <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-sm whitespace-pre-line">
                    {contentFeedback.improvedContent}
                  </div>
                </div>

                {/* 예상 성과 */}
                <div className="p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <div className="text-xs font-semibold mb-2">예상 성과 개선</div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <div className="text-muted-foreground mb-1">참여율</div>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-muted-foreground">
                          {contentFeedback.expectedMetrics.engagementRate.current}%
                        </span>
                        <span className="font-bold text-green-600">
                          → {contentFeedback.expectedMetrics.engagementRate.expected}%
                        </span>
                      </div>
                    </div>
                    <div>
                      <div className="text-muted-foreground mb-1">도달</div>
                      <div className="flex items-center gap-2">
                        <span className="line-through text-muted-foreground">
                          {(contentFeedback.expectedMetrics.reach.current / 1000).toFixed(1)}K
                        </span>
                        <span className="font-bold text-green-600">
                          → {(contentFeedback.expectedMetrics.reach.expected / 1000).toFixed(1)}K
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <Button className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  개선안으로 게시하기
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 최적 타이밍 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                최적 발행 타이밍
              </CardTitle>
              <CardDescription>지금 발행? 아니면 예약?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* 현재 시간 */}
                <div className="p-4 rounded-lg border bg-muted/30">
                  <div className="text-sm text-muted-foreground mb-1">현재 시각</div>
                  <div className="text-lg font-bold mb-2">{optimalTiming.currentTime}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">예상 도달</span>
                    <span className="font-semibold">
                      {(optimalTiming.currentReachEstimate / 1000).toFixed(1)}K명
                    </span>
                  </div>
                  <div className="mt-2 p-2 rounded bg-orange-50 dark:bg-orange-900/20 text-xs text-orange-700 dark:text-orange-300">
                    ⚠️ 평균 대비 -40% 낮은 시간대입니다
                  </div>
                </div>

                {/* 최적 시간 */}
                <div className="p-4 rounded-lg border-2 border-primary bg-primary/5">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-primary" />
                    <div className="text-sm font-semibold text-primary">추천 시간</div>
                  </div>
                  <div className="text-xl font-bold mb-2">{optimalTiming.optimalTime}</div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">예상 도달</span>
                    <span className="font-bold text-green-600">
                      {(optimalTiming.optimalReachEstimate / 1000).toFixed(1)}K명
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-semibold">
                      +{Math.round((optimalTiming.optimalReachEstimate / optimalTiming.currentReachEstimate - 1) * 100)}% 개선
                    </span>
                  </div>
                </div>

                {/* 대안 */}
                <div>
                  <div className="text-sm font-semibold mb-2">다른 추천 시간</div>
                  <div className="space-y-2">
                    {optimalTiming.alternatives.slice(1).map((alt, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                        <div>
                          <div className="font-medium text-sm">{alt.time}</div>
                          <div className="text-xs text-muted-foreground">
                            {(alt.reachEstimate / 1000).toFixed(1)}K명 예상
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          +{alt.improvement}%
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button className="w-full" variant="outline">
                    예약 발행 설정
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 과거 전략 성과 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              과거 AI 전략 성과
            </CardTitle>
            <CardDescription>지난 AI 추천을 실행한 결과</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  week: '9월 4주차',
                  strategy: '청년 고용 정책 집중',
                  adopted: true,
                  powerIndexChange: 2.3,
                  followerGrowth: 450,
                  accuracy: 92
                },
                {
                  week: '9월 3주차',
                  strategy: '지역 현장 방문 콘텐츠',
                  adopted: true,
                  powerIndexChange: 1.8,
                  followerGrowth: 320,
                  accuracy: 88
                },
                {
                  week: '9월 2주차',
                  strategy: '의료 개혁 이슈 대응',
                  adopted: false,
                  powerIndexChange: -0.5,
                  followerGrowth: 50,
                  accuracy: null
                }
              ].map((record, index) => (
                <div key={index} className={`p-4 rounded-lg border ${
                  record.adopted ? 'bg-card' : 'bg-muted/30'
                }`}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="font-semibold">{record.week}</div>
                      <div className="text-sm text-muted-foreground">{record.strategy}</div>
                    </div>
                    <Badge variant={record.adopted ? 'default' : 'secondary'}>
                      {record.adopted ? '실행함' : '미실행'}
                    </Badge>
                  </div>
                  {record.adopted && (
                    <div className="grid grid-cols-3 gap-4 mt-3 pt-3 border-t">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">파워 지수</div>
                        <div className={`font-bold ${
                          record.powerIndexChange > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {record.powerIndexChange > 0 ? '+' : ''}{record.powerIndexChange}점
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">팔로워 증가</div>
                        <div className="font-bold">+{record.followerGrowth}명</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1">예측 정확도</div>
                        <div className="font-bold text-primary">{record.accuracy}%</div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  );
}
