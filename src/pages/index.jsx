import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'
import { SimpleLayout } from '@/components/SimpleLayout'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'

import logoHTML from '@/images/tech/html5.svg'
import logoCSS from '@/images/tech/css.svg'
import logoJS from '@/images/tech/javascript.svg'
import logoJquery from '@/images/tech/jquery.svg'
import logoLess from '@/images/tech/less.svg'
import logoSCSS from '@/images/tech/sass.svg'
import logoGulp from '@/images/tech/gulp.svg'
import logoGrunt from '@/images/tech/gruntjs.svg'
import logoBootstrap from '@/images/tech/bootstrap.svg'
import logoBulma from '@/images/tech/bulma.svg'
import logoTailwind from '@/images/tech/tailwind.svg'
import logoNPM from '@/images/tech/npm.svg'
import logoYarn from '@/images/tech/yarn.svg'
import logoGit from '@/images/tech/git.svg'
import logoGitHub from '@/images/tech/github.svg'
import logoReact from '@/images/tech/explore/react.svg'
import logoNext from '@/images/tech/explore/next-js.svg'
import logoTypeScript from '@/images/tech/explore/typescript.svg'
import logoStoryblok from '@/images/tech/explore/storyblok.svg'
import logoStorybook from '@/images/tech/explore/storybook.svg'
import logoCypress from '@/images/tech/explore/cypress.svg'
import logoMongoDB from '@/images/tech/explore/mongodb.svg'
import logoExpress from '@/images/tech/explore/expressjs.svg'

import logoStellar from '@/images/projects/stellar-eq.jpg'
import logoMorjas from '@/images/projects/morjas.svg'

