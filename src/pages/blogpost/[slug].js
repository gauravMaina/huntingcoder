import { useRouter } from 'next/router'
import React from 'react'

function Slug() {
    const router = useRouter()
    const {slug} =router.query
    console.log('slug',router.query)
  return (
    <div>{slug}</div>
  )
}

export default Slug