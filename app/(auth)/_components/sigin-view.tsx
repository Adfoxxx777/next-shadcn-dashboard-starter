'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import UserAuthForm from './user-auth-form';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Suspense } from 'react';

export default function SignInView() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <UserAuthForm />
    </Suspense>
  );
}