// import { generateRssFeed } from '@/lib/generateRssFeed'
// import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'STOK MNL INC',
      //   title: 'Full Time',
      //   logo: logoPlanetaria,
      start: 'Oct 2020',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Singapore Nextus Pte. Ltd.',
      //   title: 'Part Time',
      //   logo: logoAirbnb,
      start: 'Jan 2019',
      end: 'Sept 2019',
    },
    {
      company: 'Anydecide Holdings Corporation',
      //   title: 'Full Time',
      //   logo: logoFacebook,
      start: 'Jan 2017',
      end: 'Dec 2018',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span>Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div> */}
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              {/* <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd> */}
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start.label ?? role.start} until ${
                  role.end.label ?? role.end
                }`}
              >
                <time dateTime={role.start.dateTime ?? role.start}>
                  {role.start.label ?? role.start}
                </time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Tech() {
  let tech = [
    {
      title: 'HTML',
      logo: logoHTML,
    },
    {
      title: 'CSS',
      logo: logoCSS,
    },
    {
      title: 'JavaScript',
      logo: logoJS,
    },
    {
      title: 'jQuery',
      logo: logoJquery,
    },
    {
      title: 'LESS',
      logo: logoLess,
    },
    {
      title: 'SASS',
      logo: logoSCSS,
    },
    {
      title: 'Gulp',
      logo: logoGulp,
    },
    {
      title: 'Bootstrap',
      logo: logoBootstrap,
    },
    {
      title: 'Bulma',
      logo: logoBulma,
    },
    {
      title: 'TailwindCSS',
      logo: logoTailwind,
    },
    {
      title: 'NPM',
      logo: logoNPM,
    },
    {
      title: 'Yarn',
      logo: logoYarn,
    },
    {
      title: 'Git',
      logo: logoGit,
    },
    {
      title: 'Github',
      logo: logoGitHub,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">
          Hands-on experience with various technologies and tools
        </span>
      </h2>
      <ul className="mt-6 columns-4 space-y-4">
        {tech.map((techItem, techItemIndex) => (
          <li key={techItemIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center">
              <Image
                src={techItem.logo}
                alt=""
                fill
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap items-center gap-x-2">
              <dt className="sr-only">Title</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {techItem.title}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Exploring() {
  let tech = [
    {
      title: 'React',
      logo: logoReact,
    },
    {
      title: 'NextJS',
      logo: logoNext,
    },
    {
      title: 'TypeScript',
      logo: logoTypeScript,
    },
    {
      title: 'Storyblok',
      logo: logoStoryblok,
    },
    {
      title: 'Storybook',
      logo: logoStorybook,
    },
    {
      title: 'Cypress',
      logo: logoCypress,
    },
    {
      title: 'ExpressJS',
      logo: logoExpress,
    },
    {
      title: 'MongoDB',
      logo: logoMongoDB,
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span className="ml-3">
          Actively exploring and experimenting with a range of technologies.
        </span>
      </h2>
      <ul className="mt-6 columns-4 space-y-4">
        {tech.map((techItem, techItemIndex) => (
          <li key={techItemIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center">
              <Image
                src={techItem.logo}
                alt=""
                fill
                className="h-7 w-7 object-contain"
                unoptimized
              />
            </div>
            <dl className="flex flex-auto flex-wrap items-center gap-x-2">
              <dt className="sr-only">Title</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {techItem.title}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Home({ articles }) {
  const projects = [
    {
      name: 'Stellar Equipment',
      description:
        'Stellar Equipment create amazing technical outerwear with timeless design from cutting-edge materials – for running, hiking, climbing, ski & snowboarding.',
      link: {
        href: 'https://www.stellarequipment.com/',
        label: 'stellarequipment.com',
      },
      logo: logoStellar,
    },
    {
      name: 'Morjas',
      description:
        'Classic shoes, contemporary take. Crafted by hand in over 125 steps in Almansa, Spain. We make high-quality shoes and accessories in a timeless design.',
      link: { href: 'https://www.morjas.com/', label: 'morjas.com' },
      logo: logoMorjas,
    },
    {
      name: 'Garbo and Friends',
      description:
        'Swedish brand Garbo&Friends focuses on creating exclusive children and interior products with unique patterns and colors inspired by flora and fauna.',
      link: {
        href: 'https://www.garboandfriends.com/',
        label: 'garboandfriends.com',
      },
      //   logo: logoPlanetaria,
    },
    {
      name: 'DailySports',
      description:
        'Daily Sports is a Swedish fashion company that designs, produces and sells sports clothes for women worldwide.',
      link: { href: 'https://www.dailysports.com/', label: 'dailysports.com' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'ByMalina',
      description:
        'The go-to brand for women who love irresistible patterns and timeless silhouettes. Developing each season to a wider range of clothing.',
      link: { href: 'https://bymalina.com/', label: 'bymalina.com' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Stinaaj',
      description:
        'FASHION MEETS INNOVATION | Our patented orthopedic technology works for all types of feet. Prevent pain and treat your body well.',
      link: { href: 'https://stinaaj.com/', label: 'stinaaj.com' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Ella And Il',
      description:
        'Get inspired and fill up your wardrobe with comfortable quality garments from our new online store! Comfortable clothes of high quality.',
      link: { href: 'https://www.ellaandil.com/', label: 'ellaandil.com' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Nutrilett',
      description:
        'Nutrilett is weight management products. When Nutrilett products are developed the primarily focuse is on two things: efficiency and good taste.',
      link: { href: 'https://www.nutrilett.se/', label: 'nutrilett.se' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'OA Devold',
      description:
        'Using our knowledge, rooted in our Devold heritage, we continue the tradition of mastering wool.',
      link: { href: 'https://oadevold.com/', label: 'oadevold.com' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Beyond Retail',
      description:
        'Beyond Retail is a consulting firm specialized in digital transformation, digital marketing and e-commerce.',
      link: { href: 'https://beyondretail.se/', label: 'beyondretail.se' },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Sandberg Sweden',
      description:
        'Swedish luxury in our way. Every piece of Sandberg jewellery is handmade in our workshop from recycled gold and silver.',
      link: {
        href: 'https://sandbergsweden.com/en/',
        label: 'sandbergsweden.com',
      },
      //   logo: logoPlanetaria,
    },
    {
      name: 'Musiksupporten',
      description:
        'Musiksupporten also wants to support and educate the music industry in matters of inclusion and the importance of representation in an otherwise homogenous and generally similar industry.',
      link: {
        href: 'https://musiksupporten.se',
        label: 'musiksupporten.se',
      },
      //   logo: logoPlanetaria,
    },
  ]

  return (
    <>
      <Head>
        <title>John Dave Manuel - Front-end web developer</title>
        <meta
          name="description"
          content="I’m Dave, a web developer based in the Philippines."
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            John Dave Manuel
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Im a front-end web developer based in the Philippines with 5 years
            of industry experience. I have gained extensive knowledge and
            expertise in crafting exceptional digital experiences. I am
            committed to staying ahead of the curve by continuously exploring
            new technologies and staying up to date with the latest industry
            trends and advancements.
          </p>
          <div className="mt-6 flex gap-6">
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
        <Exploring />
      </Container>
      <SimpleLayout
        title="Throughout my career, I have had the opportunity to work on a diverse range of projects, each presenting unique challenges and opportunities for growth."
        intro=" I have been fortunate to contribute to the success of several notable initiatives, and I am proud to share my experience with you."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {/* <div className="relative z-10 flex h-6 w-full items-center justify-center bg-white ">
                <Image
                  src={project.logo}
                  alt={project.name}
                  fill
                  className="h-8 w-8 object-contain"
                  unoptimized
                />
              </div> */}
              <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <Container className="mt-12">
        <Resume />
      </Container>
    </>
  )
}

// export async function getStaticProps() {
//   if (process.env.NODE_ENV === 'production') {
//     await generateRssFeed()
//   }

//   return {
//     props: {
//       articles: (await getAllArticles())
//         .slice(0, 4)
//         .map(({ component, ...meta }) => meta),
//     },
//   }
// }
