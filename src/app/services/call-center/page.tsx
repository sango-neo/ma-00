import { ContactForm } from "@/components/ContactForm";
import { CTA } from "@/sections/call/CTA";
import { DataDriven } from "@/sections/call/DataDriven";
import { CCFAQ } from "@/sections/call/FAQ";
import { Layout30 } from "@/sections/call/Feature1";
import { Layout16 } from "@/sections/call/Feature5";
import { Header5 } from "@/sections/call/Header";

const CallCenterPage = () => {
    return (
      <>
        <Header5 />
        <Layout30 />
        <Layout16 />
        <DataDriven />
        <CCFAQ />
        <CTA />
        <ContactForm />
      </>
    )
  }
  
  export default CallCenterPage