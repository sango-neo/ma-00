"use client";


import Link from "next/link";
import { useState } from "react";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  links: Links[];
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  logo: ImageProps;
  inputPlaceholder?: string;
  termsAndConditions: string;
  columnLinks: ColumnLinks[];
  footerText: string;
  footerLinks: FooterLink[];
};

export type Footer8Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Footer8 = (props: Footer8Props) => {
  const {
    logo,
    inputPlaceholder,
    termsAndConditions,
    footerText,
    columnLinks,
    footerLinks,
  } = {
    ...Footer8Defaults,
    ...props,
  } as Props;

  const [emailInput, setEmailInput] = useState<string>("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://ma-00-api-server.vercel.app/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: emailInput }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setEmailInput('');
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20 border bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start justify-between gap-x-[8vw] gap-y-12 pb-12 sm:gap-y-10 md:gap-y-14 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:pb-20">
          <div className="flex flex-col items-start">
            <Link href={`${logo.url}`} className="mb-8">
              <img src={logo.src} alt={logo.alt} className="inline-block" />
            </Link>
          </div>
          <div className="max-w-md lg:min-w-[25rem]">
            <p className="mb-3 font-semibold md:mb-4">Keep up with the latest developments from MOAGO</p>
            <form
              className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
              onSubmit={handleSubmit}
            >
              <input
                id="email"
                type="email"
                placeholder={inputPlaceholder}
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                disabled={status === 'loading'}
                className="border p-2"
              />
              <button 
                className={`border py-2 px-4 ${status === 'loading' ? 'opacity-50' : ''}`}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status === 'success' && (
              <p className="text-green-600 text-sm mb-2">Thanks for subscribing!</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 text-sm mb-2">Something went wrong. Please try again.</p>
            )}
            <div dangerouslySetInnerHTML={{ __html: termsAndConditions }} />
          </div>
        </div>

        <div className="h-px w-full bg-black" />
        <div className="flex flex-col items-start justify-start pb-4 pt-6 text-sm md:flex-row md:items-center md:justify-between md:pb-0 md:pt-8 md:text-center">
          <ul className="grid grid-flow-row grid-cols-[max-content] gap-y-4 text-sm md:grid-flow-col md:gap-x-6 md:gap-y-0 lg:justify-center">
            {footerLinks.map((link, index) => (
              <li key={index} className="underline decoration-black underline-offset-1">
                <Link target="_blank" href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 md:mt-0">{footerText}</p>
        </div>
      </div>
    </footer>
  );
};

export const Footer8Defaults: Footer8Props = {
  logo: {
    url: "#",
    src: "/assets/images/primary-logo.svg",
    alt: "Logo image",
  },
  inputPlaceholder: "Enter your email",
  termsAndConditions: `
  <p class='text-xs'>
    By subscribing you agree to with our 
    <a href='/legal/privacy.html' target="_blank" class='underline'>Privacy Policy</a>.
  </p>
  `,
  footerText: "© 2024 Moago Africa. All rights reserved.",
  footerLinks: [
    { title: "Privacy Policy", url: "/legal/privacy.html"},
    { title: "Terms and Condtions", url: "/legal/terms-and-conditions.html" },
    { title: "Cookies Settings", url: "/legal/cookie-policy.html" },
  ],
};
