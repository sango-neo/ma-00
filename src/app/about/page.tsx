import { ContactForm } from "@/components/ContactForm";
import { About } from "@/sections/about/About";
import { CTAAbout } from "@/sections/about/CTAAbout";
import { Header64 } from "@/sections/about/Header";

const AboutPage = () => {
  return (
    <>
      <Header64 />
      <About />
      <CTAAbout />
      <ContactForm />
    </>
  )
}

export default AboutPage