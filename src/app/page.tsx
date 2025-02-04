import { ContactForm } from "@/components/ContactForm";
import { AssetManagement } from "@/sections/AssetManagement";
import Challenges from "@/sections/Challenges";
import { ProjectManagementOverview } from "@/sections/ProjectManagementOverview";
import { Feature2 } from "@/sections/Feature2";
import { MaintenanceOverview } from "@/sections/MaintenanceOverview";
import Header from "@/sections/Header";
import { CallCenterOverview } from "@/sections/CallCenterOverview";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CTAHome } from "@/sections/CTAHome";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Challenges />
      <AssetManagement />
      <ScrollToTopButton />
      <MaintenanceOverview />
      <Feature2 />
      <CallCenterOverview />
      <ProjectManagementOverview />
      <CTAHome />
      <ContactForm />
    </div>
  );
}
