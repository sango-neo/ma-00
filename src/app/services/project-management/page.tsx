import { HeaderPM } from "@/sections/pm/HeaderPM";
import { LifecycleSection } from "@/sections/pm/LifecycleSection";
import { DocManagementSection } from "@/sections/pm/DocManagement";
import { ConsultantSection } from "@/sections/pm/ConsultantSection";
import { PlanningSection } from "@/sections/pm/PlanningSection";
import { AccountabilitySection } from "@/sections/pm/AccountabilitySection";
import { CTAPM } from "@/sections/pm/CTAPM";
import { ContactForm } from "@/components/ContactForm";

const ProjectManagementPage = () => {
  return (
    <>
      <HeaderPM />
      <LifecycleSection />
      <DocManagementSection />
      <ConsultantSection />
      <PlanningSection />
      <AccountabilitySection />
      <CTAPM />
      <ContactForm />
    </>
  );
};

export default ProjectManagementPage