'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [started, setStarted] = useState(false);
  const router = useRouter()
  useEffect(()=> {
    router.push('/exam')
  },[])
  return <></>
}
