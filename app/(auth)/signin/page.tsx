'use client';

import { Suspense } from 'react';
import SignInView from '../_components/sigin-view';

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInView />
    </Suspense>
  );
}
