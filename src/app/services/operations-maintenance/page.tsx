import { ContactForm } from "@/components/ContactForm";
import { Layout438 } from "@/sections/om/Feature1";
import { Feature2 } from "@/sections/om/Feature2";
import { Layout12 } from "@/sections/om/Feature3";
import { Layout3 } from "@/sections/om/Feature4";
import { Layout201 } from "@/sections/om/Feature6";
import { Header139 } from "@/sections/om/HeaderOM";

const OpsMaintenancePage = () => {
  return (
    <div className="overflow-hidden">
      <Header139 />
      <Layout438 />
      <Feature2 />
      <Layout12 />
      <Layout3 />
      <Layout201 />
      <ContactForm />
    </div>
  )
}

export default OpsMaintenancePage