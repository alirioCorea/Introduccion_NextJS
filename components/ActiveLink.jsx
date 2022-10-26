import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const styles = {
    color:"black",
    textDecoration:"underline"
}

export default function ActiveLink({text, href}) {
    const {asPath} = useRouter();

  return (
        <Link href={href} style={asPath===href ? styles : null}>{text}</Link>
  )
}
