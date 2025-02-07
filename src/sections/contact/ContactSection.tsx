"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import type { ButtonProps } from "@/components/ui/button"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { PhoneInput } from "@/components/ui/phone-number";
import { Mail, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  image: ImageProps;
  tagline: string;
  heading: string;
  description: string;
  button: ButtonProps;
};

export type Contact9Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").nonempty("Name is required"),
  surname: z.string().min(2, "Surname must be at least 2 characters").nonempty("Surname is required"),
  phone: z.string()
    .nonempty("Phone number is required")
    .regex(/^\+[1-9][0-9]{6,14}$/, {
      message: "Please enter a valid phone number with country code (e.g., +27XXXXXXXXX)",
    }),
  email: z.string().nonempty("Email is required").email("Please enter a valid email address"),
  message: z.string().nonempty("Message is required").min(10, "Message must be at least 10 characters"),
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
})

export const Contact9 = (props: Contact9Props) => {
  const { image, tagline, heading, description, button } = {
    ...Contact9Defaults,
    ...props,
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      acceptTerms: false,
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values)
      // Add your form submission logic here
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  const challengesModal = () => {

  }

  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 min-h-screen bg-gradient-to-tr from-ma_darkBlue/90 via-ma_altBlue/90 to-ma_altBlue/90">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 md:grid-rows-4">

        <div className="rounded-lg bg-white p-8 md:row-span-4">
          <div className="mb-6 md:mb-8">
            <h1 className="heading-1">{heading}</h1>
            <p className="text-ma_darkBlue">{description}</p>
            <Dialog>
              <DialogTrigger asChild>
                <button 
                  type="button" 
                  className="ma-primary-btn bg-ma_altBlue border-ma_altBlue w-full mt-6 mb-10 hover:scale-[1.01] transition-all duration-100"
                >
                  Fill out Challenges Form instead
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-screen scale-90 my-24 overflow-y-auto">
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>
          <Form {...form}>


            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 gap-4">
              <div className="flex justify-between gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input {...field} />
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
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem> 
                  )}
                />
              <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <PhoneInput defaultCountry="ZA" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              <FormField
                control={form.control}

                name="message"
                render={({ field }) => (
                  <FormItem className="mb-6">
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea 

                        placeholder="Let us know how we can help you..." 
                        className="min-h-[6rem]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="acceptTerms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm font-medium leading-none">
                        I accept the{" "}
                        <a className="text-primary underline" href="/legal/privacy.html">
                          Privacy Policy
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
              <Button type="submit" {...button} className="ma-primary-btn w-full bg-ma_darkBlue py-6 border-none hover:bg-ma_altBlue">
                {button.title}
              </Button>
            </form>

          </Form>
        </div>
        <div className="row-start-1 mt-20 md:row-start-auto md:mt-0 md:col-start-2 md:row-span-3 relative">
          <img src={image.src} alt={image.alt} className="size-full object-cover rounded-lg" />          
          <img src="/assets/images/call-signal.svg" alt="Signal Icon" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[80%]" />
        </div>
        <div className="bg-white rounded-lg p-8 flex flex-col justify-center items-center gap-4 w-full md:row-start-4 md:row-span-1 md:col-start-2 text-sm">
              <div className="flex justify-between items-center gap-2 text-sm">
                  <Mail size={18} className="size-5 text-ma_darkBlue" />
                  <span>contact@moagoafrica.com</span>
              </div>
              <div className="flex justify-between items-center gap-2">
                  <MapPin size={18} className="size-5 text-ma_darkBlue" />
                  <span>Montana, Pretoria, Gauteng, South Africa</span>
              </div>
        </div>
      </div>

    </section>
  );
};

export const Contact9Defaults: Props = {
  image: {
    src: "/assets/images/contact-pg-img.jpg",
    alt: "Contact page image",
  },
  tagline: "",
  heading: "Get In Touch",
  description: "Let us assist you with your inquiries. Start a conversation today.",
  button: { title: "Submit" },

};
