import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>breeze | Automize your ML model development like a breeze</title>
        <meta
          name="description"
          content="a next-generation AutoML SaaS from GDDi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={classNames([styles.navbar, styles.navbarFixedTop])}>
        <div className={classNames([styles.navbarInner])}>
          <div className={classNames([styles.navbarItems])}>
            <a
              className={classNames([styles.navbarBrand])}
              href="https://www.gddi.com.cn/"
            >
              <b>GDDi</b>
            </a>
          </div>
          <div
            className={classNames([styles.navbarItems, styles.navbarItemRight])}
          >
            <a
              className={classNames([styles.navbarItem, styles.navbarLink])}
              href="https://github.com/ruobaole/gddi-breeze"
            >
              🐙 GitHub
            </a>
            <a
              className={classNames([styles.navbarItem, styles.navbarLink])}
              href="https://nextjs.org/learn"
            >
              🐤 Tweet
            </a>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section>
          <h1 className={styles.title}>breeze</h1>
          <p className={styles.description}>
            An easy-to-use AutoML SaaS Platform
          </p>
        </section>

        <div className={styles.container}>
          <section>
            <h2>feature section #1</h2>
            <p className={styles.description}>
              Describe feature #1 in some concise languages
            </p>
            <a href="https://nextjs.org/learn">Documentation</a>
          </section>

          <section>
            <h2>feature section #2</h2>
            <p className={styles.description}>
              Describe feature #2 briefly in some concise languages
            </p>
            <a href="https://nextjs.org/learn">Documentation</a>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>Made with ❤️ in GDDi</footer>
    </>
  )
}

export default Home
