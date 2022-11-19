import { Layout } from '../components/Layout'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <section className='container'>
        <Link href='/stats'>stats</Link>
      </section>
    </Layout>
  )
}
