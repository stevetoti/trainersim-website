'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function UseCasesPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/#use-cases');
  }, [router]);
  return null;
}
