"use client";

import { useState  } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const subscribeSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type SubscribeFormData = z.infer<typeof subscribeSchema>;

export function CTAPM() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<SubscribeFormData>({
    resolver: zodResolver(subscribeSchema),
  });

  const onSubmit = async (data: SubscribeFormData) => {
    setStatus('loading');

    try {
      const response = await fetch('https://ma-00-api-server.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email }),
      });

      const responseData = await response.json();

      if (responseData.success) {
        setStatus('success');
        reset(); // Clear the form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="" className="relative px-[5%] py-16 md:pTA lg:py-28">
      <div className="container max-w-[600px] text-center">
        <h2 className="heading-2 text-white lg:text-5xl">
          Project Management Module Coming Soon
        </h2>
        <p className="text-white/70 mb-8">
          We're working on something exciting! Subscribe to be the first to know when our Project Management module launches and get exclusive early access.
        </p>
        <form className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full md:max-w-[300px]">
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email')}
              disabled={status === 'loading'}
              className={`w-full border p-3 bg-transparent text-white border-white rounded-lg ${errors.email ? 'border-red-400' : ''}`}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1 text-left">{errors.email.message}</p>
            )}
          </div>
          <button 
            type="submit"
            className={`ma-primary-btn border border-white text-white bg-transparent ${status === 'loading' ? 'opacity-50' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe for Updates'}
          </button>
        </form>
        {status === 'success' && (
          <p className="text-green-400 text-sm mt-4">Thanks for subscribing!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-sm mt-4">Something went wrong. Please try again.</p>
        )}
        <p className="text-white/50 text-xs mt-4">
          By subscribing you agree to with our <a href="/legal/privacy.html" target="_blank" className="underline">Privacy Policy</a>.
        </p>
      </div>
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/images/call-center-bg-dark.jpg"
          className="size-full object-cover"
          alt="section background image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
