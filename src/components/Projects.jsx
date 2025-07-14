import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

const projects = [
  {
    name: 'Stellar Equipment',
    description:
      'Stellar Equipment creates amazing technical outerwear with timeless design from cutting-edge materials – for running, hiking, climbing, ski & snowboarding.',
    link: {
      href: 'https://www.stellarequipment.com/',
      label: 'stellarequipment.com',
    },
  },
  {
    name: 'Morjas',
    description:
      'Classic shoes, contemporary take. Crafted by hand in over 125 steps in Almansa, Spain. We make high-quality shoes and accessories in a timeless design.',
    link: { href: 'https://www.morjas.com/', label: 'morjas.com' },
  },
  {
    name: 'Garbo and Friends',
    description:
      'Swedish brand Garbo&Friends focuses on creating exclusive children and interior products with unique patterns and colors inspired by flora and fauna.',
    link: {
      href: 'https://www.garboandfriends.com/',
      label: 'garboandfriends.com',
    },
  },
  {
    name: 'DailySports',
    description:
      'Daily Sports is a Swedish fashion company that designs, produces, and sells sports clothes for women worldwide.',
    link: { href: 'https://www.dailysports.com/', label: 'dailysports.com' },
  },
  {
    name: 'ByMalina',
    description:
      'The go-to brand for women who love irresistible patterns and timeless silhouettes. Developing each season to a wider range of clothing.',
    link: { href: 'https://bymalina.com/', label: 'bymalina.com' },
  },
  {
    name: 'Stinaaj',
    description:
      'FASHION MEETS INNOVATION | Our patented orthopedic technology works for all types of feet. Prevent pain and treat your body well.',
    link: { href: 'https://stinaaj.com/', label: 'stinaaj.com' },
  },
  {
    name: 'Ella And Il',
    description:
      'Get inspired and fill up your wardrobe with comfortable quality garments from our new online store! Comfortable clothes of high quality.',
    link: { href: 'https://www.ellaandil.com/', label: 'ellaandil.com' },
  },
  {
    name: 'Nutrilett',
    description:
      'Nutrilett is weight management product. When Nutrilett products are developed the primary focuse is on two things: efficiency and good taste.',
    link: { href: 'https://www.nutrilett.se/', label: 'nutrilett.se' },
  },
  {
    name: 'OA Devold',
    description:
      'Using our knowledge, rooted in our Devold heritage, we continue the tradition of mastering wool.',
    link: { href: 'https://oadevold.com/', label: 'oadevold.com' },
  },
  {
    name: 'Beyond Retail',
    description:
      'Beyond Retail is a consulting firm specializing in digital transformation, digital marketing, and e-commerce.',
    link: { href: 'https://beyondretail.se/', label: 'beyondretail.se' },
  },
  {
    name: 'Sandberg Sweden',
    description:
      'Swedish luxury in our way. Every piece of Sandberg jewelry is handmade in our workshop from recycled gold and silver.',
    link: {
      href: 'https://sandbergsweden.com/en/',
      label: 'sandbergsweden.com',
    },
  },
  {
    name: 'Musiksupporten',
    description:
      'Musiksupporten also wants to support and educate the music industry in matters of inclusion and the importance of representation in an otherwise homogenous and generally similar industry.',
    link: {
      href: 'https://musiksupporten.se',
      label: 'musiksupporten.se',
    },
  },
]

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

const Projects = () => {
  return (
    <SimpleLayout title="Throughout my career, I have had the opportunity to work on a diverse range of projects, each presenting unique challenges and opportunities for growth.">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="flex relative z-10 mt-6 text-sm font-medium transition text-zinc-400 group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="flex-none w-6 h-6" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}

export default Projects
