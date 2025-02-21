import { ContactForm } from "@/components/ContactForm";
import { AssetManagementOverview } from "@/sections/AssetManagementOverview";
import { ProjectManagementOverview } from "@/sections/ProjectManagementOverview";
import { Feature2 } from "@/sections/Feature2";
import { MaintenanceOverview } from "@/sections/MaintenanceOverview";
import Header from "@/sections/Header";
import { CallCenterOverview } from "@/sections/CallCenterOverview";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { CTAHome } from "@/sections/CTAHome";
import ServiceOverview from "@/sections/OverviewSection";

export default function Home() {
  return (
    <div className="">
      <Header />
      <ServiceOverview />
      <AssetManagementOverview />
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
