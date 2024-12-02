import { Card, CardContent } from '@/components/ui/card'

const sections = [
  {
    title: 'Who I Am',
    content: `Hi! I'm Diego, a results-driven software engineer with a passion for solving complex problems through innovative technology.
    My professional journey has taken me across industries, from banking to supply chain management and software consulting.
    Throughout 15 years of experience, I've honed my skills in problem‑solving, teamwork, and building scalable, user‑centric applications.`,
  },
  {
    title: 'Technical Skills',
    content: `I specialize in modern web technologies like Next.js, React, Prisma, PostgreSQL, and AWS. Whether developing automation tools that improve operational efficiency or leading global teams to tackle critical application issues, I'm motivated by the opportunity to create impactful solutions that make a difference.`,
  },
  {
    title: 'All work and no play makes Jack a dull boy',
    content: (
      <span>
        {`When I'm not coding, you can find me strumming my guitar or sharing my music on my`}
        <a
          target="_blank"
          href="https://www.youtube.com/@zambiazzi"
          rel="noopener noreferrer"
          className="px-1 underline"
        >
          YouTube channel
        </a>
        {`where I blend melodies inspired by my roots in Brazil. These creative outlets keep me grounded and remind me of the importance of connection — whether through technology or music.`}
      </span>
    ),
  },
]

export default function About() {
  return (
    <section id="About" className="grid place-items-center text-pretty">
      <Card className="max-w-[90svw] md:max-w-[70svw] lg:max-w-[60svw] p-2 lg:p-8 py-8 lg:py-16">
        <CardContent className="flex flex-col gap-10">
          {sections.map((section, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className="font-bold text-lg">{section.title}</div>
                <div>{section.content}</div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
