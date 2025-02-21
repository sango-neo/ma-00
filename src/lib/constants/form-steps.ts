import { ChallengesStep } from "@/components/ContactForm/steps/ChallengesStep"
import { CompanyInfoStep } from "@/components/ContactForm/steps/CompanyInfoStep"
import { PersonalInfoStep } from "@/components/ContactForm/steps/PersonalInfoStep"

export const FORM_STEPS = [
  {
    title: "What challenges are you facing?",
    description: "Select the challenges that your organization is experiencing",
    component: ChallengesStep,
    requiredFields: ['predefinedChallenges']
  },
  {
    title: "Tell us about your organization",
    description: "Help us understand your business context",
    component: CompanyInfoStep,
    requiredFields: ['companyName', 'sector', 'industry']
  },
  {
    title: "Your Contact Information",
    description: "We'll get back to you with relevant solutions",
    component: PersonalInfoStep,
    requiredFields: ['firstName', 'lastName', 'email']
  }
]
