import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
      <ul>
        <Link id='link' href='/'>
          <li>Home</li>
        </Link>
        <Link id='link' href='/about'>
          <li>About</li>
        </Link>
        <Link id='link' href='/blog'>
          <li>Blog</li>
        </Link>
        <Link id='link' href='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Navbar
