"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"
import Link from "next/link"

const currentYear = new Date().getFullYear()

const formSchema = z.object({
  ngoName: z.string().min(2, {
    message: "NGO name must be at least 2 characters.",
  }),
  tagline: z.string().max(100, {
    message: "Tagline must not exceed 100 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  website: z.string().url({
    message: "Please enter a valid URL.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  affiliation: z.string().optional(),
  certification: z.string().optional(),
  country: z.string().min(2, {
    message: "Country must be at least 2 characters.",
  }),
  region: z.string().min(2, {
    message: "Region must be at least 2 characters.",
  }),
  yearEstablished: z
    .number()
    .int()
    .min(1800)
    .max(currentYear, {
      message: `Year must be between 1800 and ${currentYear}.`, // Correct template literal
    }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions.",
  }),
})

export default function NGORegisterPage() {
  const [logo, setLogo] = useState<File | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ngoName: "",
      tagline: "",
      email: "",
      website: "",
      address: "",
      affiliation: "",
      certification: "",
      country: "",
      region: "",
      yearEstablished: currentYear,
      termsAccepted: false,
    },
  })

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setLogo(file)
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a valid PNG or JPG image file.",
      })
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the form data to your backend
    console.log(values)
    console.log(logo)
    toast({
      title: "NGO Registration Submitted",
      description: "Your NGO registration has been submitted successfully.",
      ariaLive: "assertive",
    })
    form.reset()  // Reset the form after submission
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-16">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-green-800">Register Your NGO</h1>
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Form Fields go here */}
              <FormItem>
                <FormLabel>Logo Upload</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}  // Updated handler
                    className="border-green-300 focus:border-green-500"
                  />
                </FormControl>
                <FormDescription>Upload your NGO's logo (PNG or JPG format recommended)</FormDescription>
                {logo && <img src={URL.createObjectURL(logo)} alt="Uploaded Logo" className="mt-4 w-24 h-24 object-cover" />}
              </FormItem>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white transition-colors duration-300"
              >
                Register NGO
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </main>
  )
}
