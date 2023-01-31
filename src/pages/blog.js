import React, { useEffect, useState } from 'react'
import fs from 'fs'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = props => {
  const [blogs, setBlogs] = useState(props.allBlogs)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map(blogItems => {
          return (
            <div key={blogItems.slug}>
              <Link href={`/blogpost/${blogItems.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItems.title}</h3>
              </Link>
              <p className={styles.blogItemp}>
                {blogItems.metadesc.substr(0, 140)}...
              </p>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export async function getStaticProps (context) {
  let data = await fs.promises.readdir('blogdata')
  let myfile
  let allBlogs = []
  for (let index = 0; index < data.length; index++) {
    const item = data[index]
    console.log(item)
    myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8')
    allBlogs.push(JSON.parse(myfile))
  }

  return {
    props: { allBlogs } // will be passed to the page component as props
  }
}
export default Blog
