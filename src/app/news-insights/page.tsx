import { ContactForm } from "@/components/ContactForm"
import UnderConstruction from "@/components/UnderConstruction"
import { CTANews } from "@/sections/news/CTANews"
import { HeaderNews } from "@/sections/news/HeaderNews"
import { NewsContent } from "@/sections/news/NewsContent"

const NewsInsightsPage = () => {
  return (
    <>
      <HeaderNews />
      <NewsContent />
      <CTANews />
      <ContactForm />
    </>
  )
}

export default NewsInsightsPage