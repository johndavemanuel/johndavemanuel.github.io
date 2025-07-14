import Image from 'next/future/image'
import logoReact from '@/images/tech/explore/react.svg'
import logoNext from '@/images/tech/explore/next-js.svg'
import logoTypeScript from '@/images/tech/explore/typescript.svg'
import logoStoryblok from '@/images/tech/explore/storyblok.svg'
import logoStorybook from '@/images/tech/explore/storybook.svg'
import logoCypress from '@/images/tech/explore/cypress.svg'
import logoMongoDB from '@/images/tech/explore/mongodb.svg'
import logoExpress from '@/images/tech/explore/expressjs.svg'
import logoChakraUI from '@/images/tech/explore/chakra.svg'
import logoHeadlessUI from '@/images/tech/explore/headlessui.svg'
import logoStyledComponents from '@/images/tech/explore/styled-components.png'
import logoGraphQL from '@/images/tech/explore/graphql.svg'

const tech = [
  {
    title: 'React',
    logo: logoReact,
  },
  {
    title: 'NextJS',
    logo: logoNext,
  },
  {
    title: 'Chakra UI',
    logo: logoChakraUI,
  },
  {
    title: 'Headless UI',
    logo: logoHeadlessUI,
  },
  {
    title: 'Styled Components',
    logo: logoStyledComponents,
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
  {
    title: 'GraphQL',
    logo: logoGraphQL,
  },
]

const TechExploring = () => {
  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <span className="ml-3">
          Dedicated to exploring and understanding a variety of modern
          technologies
        </span>
      </h2>
      <ul className="mt-6 space-y-4 columns-1 lg:columns-4">
        {tech.map((techItem, techItemIndex) => (
          <li key={techItemIndex} className="flex gap-4">
            <div className="flex relative flex-none justify-center items-center mt-1 w-10 h-10">
              <Image
                src={techItem.logo}
                alt=""
                fill
                className="object-contain w-7 h-7"
                unoptimized
              />
            </div>
            <dl className="flex flex-wrap flex-auto gap-x-2 items-center">
              <dt className="sr-only">Title</dt>
              <dd className="flex-none w-full text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {techItem.title}
              </dd>
            </dl>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TechExploring
