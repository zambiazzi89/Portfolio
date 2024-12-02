import { Aref_Ruqaa_Ink, Croissant_One, Lora, Lexend } from 'next/font/google'

export const croissantOne = Croissant_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-croissantOne',
})

export const arefRuqaaInk = Aref_Ruqaa_Ink({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-arefRuqaaInk',
})

export const cormorant = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const lexend = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-lexend',
})
