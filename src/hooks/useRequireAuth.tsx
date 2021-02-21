import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/useAuth';
export const useRequireAuth = () => {
  const auth = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('auth?', auth.user);
    if (auth.user === false || auth.user === null) {
      router.push('/login');
    }
  }, [auth, router]);

  return auth;
};
