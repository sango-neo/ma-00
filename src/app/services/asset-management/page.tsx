import { ContactForm } from "@/components/ContactForm";
import { Layout494 } from "@/sections/am/Feature1";
import { Layout16 } from "@/sections/am/Feature2";
import { Layout209 } from "@/sections/am/Feature3";
import HeaderAM from "@/sections/am/Header";
import { Layout61 } from "@/sections/am/Layout61";

const AssetManagementPage = () => {
  return (
    <>
      <img src={'/assets/images/am-vector.png'} alt="illustration" className="absolute top-[380px]" width={380} height={668}/>
      <HeaderAM />
      <Layout494 /> 
      <Layout16 />
      <Layout209 />
      <Layout61 />
      <ContactForm />
    </>
  )
}

export default AssetManagementPage