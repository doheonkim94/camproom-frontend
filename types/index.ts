// ============================================
// 정치인 관련 타입
// ============================================
export interface Politician {
  id: string;
  name: string;
  party: string;
  position: string;
  district?: string; // 지역구
  profileImage?: string;
  socialAccounts: SocialAccount[];
  powerIndex?: PowerIndex; // 파워 지수
}

export interface SocialAccount {
  platform: SocialPlatform;
  username: string;
  url: string;
  followerCount?: number;
  verified?: boolean;
}

export type SocialPlatform = 'twitter' | 'youtube' | 'facebook' | 'instagram';

// ============================================
// 파워 지수 (Power Index) 타입
// ============================================
export interface PowerIndex {
  total: number; // 100점 만점
  rank: PoliticianRanking;
  components: PowerIndexComponents;
  trend: number; // 전날 대비 변동
  lastUpdated: string;
}

export interface PowerIndexComponents {
  influence: number; // 영향력 (50%)
  growth: number; // 성장성 (30%)
  activity: number; // 활동성 (20%)
}

export interface PoliticianRanking {
  overall: number; // 전체 랭킹
  overallTotal: number; // 전체 인원
  party: number; // 정당 내 랭킹
  partyTotal: number;
  district: number; // 지역 내 랭킹
  districtTotal: number;
}

// ============================================
// 경쟁 인텔리전스 타입
// ============================================
export interface Competitor {
  politician: Politician;
  addedAt: string;
  relationship: 'same_district' | 'same_party' | 'opponent_party' | 'custom';
}

export interface CompetitorAnalysis {
  competitorId: string;
  period: AnalysisPeriod;
  publishingPattern: PublishingPattern;
  contentStrategy: ContentStrategy;
  performance: PerformanceMetrics;
  topPosts: Post[];
}

export interface PublishingPattern {
  frequency: number; // 주간 평균 게시 빈도
  bestDays: string[]; // 효과적인 요일 (예: ["월", "수", "금"])
  bestTimes: string[]; // 효과적인 시간대 (예: ["10:00", "19:00"])
}

export interface ContentStrategy {
  types: ContentTypeDistribution[];
  topics: TopicDistribution[];
  tone: 'formal' | 'casual' | 'mixed';
  targetAudience: string; // 예: "30-40대 남성"
}

export interface ContentTypeDistribution {
  type: 'policy' | 'daily' | 'qna' | 'video' | 'image' | 'attack' | 'other';
  percentage: number;
  label: string;
}

export interface TopicDistribution {
  topic: string;
  count: number;
  percentage: number;
}

export interface PerformanceMetrics {
  averageEngagement: number;
  engagementRate: number;
  reachEstimate: number;
  trend: number; // 최근 2주 증감률
}

// ============================================
// AI 전략 컨설팅 타입
// ============================================
export interface WeeklyStrategy {
  id: string;
  weekStart: string;
  weekEnd: string;
  focusTopics: FocusTopic[];
  recommendedActions: RecommendedAction[];
  expectedImpact: ExpectedImpact;
  generatedAt: string;
}

export interface FocusTopic {
  topic: string;
  reason: string;
  competitorActivity: number; // 경쟁자 언급 수
  trendScore: number;
}

export interface RecommendedAction {
  id: string;
  type: 'post' | 'video' | 'event' | 'response';
  title: string;
  description: string;
  suggestedTiming: string; // 예: "수요일 오전 10시"
  difficulty: 'easy' | 'medium' | 'hard';
  priority: 'high' | 'medium' | 'low';
}

export interface ExpectedImpact {
  powerIndexIncrease: number;
  newFollowersEstimate: number;
  mediaAttentionProbability: 'low' | 'medium' | 'high';
}

export interface ContentFeedback {
  originalContent: string;
  suggestions: ContentSuggestion[];
  improvedContent: string;
  expectedMetrics: {
    engagementRate: { current: number; expected: number };
    reach: { current: number; expected: number };
  };
  generatedAt: string;
}

