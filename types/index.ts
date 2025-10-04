// 정치인 관련 타입
export interface Politician {
  id: string;
  name: string;
  party: string;
  position: string;
  profileImage?: string;
  socialAccounts: SocialAccount[];
}

export interface SocialAccount {
  platform: SocialPlatform;
  username: string;
  url: string;
  followerCount?: number;
}

export type SocialPlatform = 'twitter' | 'youtube' | 'facebook' | 'instagram';

// 포스트 관련 타입
export interface Post {
  id: string;
  politicianId: string;
  platform: SocialPlatform;
  content: string;
  url: string;
  publishedAt: string;
  metrics: PostMetrics;
  sentiment?: Sentiment;
}

export interface PostMetrics {
  likes: number;
  shares: number;
  comments: number;
  views?: number;
  engagement: number;
}

export type Sentiment = 'positive' | 'negative' | 'neutral';

// 정당 관련 타입
export interface Party {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo?: string;
}

// 통계 관련 타입
export interface ActivityStats {
  period: '1d' | '7d' | '30d' | '90d';
  postCount: number;
  totalEngagement: number;
  averageEngagement: number;
  trend: number; // 증감률
}

export interface SentimentStats {
  positive: number;
  negative: number;
  neutral: number;
}

// 키워드/이슈 관련 타입
export interface Keyword {
  id: string;
  text: string;
  count: number;
  trend: number;
  category?: string;
}

export interface TrendingIssue {
  id: string;
  keyword: string;
  mentionCount: number;
  trendScore: number;
  politicians: string[]; // politician IDs
  sentiment: SentimentStats;
  timeline: TimelinePoint[];
  representativePosts: Post[];
}

export interface TimelinePoint {
  timestamp: string;
  value: number;
}

// 프레임 분석 관련 타입
export type FrameCategory = 'economy' | 'welfare' | 'security' | 'labor' | 'health' | 'education' | 'environment' | 'other';

export interface FrameAnalysis {
  category: FrameCategory;
  mentionCount: number;
  percentage: number;
  politicians: string[];
}

// 대시보드 관련 타입
export interface DashboardWidget {
  id: string;
  type: 'chart' | 'stats' | 'list' | 'timeline';
  title: string;
  data: any;
  size: 'small' | 'medium' | 'large';
}

export interface Bookmark {
  id: string;
  userId: string;
  type: 'politician' | 'party' | 'keyword';
  targetId: string;
  createdAt: string;
}

// 알림 관련 타입
export interface Notification {
  id: string;
  type: 'new_post' | 'trending_issue' | 'engagement_spike' | 'weekly_report';
  title: string;
  message: string;
  relatedId?: string;
  createdAt: string;
  read: boolean;
}

// 주간 리포트 관련 타입
export interface WeeklyReport {
  id: string;
  startDate: string;
  endDate: string;
  topPoliticians: Politician[];
  topParties: Party[];
  trendingIssues: TrendingIssue[];
  summary: string;
  pdfUrl?: string;
}

// API 응답 타입
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
