import Header from '@/components/layout/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">대시보드</h1>
          <p className="mt-2 text-muted-foreground">정치인과 정당의 SNS 활동을 한눈에 확인하세요</p>
        </div>

        {/* 즐겨찾기 섹션 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">즐겨찾기</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <svg className="w-12 h-12 mb-2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <p className="text-muted-foreground">정치인/정당을 즐겨찾기에 추가하세요</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 급상승 이슈 */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">급상승 이슈</h2>
            <Button variant="link" asChild>
              <Link href="/trends">전체 보기 →</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="destructive">급상승</Badge>
                    <span className="text-sm text-green-600 font-semibold">+{120 + i * 10}%</span>
                  </div>
                  <CardTitle>키워드 #{i}</CardTitle>
                  <CardDescription>언급 {1000 + i * 100}회</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary">경제</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 최근 활동 */}
        <section>
          <h2 className="text-xl font-semibold mb-4">최근 활동</h2>
          <Card>
            <CardContent className="p-6 text-center">
              <p className="text-muted-foreground">즐겨찾기한 정치인의 최근 활동이 여기에 표시됩니다</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
}
