"use client";

import { Button } from "@relume_io/relume-ui";
import Link from "next/link";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

// Add this type definition and data array before the component
type BlogPost = {
  category: string;
  readTime: string;
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
};

const blogPosts: BlogPost[] = [
    // {
    //     category: "Industry News",
    //     readTime: "5 min read",
    //     title: "Understanding Infrastructure Management Trends",
    //     description: "Gain insights into the latest infrastructure management strategies and technologies.",
    //     imageUrl: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
    //     slug: "understanding-infrastructure-management-trends",
    // },
  // ... add the rest of your blog posts here
];

export function NewsContent() {
  // Add state for active category
  const [activeCategory, setActiveCategory] = React.useState("all");

  // Filter posts based on active category
  const filteredPosts = blogPosts.filter(post => 
    activeCategory === "all" ? true : post.category === activeCategory
  );

  // Categories array for the filter buttons
  const categories = ["all", "Industry News", "Expert Opinions", "Feature Updates", "Best Practices"];

  return (
    <section id="" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="mx-auto w-full max-w-lg text-center">
            <h1 className="heading-2">
              Latest Insights and Trends
            </h1>
            <p >
              Explore our latest articles on industry developments.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start">
          <div className="no-scrollbar mb-12 ml-[-5vw] flex w-screen items-center justify-start overflow-scroll pl-[5vw] md:mb-16 md:ml-0 md:w-full md:justify-center md:overflow-hidden md:pl-0">
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveCategory(category);
                }}
                className={`focus-visible:ring-border-primary inline-flex items-center justify-center whitespace-nowrap ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-text-primary gap-2 border px-4 py-2 ${
                  activeCategory === category
                    ? "bg-background-primary border-border-primary"
                    : "border-transparent"
                }`}
              >
                {category === "all" ? "View all" : category}
              </a>
            ))}
          </div>
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl">No posts from our team yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
              {filteredPosts.map((post, index) => (
                <div key={index} className="flex size-full flex-col items-center justify-start border border-border-primary">
                  <Link href={`/news-insights/${post.slug}`} className="w-full">
                    <img
                      src={post.imageUrl}
                      alt={`Blog post image ${index + 1}`}
                      className="aspect-[3/2] size-full object-cover"
                    />
                  </Link>
                  <div className="px-5 py-6 md:p-6">
                    <div className="rb-4 mb-4 flex w-full items-center justify-start">
                      <p className="mr-4 bg-background-secondary px-2 py-1 text-sm font-semibold">
                        {post.category}
                      </p>
                      <p className="inline text-sm font-semibold">{post.readTime}</p>
                    </div>
                    <Link href={`/news-insights/${post.slug}`} className="mb-2">
                      <h2 className="text-xl font-bold md:text-2xl">
                        {post.title}
                      </h2>
                    </Link>
                    <p>{post.description}</p>
                    <Link href={`/news-insights/${post.slug}`}>
                      <Button
                        title="Read more"
                        variant="link"
                        size="link"
                        iconRight={<RxChevronRight />}
                        className="mt-6 flex items-center justify-center gap-x-2"
                    >
                      Read more
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
