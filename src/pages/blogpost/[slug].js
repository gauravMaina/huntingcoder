import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/BlogPost.module.css'

const Slug = () => {
  const router = useRouter()
  const [blog, setBlog] = useState([])
  const { slug } = router.query
  useEffect(() => {
    fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
      .then(res => {
        return res.json()
      })
      .then(data => setBlog(data))
  }, [])
  console.log('blogs', blog)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        <hr />
        <div>{blog.content}</div>
      </main>
    </div>
  )
}

export default Slug
