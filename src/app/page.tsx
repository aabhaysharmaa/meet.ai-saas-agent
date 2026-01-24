"use client";

import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client'
import React from 'react'

const Home = () => {
  const { data: session  } = authClient.useSession();
  return (
    <div>
      {JSON.stringify(session)}
      <Button onClick={() => {
        authClient.signOut()
      } } >Sign Out</Button>
    </div>
  )
}

export default Home
