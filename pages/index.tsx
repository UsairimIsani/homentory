import React from 'react'
import Link from "next/link"
import { Button } from "antd";

export default function Page() {

  return <>

    <Button type="default">
      <Link href="/home">
        Hello
      </Link>
    </Button>
  </>

}
