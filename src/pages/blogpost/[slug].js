import React, {  useState } from 'react'
import fs from 'fs'
import styles from '../../styles/BlogPost.module.css'

const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog?.title}</h1>
        <hr />
        <div>{blog?.content}</div>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'how-to-learn-flask' } },
            { params: { slug: 'how-to-learn-javascript' } },
            { params: { slug: 'how-to-learn-nextjs' } },
        ],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {
    const { slug } = context.params;


    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')

    return {
        props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
    }
}
export default Slug