export interface ContentSuggestion {
  type: 'tone' | 'structure' | 'visual' | 'timing' | 'hashtag';
  issue: string;
  recommendation: string;
}

export interface OptimalTiming {
  suggestedTime: string;
  currentReachEstimate: number;
  optimalReachEstimate: number;
  alternatives: TimingAlternative[];
}

export interface TimingAlternative {
  time: string;
  reachEstimate: number;
  relativeImprovement: number; // 현재 대비 %
}

export interface CrisisAlert {
  id: string;
  postId: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  detectedAt: string;
  issue: string;
  metrics: {
    negativeCommentRate: number;
    commentVelocity: number; // 시간당 댓글 수
  };
  recommendedResponses: CrisisResponse[];
}

export interface CrisisResponse {
  priority: number;
  action: string;
  description: string;
  timeframe: string;
  expectedOutcome: string;
}

// ============================================
// 강약점 분석 타입
// ============================================
export interface StrengthWeaknessAnalysis {
  politicianId: string;
  period: AnalysisPeriod;
  strengths: Insight[];
  weaknesses: Insight[];
  opportunities: Opportunity[];
  generatedAt: string;
}

export interface Insight {
  category: string;
  description: string;
  metric: string; // 예: "평균 대비 2.3배"
}

export interface Opportunity {
  description: string;
  expectedImprovement: string; // 예: "+15% 참여 증가"
  difficulty: 'easy' | 'medium' | 'hard';
}

// ============================================
// 포스트 관련 타입
// ============================================
export interface Post {
  id: string;
  politicianId: string;
  platform: SocialPlatform;
  content: string;
  url: string;
  publishedAt: string;
  metrics: PostMetrics;
  sentiment?: Sentiment;
  contentType?: 'policy' | 'daily' | 'qna' | 'video' | 'image' | 'other';
  topics?: string[];
}

export interface PostMetrics {
  likes: number;
  shares: number;
  comments: number;
  views?: number;
  engagement: number;
  engagementRate?: number;
}

export type Sentiment = 'positive' | 'negative' | 'neutral';

// ============================================
// 정당 관련 타입
// ============================================
export interface Party {
  id: string;
  name: string;
  shortName: string;
  color: string;
  logo?: string;
}

// ============================================
// 분석 공통 타입
// ============================================
export type AnalysisPeriod = '1d' | '7d' | '14d' | '30d' | '90d';

export interface ActivityStats {
  period: AnalysisPeriod;
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

export interface TimelinePoint {
  timestamp: string;
  value: number;
}

// ============================================
// 알림 관련 타입
// ============================================
export interface Notification {
  id: string;
  type: 'competitor_activity' | 'crisis_alert' | 'weekly_strategy' | 'power_index_update' | 'achievement';
  severity: 'info' | 'warning' | 'urgent';
  title: string;
  message: string;
  relatedId?: string;
  actionUrl?: string;
  createdAt: string;
  read: boolean;
}

// ============================================
// 리포트 타입
// ============================================
export interface WeeklyReport {
  id: string;
  userId: string;
  startDate: string;
  endDate: string;
  competitorAnalyses: CompetitorAnalysis[];
  myPerformance: {
    powerIndex: PowerIndex;
    stats: ActivityStats;
    topPosts: Post[];
  };
  strategyBrief: WeeklyStrategy;
  pdfUrl?: string;
  generatedAt: string;
}

// ============================================
// 사용자 프로필 타입
// ============================================
export interface UserProfile {
  id: string;
  politicianId: string;
  email: string;
  plan: 'free' | 'basic' | 'pro' | 'enterprise';
  competitors: Competitor[];
  preferences: UserPreferences;
  createdAt: string;
}

export interface UserPreferences {
  notifications: {
    email: boolean;
    slack: boolean;
    slackWebhook?: string;
  };
  reportFrequency: 'daily' | 'weekly';
  dashboardLayout?: string;
}

// ============================================
// API 응답 타입
// ============================================
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
