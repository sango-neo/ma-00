import { Contact2 } from "@/sections/HomeContact";
import { Layout494 } from "@/sections/am/Feature1";
import HeaderAM from "@/sections/am/Header";
import { Layout61 } from "@/sections/am/Layout61";
import Image from "next/image";

const AssetManagementPage = () => {
  return (
    <>
      <Image src={'/assets/images/am-vector.png'} alt="illustration" className="absolute top-[380px]" width={380} height={668}/>
      <HeaderAM />
      <Layout494 /> 
      <Layout61 />
      <Contact2 />
    </>
  )
}

export default AssetManagementPage