import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CampRoom - 정치인 SNS 대시보드",
  description: "정치인들의 SNS 활동을 실시간으로 모니터링하고 분석하세요",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
