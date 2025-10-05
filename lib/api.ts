import { API_ENDPOINTS } from '@/constants';
import type {
  Politician,
  Party,
  Post,
  Notification,
  WeeklyReport,
  ApiResponse,
  PaginatedResponse,
} from '@/types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3000';

class ApiClient {
  private async request<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return { success: true, data };
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  // 정치인 관련 API
  async getPoliticians(params?: {
    party?: string;
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Politician>>> {
    const queryParams = new URLSearchParams(params as any).toString();
    return this.request(`${API_ENDPOINTS.POLITICIANS}?${queryParams}`);
  }

  async getPolitician(id: string): Promise<ApiResponse<Politician>> {
    return this.request(`${API_ENDPOINTS.POLITICIANS}/${id}`);
  }

  // 정당 관련 API
  async getParties(): Promise<ApiResponse<Party[]>> {
    return this.request(API_ENDPOINTS.PARTIES);
  }

  async getParty(id: string): Promise<ApiResponse<Party>> {
    return this.request(`${API_ENDPOINTS.PARTIES}/${id}`);
  }

  // 포스트 관련 API
  async getPosts(params: {
    politicianId?: string;
    partyId?: string;
    platform?: string;
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
  }): Promise<ApiResponse<PaginatedResponse<Post>>> {
    const queryParams = new URLSearchParams(params as any).toString();
    return this.request(`${API_ENDPOINTS.POSTS}?${queryParams}`);
  }

  // 트렌드 관련 API
  async getTrendingIssues(params?: {
    period?: string;
    limit?: number;
  }): Promise<ApiResponse<any[]>> {
    const queryParams = new URLSearchParams(params as any).toString();
    return this.request(`${API_ENDPOINTS.TRENDS}?${queryParams}`);
  }

  async getTrendingIssue(id: string): Promise<ApiResponse<any>> {
    return this.request(`${API_ENDPOINTS.TRENDS}/${id}`);
  }

  // 검색 API
  async search(query: string, type?: 'politician' | 'party' | 'keyword'): Promise<ApiResponse<any>> {
    const params = new URLSearchParams({ q: query, ...(type && { type }) });
    return this.request(`${API_ENDPOINTS.SEARCH}?${params}`);
  }

  // 북마크 관련 API
  async getBookmarks(): Promise<ApiResponse<any[]>> {
    return this.request(API_ENDPOINTS.BOOKMARKS);
  }

  async addBookmark(data: any): Promise<ApiResponse<any>> {
    return this.request(API_ENDPOINTS.BOOKMARKS, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async deleteBookmark(id: string): Promise<ApiResponse<void>> {
    return this.request(`${API_ENDPOINTS.BOOKMARKS}/${id}`, {
      method: 'DELETE',
    });
  }

  // 알림 관련 API
  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    return this.request(API_ENDPOINTS.NOTIFICATIONS);
  }

  async markNotificationAsRead(id: string): Promise<ApiResponse<void>> {
    return this.request(`${API_ENDPOINTS.NOTIFICATIONS}/${id}/read`, {
      method: 'PATCH',
    });
  }

  // 리포트 관련 API
  async getWeeklyReports(params?: {
    startDate?: string;
    endDate?: string;
  }): Promise<ApiResponse<WeeklyReport[]>> {
    const queryParams = new URLSearchParams(params as any).toString();
    return this.request(`${API_ENDPOINTS.REPORTS}?${queryParams}`);
  }

  async getWeeklyReport(id: string): Promise<ApiResponse<WeeklyReport>> {
    return this.request(`${API_ENDPOINTS.REPORTS}/${id}`);
  }
}

export const apiClient = new ApiClient();
