import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="Hero"
      className="h-200svh-minus-navbar lg:h-svh-minus-navbar-lg w-full flex flex-col lg:flex-row bg-primary overflow-x-hidden"
    >
      <div className="h-full flex-grow p-4 flex flex-col justify-center gap-4 text-center text-pretty hover:cursor-default">
        <div className="font-extrabold text-4xl sm:text-6xl lg:text-7xl min-[1800px]:text-9xl text-primary-foreground animate-fadeIn2s">
          <div>Diego Bez</div>
          <div>Zambiazzi</div>
        </div>
        <div className="font-semibold lg:text-3xl text-muted-foreground animate-fadeIn2s">
          Software Engineer
        </div>
        <div className="text-primary-foreground text-sm lg:text-base py-8 animate-fadeIn3s">
          <div>{`Building innovative software solutions`}</div>
          <div>{`to tackle real-world challenges`}</div>
        </div>
        <a
          href="/Software Engineer - Diego Bez Zambiazzi.pdf"
          download
          className="animate-fadeIn3s"
        >
          <Button className="h-16 font-semibold text-lg rounded-tl-2xl rounded-br-2xl border-2 bg-secondary border-primary text-primary hover:text-primary-foreground">
            Download My Resume
          </Button>
        </a>
        <div className="pt-8 w-full text-primary-foreground animate-fadeIn6s">
          <div className="animate-pulse-slow">Scroll to view my work</div>
        </div>
      </div>
      <div className="relative h-full w-full lg:w-[50svw] flex place-self-end">
        <div className="z-10 absolute h-full lg:w-32 xl:w-40 bg-gradient-to-r from-primary to-primary/0" />
        <div className="relative h-full w-full overflow-x-hidden">
          <Image
            src="/profile.jpg"
            alt="Profile"
            style={{ objectFit: 'cover' }}
            quality={100}
            fill
            priority
          />
        </div>
      </div>
    </section>
  )
}
