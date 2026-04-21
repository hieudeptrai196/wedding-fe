import { User } from '@/types/auth';

// ==========================================
// Mock Users - Fake data for development
// Remove/replace when backend is ready
// ==========================================

export interface MockUser {
  user: User;
  password: string;
}

export const MOCK_USERS: MockUser[] = [
  {
    user: {
      id: '1',
      fullName: 'Admin Wedding',
      email: 'admin@wedding.com',
      phone: '0901234567',
      role: 'admin',
      avatar: undefined,
    },
    password: 'admin123',
  },
  {
    user: {
      id: '2',
      fullName: 'Nguyễn Văn A',
      email: 'user@wedding.com',
      phone: '0909876543',
      role: 'user',
      avatar: undefined,
    },
    password: 'user123',
  },
];

// Helper: Find user by email & password
export function findMockUser(email: string, password: string): MockUser | undefined {
  return MOCK_USERS.find(
    (u) => u.user.email === email && u.password === password
  );
}

// Helper: Check if email already exists
export function isEmailTaken(email: string): boolean {
  return MOCK_USERS.some((u) => u.user.email === email);
}

// Helper: Generate a fake token
export function generateFakeToken(userId: string): string {
  return `fake-jwt-token-${userId}-${Date.now()}`;
}
