import { Card, CardContent } from '@/components/ui/card'

const projects = [
  {
    title: 'Gotham Lights',
    description:
      'A web app connecting people who missed the chance to meet in NYC.',
    features:
      'Real-time database subscriptions, secure user authentication, and intuitive UI/UX design.',
    stack: 'Next.js, React, Typescript, Tailwind, shadcn, Prisma, Supabase',
    href: 'https://www.gothamlights.com',
  },
  {
    title: 'Rhino Foods Sales Fulfillment Tool',
    description:
      'A React-based application to mitigate errors and streamline order fulfillment.',
    features:
      'User-friendly interface and automated order processing calculations, increasing efficiency by 90%.',
    stack: 'React, Electron',
  },
]

export default function Projects() {
  return (
    <section id="Projects" className="grid place-items-center p-2 lg:p-8">
      <Card className="max-w-[90svw] md:max-w-[70svw] lg:max-w-[60svw] p-2 lg:p-8 py-8 lg:py-16">
        <CardContent className="flex flex-col gap-12 text-pretty">
          {projects.map((project, i) => {
            return (
              <div key={i} className="flex flex-col gap-4 text-pretty">
                <div className="font-bold text-lg">{project.title}</div>
                <div className="grid sm:grid-cols-1fr-auto lg:gap-x-6">
                  <div className="font-semibold text-muted-foreground">
                    Description
                  </div>
                  <div>{project.description}</div>

                  <div className="font-semibold text-muted-foreground pt-2">
                    Features
                  </div>
                  <div className="lg:pt-2">{project.features}</div>

                  <div className="font-semibold text-muted-foreground pt-2">
                    Stack
                  </div>
                  <div className="lg:pt-2">{project.stack}</div>

                  {project.href && (
                    <>
                      <div className="font-semibold text-muted-foreground pt-2">
                        Link
                      </div>
                      <a
                        target="_blank"
                        href={project.href}
                        rel="noopener noreferrer"
                        className="px-1 underline lg:pt-2"
                      >
                        {project.href}
                      </a>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>
    </section>
  )
}
