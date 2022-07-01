import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

interface HomeFeatureSectionProps {
  title: string
  description: string
  link?: string
}

const HomeFeatureSection = ({
  title,
  description,
  link,
}: HomeFeatureSectionProps): JSX.Element => {
  return (
    <section className="group flex flex-wrap flex-col lg:flex-row lg:justify-between lg:items-center py-12 md:py-16 lg:py-24 max-w-7xl">
      <div className="mb-8 lg:mb-0 lg:w-1/3 lg:group-even:order-2">
        <h2 className="font-bold text-xl md:text-3xl text-gray-700 mb-4">
          {title}
        </h2>
        <p className="text-gray-500 leading-relaxed text-base md:text-lg font-['Inter var']">
          {description}
        </p>
        {link && (
          <div className="mt-3 lg:mt-6">
            <a
              className="text text-sm md:text-base font-bold text-cyan-500"
              href={link}
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        )}
      </div>
      <div className="lg:w-3/5 border border-solid border-gray-400 h-[420px] rounded-md overflow-hidden order-none">
        screenshot or inline component for the freature
      </div>
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
          <div className="hidden md:flex items-center flex-grow-0 flex-shrink-0 content-end">
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
        <h1 className="font-semibold font-logo text-[6rem] md:text-[10rem] lg:text-[12rem] text-cyan-400">
          breeze
        </h1>
        <h2 className="text-gray-700 mt-2 text-sm md:text-base">
          An easy-to-use AutoML SaaS Platform
        </h2>
        <div className="mt-6">
          <Link href="/">
            <a className="group rounded-md cursor-pointer inline-block font-medium mx-1 py-2 md:py-4 px-4 md:px-7 relative transition-none bg-cyan-600 hover:bg-cyan-500 text-gray-50">
              <div className="flex items-center">
                <span className="group-hover:motion-safe:animate-bounce-quick group-focus:motion-safe:animate-bounce-quick text-xl md:text-2xl mr-2">
                  👉🏻
                </span>
                <span className="text-sm md:text-base">Get Started</span>
              </div>
            </a>
          </Link>
        </div>
      </div>

      <main className="flex font-home mx-2 md:mx-16 my-0 px-0 py-4 flex-grow flex-col justify-center items-center">
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
        />
      </main>

      <footer className="bg-cyan-50 flex flex-grow py-8 border-t border-solid border-gray-200 justify-center items-center text-gray-700">
        Made with ❤️ in Nanshan, Shenzhen
      </footer>
    </div>
  )
}

export default Home
