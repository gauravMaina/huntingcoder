import React, {  useState } from 'react'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)

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

export async function getServerSideProps (context) {
  const { slug } = context.query
  const res = await fetch(`http://localhost:3000/api/getblogs?slug=${slug}`)
  const myBlog = await res.json()
  return {
    props: { myBlog }
  }
}
export default Slug
