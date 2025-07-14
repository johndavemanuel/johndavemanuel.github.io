import Image from 'next/future/image'
import Head from 'next/head'
import Projects from '@/components/Projects'
import Resume from '@/components/Resume'
import Tech from '@/components/Tech'
import TechExploring from '@/components/TechExploring'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <a className="p-1 -m-1 cursor-pointer group" target="_blank" {...props}>
      <Icon className="w-6 h-6 transition fill-zinc-500 group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>John Dave Manuel - Frontend developer</title>
        <meta
          name="description"
          content="I’m Dave, a frontend developer based in the Philippines."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            John Dave Manuel
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I'm passionate about crafting engaging, user-centric digital
            experiences. I have experienced in building responsive,
            high-performing websites using React, Shopify (Liquid), and
            WordPress, and have worked with various eCommerce brands. With a
            strong eye for detail and a focus on clean, maintainable code, I
            translate design concepts into sleek, functional interfaces. I stay
            up to date with the latest web technologies to deliver innovative
            solutions that align with both user expectations and business goals.
          </p>
          <div className="flex gap-6 mt-6">
            <SocialLink
              href="https://github.com/johndavemanuel"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/johndavemanuel/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-12">
        <Tech />
      </Container>
      <Container className="mt-12">
        <TechExploring />
      </Container>
      <Projects />
      <Container className="mt-12">
        <Resume />
      </Container>
    </>
  )
}
