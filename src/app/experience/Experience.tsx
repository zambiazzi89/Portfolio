import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const experiences = [
  {
    jobTitle: 'Senior Consultant I (Cloud & Custom Applications)',
    company: 'Capgemini',
    href: 'https://www.capgemini.com/',
    location: 'New York, NY (Remote)',
    dateRange: 'Jun 2022 - Present',
    experiencePoints: [
      'Developed and deployed scalable code solutions, shell scripts, and PL/SQL procedures to address unsupported tasks in enterprise applications.',
      'Resolved 100% of critical application issues within SLA timelines, improving system reliability and user satisfaction.',
      'Authored comprehensive knowledge documents and SOPs, enhancing team efficiency by up to 95%.',
      'Managed and mentored a globally distributed team of 10 engineers, fostering collaboration and operational success.',
      'Recognized with three company awards (June 2023, December 2023, and March 2024) for leadership and outstanding contributions.',
    ],
  },
  {
    jobTitle: 'Order Fulfillment Specialist',
    company: 'Rhino Foods',
    href: 'https://www.rhinofoods.com/',
    location: 'Burlington, VT (Remote)',
    dateRange: 'Apr 2019 - Nov 2021',
    experiencePoints: [
      'Proactively designed and implemented a React-based application that mitigated human error and improved operational efficiency by 90%.',
      'Processed customer orders with precision, ensuring on-time and in-full delivery while maintaining strong client relationships.',
      'Collaborated with cross-functional teams, including Sales, Logistics, and QA, to streamline workflows and enhance customer satisfaction.',
    ],
  },
  {
    jobTitle: 'Bank Officer, Teller, and Substitute Treasurer',
    company: 'Caixa',
    href: 'https://www.caixa.gov.br/',
    location: 'Santa Catarina, Brazil',
    dateRange: 'Feb 2010 - Jul 2018',
    experiencePoints: [
      'Delivered exceptional customer service by managing accounts, performing teller operations, and analyzing credit risk for personal and mortgage loans.',
      'Conducted treasurer operations and audited bank contracts, identifying discrepancies and resolving inconsistencies with accuracy.',
    ],
  },
]

const awards = [
  `Capgemini Leadership Awards (2023, 2024): Recognized for exceptional leadership and significant contributions to project success.`,
  `Education Honors: Graduated with a 3.99 GPA from Southern New Hampshire University and inducted into the Alpha Sigma Lambda Honor Society.`,
]

export default function Experience() {
  return (
    <section id="Experience" className="grid place-items-center p-2 lg:p-8">
      <Card className="max-w-[90svw] md:max-w-[70svw] lg:max-w-[60svw] p-2 lg:p-8 py-8 lg:py-16">
        <CardContent className="flex flex-col gap-10">
          {experiences.map((exp, i) => {
            return (
              <div key={i} className="flex flex-col gap-2">
                <div className="text-lg lg:text-xl font-bold">
                  {exp.jobTitle}
                </div>
                <Link
                  href={exp.href}
                  className="font-semibold text-muted-foreground"
                >
                  @ {exp.company}
                </Link>
                <div>{exp.dateRange}</div>

                {exp.experiencePoints.map((expPoint, j) => {
                  return <div key={j}>{expPoint}</div>
                })}
              </div>
            )
          })}
        </CardContent>

        <CardContent>
          <div className="text-lg lg:text-xl font-bold py-2">
            Awards & Achievements
          </div>
          <div className="flex flex-col gap-2">
            {awards.map((award, i) => {
              return <div key={i}>{award}</div>
            })}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
