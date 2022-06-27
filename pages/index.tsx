import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import classNames from 'classnames'
import Link from 'next/link'

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
              href="https://twitter.com/"
            >
              🐤 Tweet
            </a>
          </div>
        </div>
      </nav>

      <div className={classNames([styles.hero])}>
        <h1 className={styles.title}>breeze</h1>
        <h2 className={styles.subTitle}>An easy-to-use AutoML SaaS Platform</h2>
        <div className={styles.heroButtons}>
          <Link href="./">
            <a className={styles.styledButton}>👉🏻 Get Started</a>
          </Link>
        </div>
      </div>

      <main className={styles.main}>
        <section className={styles.featureSection}>
          <div className={styles.featureSectionDescription}>
            <h2>feature section #1</h2>
            <p>
              Describe feature #1 in some concise languages Describe feature #1
              in some concise languagesDescribe feature #1 in some concise
              languagesDescribe feature #1 in some concise languagesDescribe
              feature #1 in some concise languages
            </p>
            <a
              className={styles.featureSectionLink}
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
          <div className={styles.featureSectionImageWrapper}>
            screenshot or inline component for the freature
          </div>
        </section>

        <section className={styles.featureSection}>
          <div className={styles.featureSectionImageWrapper}>
            screenshot or inline component for the freature
          </div>
          <div className={styles.featureSectionDescription}>
            <h2>feature section #2</h2>
            <p>
              Describe feature #2 in some concise languages Describe feature #1
              in some concise languagesDescribe feature #1 in some concise
              languagesDescribe feature #1 in some concise languagesDescribe
              feature #1 in some concise languages
            </p>
            <a
              className={styles.featureSectionLink}
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        Made with ❤️ in Nanshan, Shenzhen
      </footer>
    </>
  )
}

export default Home
