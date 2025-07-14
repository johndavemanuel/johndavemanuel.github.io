import React from 'react'

const Resume = () => {
  let resume = [
    {
      company: 'ROIROI',
      start: 'Jan 2024',
      end: 'Present',
    },
    {
      company: 'STOK MNL INC',
      start: 'Oct 2019',
      end: 'Dec 2023',
    },
    {
      company: 'Mosaique Pvt. Ltd.',
      start: 'Jan 2019',
      end: 'Sept 2019',
    },
    {
      company: 'Anydecide Holdings Corporation',
      start: 'Jan 2017',
      end: 'Dec 2018',
    },
  ]

  return (
    <div className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-700/40">
      <h2 className="flex text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
        <span>Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <dl className="flex flex-wrap flex-auto gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
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
    </div>
  )
}

export default Resume
