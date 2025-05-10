"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Plane } from "lucide-react"

import {
  Card, CardContent, CardDescription,
  CardFooter, CardHeader, CardTitle
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Form, FormControl, FormField, FormItem, FormMessage,
} from "@/components/ui/form"
import { formSchema } from "@/lib/schema"
import { send } from "@/lib/email"
import SuccessModal from "../ui/success"


export default function ContactForm() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submittedData, setSubmittedData] = useState<z.infer<typeof formSchema> | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      contactNo: "",
      message: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    send(values)
    setSubmittedData(values)
    setIsModalOpen(true)
    form.reset()
  }

  return (
    <>
      <Card className="w-full max-w-lg mx-auto shadow-lg border border-gray-200 pt-0 overflow-hidden">
        <CardHeader className="space-y-1 text-center bg-cyan-50 py-5">
          <div className="flex justify-center mb-2">
            <Plane className="h-10 w-10 text-cyan-600" />
          </div>
          <CardTitle className="text-2xl font-bold">Contact Us</CardTitle>
          <CardDescription>
            Have questions about your next adventure? We&apos;re here to help!
          </CardDescription>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <Label>First Name</Label>
                      <FormControl>
                        <Input
                          placeholder="John"
                          {...field}
                          className="focus-visible:ring-cyan-500 focus-visible:ring-1 focus-visible:ring-offset-0 border border-gray-200 shadow-inner placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Last Name</Label>
                      <FormControl>
                        <Input
                          placeholder="Doe"
                          {...field}
                          className="focus-visible:ring-cyan-500 focus-visible:ring-1 focus-visible:ring-offset-0 border border-gray-200 shadow-inner placeholder:text-gray-400"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label>Email</Label>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john.doe@example.com"
                        {...field}
                        className="focus-visible:ring-cyan-500 focus-visible:ring-1 focus-visible:ring-offset-0 border border-gray-200 shadow-inner placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="contactNo"
                render={({ field }) => (
                  <FormItem>
                    <Label>Contact Number</Label>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="+91 9XXXXXXXXX"
                        {...field}
                        className="focus-visible:ring-cyan-500 focus-visible:ring-1 focus-visible:ring-offset-0 border border-gray-200 shadow-inner placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Label>Message</Label>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your travel plans or questions..."
                        {...field}
                        className="min-h-[120px] resize-none focus-visible:ring-cyan-500 focus-visible:ring-1 focus-visible:ring-offset-0 border border-gray-200 shadow-inner placeholder:text-gray-400"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>

            <CardFooter className="mt-5">
              <Button type="submit" className="w-full bg-cyan-700 hover:bg-cyan-800 text-white">
                Send Message
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {submittedData && (
        <SuccessModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          data={submittedData}
        />
      )}
    </>
  )
}
