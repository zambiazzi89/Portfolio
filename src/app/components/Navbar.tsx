'use client'

import { useState, useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MdMenu } from 'react-icons/md'
import { Croissant_One } from 'next/font/google'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const pages = [
  { title: 'About', href: '#About' },
  { title: 'Projects', href: '#Projects' },
  { title: 'Experience', href: '#Experience' },
  { title: 'Contact', href: '#Contact' },
]

const croissantOne = Croissant_One({ subsets: ['latin'], weight: ['400'] })

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Adjust this to control when the section becomes "active"
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.getAttribute('id') === 'Hero') {
            setCurrentSection('')
          } else {
            setCurrentSection(entry.target.getAttribute('id') || '')
          }
        }
      })
    }, observerOptions)

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="h-16 lg:h-20 p-2 lg:p-4 flex gap-2 justify-between items-center bg-background">
      <a
        className={`h-12 w-12 bg-black grid text-white place-items-center rounded font-semibold text-4xl hover:cursor-pointer ${croissantOne.className}`}
        href="#Hero"
      >
        Z
      </a>

      <div className="lg:hidden text-muted-foreground">{currentSection}</div>

      <div className="hidden text-lg lg:flex gap-4 items-center">
        {pages.map((page) => {
          return (
            <a
              key={page.title}
              href={page.href}
              className={
                currentSection === page.title
                  ? 'text-white/50'
                  : 'hover:text-white/80'
              }
            >
              {page.title}
            </a>
          )
        })}
        <a
          target="_blank"
          href="https://github.com/zambiazzi89"
          rel="noopener noreferrer"
          className="hover:text-white/80 text-xl pl-2"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/zambiazzi/"
          rel="noopener noreferrer"
          className="hover:text-white/80 text-xl px-2"
        >
          <FaLinkedin />
        </a>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="lg:hidden relative hover:cursor-pointer">
            <MdMenu />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-center">
          {pages.map((page) => {
            return (
              <DropdownMenuItem key={page.title} asChild>
                <a href={page.href}>{page.title}</a>
              </DropdownMenuItem>
            )
          })}
          <DropdownMenuItem asChild>
            <a
              target="_blank"
              href="https://github.com/zambiazzi89"
              rel="noopener noreferrer"
              className="hover:text-white/80 text-xl pl-2"
            >
              <FaGithub />
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/zambiazzi/"
              rel="noopener noreferrer"
              className="hover:text-white/80 text-xl px-2"
            >
              <FaLinkedin />
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
