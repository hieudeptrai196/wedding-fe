'use client';

import { useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';

/**
 * Component này chạy 1 lần khi app mount
 * để restore auth session từ cookie
 */
export default function AuthInitializer() {
  const { restoreAuth } = useAuth();

  useEffect(() => {
    restoreAuth();
  }, [restoreAuth]);

  return null;
}
