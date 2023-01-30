import React, { useEffect, useState } from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/api/blogs')
      .then(res => {
        return res.json()
      })
      .then(data => setBlogs(data))
  }, [])
  console.log('blogs', blogs)
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map(blogItems => {
          return (
            <div key={blogItems.slug}>
              <Link href={`/blogpost/${blogItems.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItems.title}</h3>
              </Link>
              <p className={styles.blogItemp}> {blogItems.content.substr(0, 140)}...</p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Blog
