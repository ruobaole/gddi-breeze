import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useMemo } from 'react'

interface HomeFeatureSectionProps {
  title: string
  description: string
  link?: string
  rightSided?: boolean
}

const HomeFeatureSection = ({
  title,
  description,
  link,
  rightSided,
}: HomeFeatureSectionProps): JSX.Element => {
  const desArea: JSX.Element = useMemo(
    () => (
      <div className="w-1/3">
        <h2 className="font-bold text-3xl text-gray-700 mb-4">{title}</h2>
        <p className="text-gray-500 leading-relaxed text-lg font-['Inter var']">
          {description}
        </p>
        {link && (
          <div className="mt-6">
            <a
              className="text font-bold text-cyan-500"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        )}
      </div>
    ),
    [title, description, link]
  )

  const imgArea: JSX.Element = useMemo(
    () => (
      <div className="w-3/5 border border-solid border-gray-400 h-[420px] rounded-md overflow-hidden order-none">
        screenshot or inline component for the freature
      </div>
    ),
    []
  )

  return (
    <section className="flex flex-wrap justify-between items-center py-24 max-w-7xl">
      {rightSided === true ? imgArea : desArea}
      {rightSided === true ? desArea : imgArea}
    </section>
  )
}

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>breeze | Automize your ML model development like a breeze</title>
        <meta
          name="description"
          content="a next-generation AutoML SaaS from GDDi"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="flex bg-cyan-50 h-20 px-4 py-2 sticky top-0 z-50 select-none">
        <div className="flex w-full flex-wrap justify-between">
          <div className="flex items-center flex-grow">
            <a
              className="flex text-2xl items-center text-gray-800 mr-7"
              href="https://www.gddi.com.cn/"
            >
              <b>GDDi</b>
            </a>
          </div>
          <div className="flex items-center flex-grow-0 flex-shrink-0 content-end">
            <a
              className="font-medium inline-block px-4 text-gray-700"
              href="https://github.com/ruobaole/gddi-breeze"
            >
              🐙 GitHub
            </a>
            <a
              className="font-medium inline-block px-4 text-gray-700"
              href="https://twitter.com/"
            >
              🐤 Tweet
            </a>
          </div>
        </div>
      </nav>

      <div className="bg-cyan-50 text-center px-20 py-8 select-none">
        <h1 className="font-semibold font-logo text-[12rem] text-cyan-400">
          breeze
        </h1>
        <h2 className="text-gray-700 mt-2">
          An easy-to-use AutoML SaaS Platform
        </h2>
        <div className="mt-6">
          <Link href="/">
            <a className="group rounded-md cursor-pointer inline-block font-medium mx-1 py-3 px-7 relative transition-none bg-cyan-600 hover:bg-cyan-500 text-gray-50">
              <div className="flex items-center">
                <span className="group-hover:motion-safe:animate-bounce-quick group-focus:motion-safe:animate-bounce-quick text-2xl mr-2">
                  👉🏻
                </span>
                <span>Get Started</span>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <main className="flex font-home mx-16 my-0 px-0 py-4 flex-grow flex-col justify-center items-center">
        <HomeFeatureSection
          title="feature section #1"
          description="Describe feature #1 in some concise languages Describe feature #1
              in some concise languagesDescribe feature #1 in some concise
              languagesDescribe feature #1 in some concise languagesDescribe
              feature #1 in some concise languages"
          link="https://nextjs.org/learn"
          key={'feature section #1'}
        />
        <HomeFeatureSection
          title="feature section #2"
          description="Describe feature #2 in some concise languages Describe feature #1
              in some concise languagesDescribe feature #1 in some concise
              languagesDescribe feature #2 in some concise languagesDescribe
              feature #1 in some concise languages"
          link="https://nextjs.org/learn"
          key={'feature section #2'}
          rightSided
        />
      </main>

      <footer className="bg-cyan-50 flex flex-grow py-8 border-t border-solid border-gray-200 justify-center items-center text-gray-700">
        Made with ❤️ in Nanshan, Shenzhen
      </footer>
    </div>
  )
}

export default Home
