import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Award,
  TrendingUp,
  Target,
  Activity,
  Users,
  ArrowUp,
  ArrowDown,
  ChevronRight
} from 'lucide-react';

export default function PowerIndexPage() {
  // Mock data
  const myPowerIndex = {
    total: 78.5,
    trend: 1.2,
    rank: {
      overall: 42,
      overallTotal: 300,
      party: 15,
      partyTotal: 120,
      district: 3,
      districtTotal: 8
    },
    components: {
      influence: 82.0,  // 50% 가중치
      growth: 75.5,     // 30% 가중치
      activity: 72.0    // 20% 가중치
    },
    lastUpdated: '2025-10-05 09:00'
  };

  const topRankers = [
    { rank: 1, name: '이재명', party: '민주당', score: 95.8, trend: 0.5 },
    { rank: 2, name: '한동훈', party: '국민의힘', score: 94.2, trend: -0.3 },
    { rank: 3, name: '조국', party: '조국혁신당', score: 92.7, trend: 2.1 },
    { rank: 4, name: '이준석', party: '개혁신당', score: 91.3, trend: 0.8 },
    { rank: 5, name: '박찬대', party: '민주당', score: 90.1, trend: -0.2 },
  ];

  const nearbyRankers = [
    { rank: 40, name: '정OO', party: '민주당', score: 79.8, trend: -0.5 },
    { rank: 41, name: '김OO', party: '국민의힘', score: 79.1, trend: 0.3 },
    { rank: 42, name: '나', party: '민주당', score: 78.5, trend: 1.2, isMe: true },
    { rank: 43, name: '이OO', party: '민주당', score: 77.9, trend: -0.1 },
    { rank: 44, name: '박OO', party: '국민의힘', score: 77.2, trend: 0.6 },
  ];

  const improvementTips = [
    {
      component: '영향력',
      current: 82.0,
      tips: [
        '팔로워 수 증가를 위한 꾸준한 콘텐츠 발행',
        '미디어 언급을 늘리기 위한 이슈 선점',
        '인플루언서와의 협업 고려'
      ]
    },
    {
      component: '성장성',
      current: 75.5,
      tips: [
        '새로운 플랫폼(인스타그램, 유튜브) 활용',
        '참여율 높은 콘텐츠 유형 집중',
        '정기적인 라이브 방송 진행'
      ]
    },
    {
      component: '활동성',
      current: 72.0,
      tips: [
        '주 3회 이상 규칙적인 게시',
        '댓글 응답률 향상 (현재 12% → 목표 30%)',
        '다양한 콘텐츠 유형 시도'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight flex items-center gap-2">
            <Award className="h-8 w-8 text-primary" />
            파워 지수
          </h1>
          <p className="mt-2 text-muted-foreground">
            나의 정치적 영향력을 객관적으로 평가합니다
          </p>
        </div>

        {/* 메인 파워 지수 카드 */}
        <Card className="mb-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">나의 파워 지수</CardTitle>
            <CardDescription>최종 업데이트: {myPowerIndex.lastUpdated}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* 총점 */}
              <div className="md:col-span-1 text-center p-6 bg-background rounded-lg border-2 border-primary/20">
                <div className="text-sm text-muted-foreground mb-2">총점</div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-5xl font-bold text-primary">{myPowerIndex.total}</span>
                  <span className="text-2xl text-muted-foreground">/100</span>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm">
                  {myPowerIndex.trend > 0 ? (
                    <>
                      <ArrowUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600 font-semibold">+{myPowerIndex.trend}</span>
                    </>
                  ) : (
                    <>
                      <ArrowDown className="h-4 w-4 text-red-600" />
                      <span className="text-red-600 font-semibold">{myPowerIndex.trend}</span>
                    </>
                  )}
                  <span className="text-muted-foreground">전일 대비</span>
                </div>
              </div>

              {/* 전체 랭킹 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">전체 랭킹</div>
                <div className="text-4xl font-bold mb-1">{myPowerIndex.rank.overall}위</div>
                <div className="text-sm text-muted-foreground mb-2">
                  / {myPowerIndex.rank.overallTotal}명
                </div>
                <Badge variant="secondary">
                  상위 {Math.round((myPowerIndex.rank.overall / myPowerIndex.rank.overallTotal) * 100)}%
                </Badge>
              </div>

              {/* 정당 내 랭킹 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">정당 내 랭킹</div>
                <div className="text-4xl font-bold mb-1">{myPowerIndex.rank.party}위</div>
                <div className="text-sm text-muted-foreground mb-2">
                  / {myPowerIndex.rank.partyTotal}명
                </div>
                <Badge variant="secondary">민주당</Badge>
              </div>

              {/* 지역 내 랭킹 */}
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="text-sm text-muted-foreground mb-2">지역구 내 랭킹</div>
                <div className="text-4xl font-bold mb-1">{myPowerIndex.rank.district}위</div>
                <div className="text-sm text-muted-foreground mb-2">
                  / {myPowerIndex.rank.districtTotal}명
                </div>
                <Badge variant="secondary">서울 강남</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 세부 구성 요소 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                세부 구성 요소
              </CardTitle>
              <CardDescription>파워 지수는 3가지 요소로 구성됩니다</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* 영향력 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      <span className="font-semibold">영향력</span>
                      <Badge variant="outline" className="text-xs">50%</Badge>
                    </div>
                    <span className="text-lg font-bold text-blue-600">
                      {myPowerIndex.components.influence}점
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all"
                      style={{ width: `${myPowerIndex.components.influence}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    팔로워 수, 평균 도달률, 미디어 언급
                  </p>
                </div>

                {/* 성장성 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="font-semibold">성장성</span>
                      <Badge variant="outline" className="text-xs">30%</Badge>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      {myPowerIndex.components.growth}점
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all"
                      style={{ width: `${myPowerIndex.components.growth}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    최근 30일 팔로워 증가율, 참여율 변화
                  </p>
                </div>

                {/* 활동성 */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-purple-600" />
                      <span className="font-semibold">활동성</span>
                      <Badge variant="outline" className="text-xs">20%</Badge>
                    </div>
                    <span className="text-lg font-bold text-purple-600">
                      {myPowerIndex.components.activity}점
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${myPowerIndex.components.activity}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    게시 빈도, 댓글 응답률, 콘텐츠 다양성
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 개선 포인트 */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                개선 포인트
              </CardTitle>
              <CardDescription>파워 지수를 높이기 위한 실전 팁</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {improvementTips.map((tip, index) => (
                  <div key={index} className="p-3 rounded-lg bg-muted/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-sm">{tip.component}</span>
                      <Badge variant="outline">{tip.current}점</Badge>
                    </div>
                    <ul className="space-y-1">
                      {tip.tips.map((item, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-1">
                          <ChevronRight className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* TOP 5 랭킹 */}
          <Card>
            <CardHeader>
              <CardTitle>전체 TOP 5</CardTitle>
              <CardDescription>가장 높은 파워 지수를 보유한 정치인</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topRankers.map((ranker) => (
                  <div key={ranker.rank} className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        ranker.rank === 1 ? 'bg-yellow-400 text-yellow-900' :
                        ranker.rank === 2 ? 'bg-gray-300 text-gray-700' :
                        ranker.rank === 3 ? 'bg-orange-300 text-orange-900' :
                        'bg-muted text-muted-foreground'
                      }`}>
                        {ranker.rank}
                      </div>
                      <div>
                        <div className="font-semibold">{ranker.name}</div>
                        <div className="text-xs text-muted-foreground">{ranker.party}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">{ranker.score}</div>
                      <div className={`text-xs flex items-center justify-end ${
                        ranker.trend > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {ranker.trend > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {ranker.trend > 0 ? '+' : ''}{ranker.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 내 주변 랭킹 */}
          <Card>
            <CardHeader>
              <CardTitle>내 주변 랭킹</CardTitle>
              <CardDescription>나와 가까운 순위의 정치인들</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {nearbyRankers.map((ranker) => (
                  <div key={ranker.rank} className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                    ranker.isMe
                      ? 'bg-primary/10 border-2 border-primary/30'
                      : 'bg-muted/30 hover:bg-muted/50'
                  }`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        ranker.isMe ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {ranker.rank}
                      </div>
                      <div>
                        <div className={`font-semibold ${ranker.isMe ? 'text-primary' : ''}`}>
                          {ranker.name}
                        </div>
                        <div className="text-xs text-muted-foreground">{ranker.party}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-bold ${ranker.isMe ? 'text-primary' : ''}`}>
                        {ranker.score}
                      </div>
                      <div className={`text-xs flex items-center justify-end ${
                        ranker.trend > 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {ranker.trend > 0 ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
                        {ranker.trend > 0 ? '+' : ''}{ranker.trend}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4">
                전체 랭킹 보기
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
