'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebaseUser } from '@/lib/firebase/hooks';

export const dynamic = 'force-dynamic';

export default function PrimerCheckoutPage() {
  const router = useRouter();
  const { user, loading } = useFirebaseUser();
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login?redirect=/primer/checkout');
    }
  }, [loading, user, router]);

  useEffect(() => {
    const startCheckout = async () => {
      if (!user) {
        return;
      }

      setMessage('Creating secure checkout...');
      try {
        const token = await user.getIdToken();
        const response = await fetch('/api/primer/checkout', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Failed to start checkout');
        }

        if (data.url) {
          window.location.href = data.url;
          return;
        }

        setMessage('Checkout link not available.');
      } catch (error) {
        console.error('Checkout error:', error);
        setMessage('Checkout is not available right now. Please try again later.');
      }
    };

    startCheckout();
  }, [user]);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <div className="text-gray-600 mb-4">
          {message}
        </div>
        <p className="text-sm text-gray-400">You will be redirected in a moment</p>
      </div>
    </div>
  );
}
