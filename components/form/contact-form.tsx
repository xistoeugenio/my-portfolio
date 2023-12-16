"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useAction } from "@/hooks/use-action";
import { createdMessage } from "@/actions/create-message";
import { cn } from "@/lib/utils";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be at least 3 characters.",
  }),
  email: z
    .string()
    .min(1)
    .max(255)
    .refine((value) => emailRegex.test(value), {
      message: "Invalid email address",
    }),
  phoneNumber: z.string().optional(),
  message: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export const ContactForm = () => {
  const { execute } = useAction(createdMessage, {
    onSuccess: (data) => {
      console.log(data, "it worked");
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    execute(values);
  };



  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 p-6 border-2
       border-neutral-800 rounded-md bg-neutral-500/50 backdrop-blur-[6px] w-[500px]"
      >
        <FormField
          control={form.control}
          defaultValue=""
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="name" {...field} />
              </FormControl>
              <FormMessage className="ml-8" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          defaultValue=""
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage className="ml-8" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          defaultValue=""
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <PhoneInput
                  placeholder="phone number(optional)"
                  {...field}
                  className={cn(
                    "phoneNumber"
                  )}
                />
              </FormControl>
              <FormMessage className="ml-8" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          defaultValue=""
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Your message" {...field} />
              </FormControl>
              <FormMessage className="ml-8" />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
