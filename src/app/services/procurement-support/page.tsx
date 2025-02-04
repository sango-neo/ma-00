
import { ContactForm } from "@/components/ContactForm"
import { CTASupplier } from "@/sections/supplier-db/CTASupplier"
import { HeaderSDB } from "@/sections/supplier-db/HeaderSDB"
import { SupplierAlerts } from "@/sections/supplier-db/SupplierAlerts"
import { SupplierCompliance } from "@/sections/supplier-db/SupplierCompliance"
import { SupplierSummary } from "@/sections/supplier-db/SupplierSummary"
import Image from "next/image"


const ProcurementSupportPage = () => {
    return (
      <div className="relative overflow-x-hidden">
        <Image src={'/assets/images/deco-dots-rings.png'} alt="backgroundillustration" className="absolute w-[25vw] top-64 opacity-75" width={550} height={425}/>
        <HeaderSDB />
        <SupplierSummary />
        <SupplierCompliance />
        <SupplierAlerts />
        <CTASupplier />
        <ContactForm />
      </div>
    )
  }
  
  export default ProcurementSupportPage