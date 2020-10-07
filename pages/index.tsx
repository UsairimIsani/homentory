import React from 'react'
import Link from "next/link"
import { Button } from "antd";

import { signIn, signOut, useSession } from 'next-auth/client'
export default function Page() {
  const [session, _loading] = useSession();

  return <>

    {!session && <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>}
    {session && <>
      Signed in as {session.user.email} <br />
      <Button onClick={() => signOut()}>Sign out</Button>
    </>}
  </>

}
