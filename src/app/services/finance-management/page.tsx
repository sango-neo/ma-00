import { ContactForm } from "@/components/ContactForm"
import { CTA } from "@/sections/fin/CTA"
import { HeaderFin } from "@/sections/fin/HeaderFin"
import { Section1 } from "@/sections/fin/Section1"
import { Section2 } from "@/sections/fin/Section2"
import { Section4 } from "@/sections/fin/Section4"
import { Section6 } from "@/sections/fin/Section6"

const FinanceManagementPage = () => {
  return (
    <main className="scroll-smooth">
      <HeaderFin />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section6 />
      <CTA />
      <ContactForm />
    </main>
  )
}

export default FinanceManagementPage