import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFount = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
<img src="/images/404.svg" alt="404" height={500} width={500} />
<Link href="/">
<Button>Back to Home</Button>
</Link>
    </div>

  )
}

export default NotFount