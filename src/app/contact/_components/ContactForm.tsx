'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useFormStatus } from 'react-dom'
import sendEmail from '../_actions/sendEmail'
import { useActionState, useRef, useState } from 'react'

export default function ContactForm() {
  const [error, action] = useActionState(sendEmail, {})
  const ref = useRef<HTMLFormElement>(null)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const { pending } = useFormStatus()

  return (
    <section id="Contact" className="h-svh grid place-items-center text-pretty">
      <Card className="w-[90svw] sm:max-w-[70svw] lg:max-w-[50svw] p-2 lg:p-8 py-8">
        <CardHeader>
          <div className="text-lg lg:text-xl font-bold py-2">
            Send me a message!
          </div>
        </CardHeader>
        <CardContent>
          <form
            className="flex flex-col gap-4"
            action={(formData) => {
              ref.current?.reset()
              action(formData)
              setFormSubmitted(true)
            }}
            ref={ref}
          >
            <Input name="name" placeholder="Name" required />
            {error?.name && (
              <div className="text-destructive text-sm">{error.name}</div>
            )}
            <Input name="email" placeholder="Email" required />
            {error?.email && (
              <div className="text-destructive text-sm">{error.email}</div>
            )}
            <Textarea
              name="content"
              placeholder="Tell me what you're thinking!"
              className="h-36"
              required
            />
            {error?.content && (
              <div className="text-destructive text-sm">{error.content}</div>
            )}
            {formSubmitted && (
              <div className="pt-8 text-primary">
                Your message has been sent!
              </div>
            )}
            <Button
              className="w-fit mt-4 self-end"
              type="submit"
              disabled={pending}
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  )
}
