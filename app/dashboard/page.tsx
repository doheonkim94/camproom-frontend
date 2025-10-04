import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  TrendingUp,
  Users,
  Target,
  Lightbulb,
  AlertTriangle,
  Award,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function DashboardPage() {
  // Mock data - 실제로는 API에서 가져옴
  const powerIndex = {
    total: 78.5,
    trend: 1.2,
    rank: {
      overall: 42,
      overallTotal: 300,
      party: 15,
      partyTotal: 120
    }
  };

  const competitors = [
    { name: '김철수', party: '민주당', powerIndex: 82.3, trend: -0.5, activity: 'high' },
    { name: '이영희', party: '국민의힘', powerIndex: 75.1, trend: 2.1, activity: 'medium' },
    { name: '박민수', party: '민주당', powerIndex: 71.8, trend: 0.3, activity: 'low' },
  ];

  const weeklyStrategy = {
    focusTopic: '부동산 정책',
    competitorActivity: 5,
    recommendedActions: 3
  };

  const crisisAlerts = 1;

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 섹션 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
          <p className="mt-2 text-muted-foreground">
            나의 영향력과 경쟁자 활동을 한눈에 확인하세요
          </p>
        </div>

        {/* 파워 지수 메인 카드 */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  나의 파워 지수
                </CardTitle>
                <CardDescription className="mt-1">
                  전체 국회의원 중 나의 영향력 순위
                </CardDescription>
              </div>
              <Button variant="outline" asChild>
                <Link href="/power-index">상세 보기</Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* 파워 지수 점수 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">{powerIndex.total}</span>
                  <span className="text-xl text-muted-foreground">/100</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm">
                  {powerIndex.trend > 0 ? (
                    <>
                      <ArrowUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-semibold">+{powerIndex.trend}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-4 w-4 text-red-600" />
                      <span className="text-red-600 font-semibold">{powerIndex.trend}</span>
                    </>
                  )}
                  <span className="text-muted-foreground">전일 대비</span>
                </div>
              </div>

              {/* 전체 랭킹 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">전체 랭킹</div>
                <div className="text-3xl font-bold mb-1">
                  {powerIndex.rank.overall}위
                </div>
                <div className="text-sm text-muted-foreground">
                  / {powerIndex.rank.overallTotal}명
                </div>
                <Badge variant="secondary" className="mt-2">
                  상위 {Math.round((powerIndex.rank.overall / powerIndex.rank.overallTotal) * 100)}%
                </Badge>
              </div>

              {/* 정당 내 랭킹 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">정당 내 랭킹</div>
                <div className="text-3xl font-bold mb-1">
                  {powerIndex.rank.party}위
                </div>
                <div className="text-sm text-muted-foreground">
                  / {powerIndex.rank.partyTotal}명
                </div>
                <Badge variant="secondary" className="mt-2">
                  민주당
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 경쟁 인텔리전스 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  <CardTitle>경쟁 인텔리전스</CardTitle>
                </div>
                <Button variant="link" size="sm" asChild>
                  <Link href="/competitors">전체 보기 →</Link>
                </Button>
              </div>
              <CardDescription>경쟁자들의 최근 활동</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{competitor.name}</span>
                        <Badge variant="outline" className="text-xs">
                          {competitor.party}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground">파워 지수:</span>
                        <span className="font-medium">{competitor.powerIndex}</span>
                        {competitor.trend > 0 ? (
                          <span className="text-green-600 text-xs flex items-center">
                            <ArrowUp className="h-3 w-3" />
                            +{competitor.trend}
                          </span>
                        ) : (
                          <span className="text-red-600 text-xs flex items-center">
                            <ArrowDown className="h-3 w-3" />
                            {competitor.trend}
                          </span>
                        )}
                      </div>
                    </div>
                    <Badge
                      variant={
                        competitor.activity === 'high' ? 'destructive' :
                        competitor.activity === 'medium' ? 'default' :
                        'secondary'
                      }
                    >
                      {competitor.activity === 'high' ? '활발' :
                       competitor.activity === 'medium' ? '보통' :
                       '저조'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 주간 AI 전략 */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <CardTitle>이번 주 AI 전략</CardTitle>
                </div>
                <Button variant="link" size="sm" asChild>
                  <Link href="/ai-strategy">상세 보기 →</Link>
                </Button>
              </div>
              <CardDescription>데이터 기반 추천 전략</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-sm">집중 주제</span>
                  </div>
                  <p className="text-lg font-bold mb-1">{weeklyStrategy.focusTopic}</p>
                  <p className="text-sm text-muted-foreground">
                    경쟁자 {weeklyStrategy.competitorActivity}명이 이미 언급 중
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">추천 액션</span>
                    <Badge>{weeklyStrategy.recommendedActions}개</Badge>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <div className="min-w-[20px] h-5 flex items-center">
                        <span className="text-primary">1.</span>
                      </div>
                      <span>수요일 오전 10시: 부동산 정책 입장 정리 게시</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="min-w-[20px] h-5 flex items-center">
                        <span className="text-primary">2.</span>
                      </div>
                      <span>금요일 저녁 7시: 지역구 사례 Q&A 영상</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <div className="min-w-[20px] h-5 flex items-center">
                        <span className="text-primary">3.</span>
                      </div>
                      <span>주말: 현장 방문 사진과 공감형 메시지</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-3 border-t">
                  <div className="text-sm text-muted-foreground mb-1">예상 효과</div>
                  <div className="flex gap-3 text-sm">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      파워 지수 +2.5점
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4 text-blue-600" />
                      신규 팔로워 ~500명
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 알림 및 최근 활동 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 위기 알림 */}
          {crisisAlerts > 0 && (
            <Card className="border-destructive/50 bg-destructive/5">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <CardTitle className="text-destructive">위기 알림</CardTitle>
                </div>
                <CardDescription>즉시 대응이 필요합니다</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-background">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold">부정적 댓글 급증 감지</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        최근 게시물에 부정 감성 65% (평소 12%)
                      </p>
                    </div>
                    <Badge variant="destructive">긴급</Badge>
                  </div>
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-sm mb-2">💡 추천 대응:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• 추가 해명 게시물 준비</li>
                      <li>• 팩트체크 후 오해 풀이</li>
                    </ul>
                  </div>
                  <Button className="w-full mt-3" size="sm">
                    상세 분석 보기
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* 나의 최근 성과 */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <CardTitle>나의 최근 성과</CardTitle>
              </div>
              <CardDescription>지난 7일 요약</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-xs text-muted-foreground">게시물</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">8.5K</div>
                    <div className="text-xs text-muted-foreground">참여</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <div className="text-2xl font-bold">3.2%</div>
                    <div className="text-xs text-muted-foreground">참여율</div>
                  </div>
                </div>

                <div className="pt-3 border-t">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">가장 효과적인 콘텐츠</span>
                    <Badge variant="secondary">정책 설명</Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">최적 발행 시간</span>
                    <span className="font-medium">평일 저녁 7-8시</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link href="/my-analysis">전체 분석 보기</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
