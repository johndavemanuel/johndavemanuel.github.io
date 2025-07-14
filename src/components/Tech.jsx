import Image from 'next/future/image'

import logoHTML from '@/images/tech/html5.svg'
import logoCSS from '@/images/tech/css.svg'
import logoJS from '@/images/tech/javascript.svg'
import logoJquery from '@/images/tech/jquery.svg'
import logoSCSS from '@/images/tech/sass.svg'
import logoGulp from '@/images/tech/gulp.svg'
import logoBootstrap from '@/images/tech/bootstrap.svg'
import logoBulma from '@/images/tech/bulma.svg'
import logoTailwind from '@/images/tech/tailwind.svg'
import logoNPM from '@/images/tech/npm.svg'
import logoYarn from '@/images/tech/yarn.svg'
import logoGit from '@/images/tech/git.svg'
import logoGitHub from '@/images/tech/github.svg'
import logoLiquid from '@/images/tech/liquid.png'
import logoShadcnUI from '@/images/tech/shadcnui.png'

const tech = [
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
    title: 'SASS',
    logo: logoSCSS,
  },
  {
    title: 'Gulp',
    logo: logoGulp,
  },
  ,
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
  {
    title: 'Liquid',
    logo: logoLiquid,
  },
  {
    title: 'Shadcn UI',
    logo: logoShadcnUI,
  },
]

const Tech = () => {
  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <span className="ml-3">
          Hands-on experience with various technologies and tools
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

export default Tech
