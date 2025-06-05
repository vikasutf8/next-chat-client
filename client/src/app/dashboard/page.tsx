import DashNav from '@/components/dashboard/DashNav'
import { getServerSession } from 'next-auth';
import React from 'react'
import { authOption, CustomSession } from '../api/auth/[...nextauth]/options';

async function dashborad() {
  const session:CustomSession|null = await getServerSession(authOption);
  return (
    <DashNav name={session?.user?.name!} image={session?.user?.image ?? undefined}/>
  )
}

export default dashborad