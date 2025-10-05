export const SOCIAL_PLATFORMS = {
  TWITTER: 'twitter',
  YOUTUBE: 'youtube',
  FACEBOOK: 'facebook',
  INSTAGRAM: 'instagram',
} as const;

export const PLATFORM_LABELS: Record<string, string> = {
  twitter: 'X (트위터)',
  youtube: '유튜브',
  facebook: '페이스북',
  instagram: '인스타그램',
};

export const PLATFORM_COLORS: Record<string, string> = {
  twitter: '#1DA1F2',
  youtube: '#FF0000',
  facebook: '#1877F2',
  instagram: '#E4405F',
};

export const TIME_PERIODS = [
  { value: '1d', label: '1일' },
  { value: '7d', label: '7일' },
  { value: '30d', label: '30일' },
  { value: '90d', label: '90일' },
] as const;

export const SENTIMENT_LABELS: Record<string, string> = {
  positive: '긍정',
  negative: '부정',
  neutral: '중립',
};

export const SENTIMENT_COLORS: Record<string, string> = {
  positive: '#10B981',
  negative: '#EF4444',
  neutral: '#6B7280',
};

export const FRAME_CATEGORIES: Record<string, string> = {
  economy: '경제',
  welfare: '복지',
  security: '안보',
  labor: '노동',
  health: '의료',
  education: '교육',
  environment: '환경',
  other: '기타',
};

export const FRAME_COLORS: Record<string, string> = {
  economy: '#3B82F6',
  welfare: '#10B981',
  security: '#EF4444',
  labor: '#F59E0B',
  health: '#EC4899',
  education: '#8B5CF6',
  environment: '#059669',
  other: '#6B7280',
};

export const NOTIFICATION_TYPES = {
  NEW_POST: 'new_post',
  TRENDING_ISSUE: 'trending_issue',
  ENGAGEMENT_SPIKE: 'engagement_spike',
  WEEKLY_REPORT: 'weekly_report',
} as const;

export const NOTIFICATION_LABELS: Record<string, string> = {
  new_post: '신규 포스트',
  trending_issue: '급상승 이슈',
  engagement_spike: '반응 급등',
  weekly_report: '주간 리포트',
};

// API 엔드포인트
export const API_ENDPOINTS = {
  POLITICIANS: '/api/politicians',
  PARTIES: '/api/parties',
  POSTS: '/api/posts',
  TRENDS: '/api/trends',
  SEARCH: '/api/search',
  BOOKMARKS: '/api/bookmarks',
  NOTIFICATIONS: '/api/notifications',
  REPORTS: '/api/reports',
} as const;

// 페이지 경로
export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  POWER_INDEX: '/power-index',
  COMPETITORS: '/competitors',
  AI_STRATEGY: '/ai-strategy',
  MY_ANALYSIS: '/my-analysis',
  POLITICIAN: '/politician',
  PARTY_COMPARISON: '/party-comparison',
  TRENDS: '/trends',
  SEARCH: '/search',
  SETTINGS: '/settings',
  REPORTS: '/reports',
} as const;
