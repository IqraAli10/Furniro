// pages/loading.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import Loading from '@/components/Loading';


const LoadingPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/'); // Adjust this path to redirect to the desired page
    }, 4000); // Show loading for 4 seconds

    return () => clearTimeout(timer); // Cleanup on component unmount
  }, [router]);

  return <Loading />;
};

export default LoadingPage;
