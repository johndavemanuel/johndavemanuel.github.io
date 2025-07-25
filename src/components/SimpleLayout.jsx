import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16">
      <header className="max-w-2xl">
        <h1 className="text-base font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p>
      </header>
      <div className="mt-4">{children}</div>
    </Container>
  )
}
