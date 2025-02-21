import { UseFormReturn } from "react-hook-form"
import { ContactFormData } from "@/lib/schemas/contact-form-schema"
import { useEffect } from "react"
import { useFormStore } from "@/store/form-store"
import { ChallengesStep } from "@/components/ContactForm/steps/ChallengesStep"
import { CompanyInfoStep } from "@/components/ContactForm/steps/CompanyInfoStep"
import { PersonalInfoStep } from "@/components/ContactForm/steps/PersonalInfoStep"


const FORM_STEPS = [
  {
    title: "What challenges are you facing?",
    description: "Select the challenges that your organization is experiencing",
    component: ChallengesStep
  },
  {
    title: "Tell us about your organization",
    description: "Help us understand your business context",
    component: CompanyInfoStep
  },
  {
    title: "Your Contact Information",
    description: "We'll get back to you with relevant solutions",
    component: PersonalInfoStep
  }
]

export function useStepValidation(form: UseFormReturn<ContactFormData>, currentStep: number) {
  const setStepValidity = useFormStore((state) => state.setStepValidity)

  const validateStep = (stepName: string): boolean => {
    const values = form.getValues()
    const errors = form.formState.errors
    
    switch (stepName) {
      case 'ChallengesStep':
        const hasPredefined = values.predefinedChallenges?.length > 0
        const hasCustom = values.customChallenges ? values.customChallenges?.trim().length > 0 : false;
        return hasPredefined || hasCustom
      
      case 'CompanyInfoStep':
        return !!(
          values.companyName?.trim() &&
          values.sector?.trim() &&
          values.industry?.trim()
        ) && !Object.keys(errors).some(key => 
          ['companyName', 'sector', 'industry'].includes(key)
        )
      
      case 'PersonalInfoStep':
        return !!(
          values.firstName?.trim() &&
          values.lastName?.trim() &&
          values.email?.trim()
        ) && !Object.keys(errors).some(key => 
          ['firstName', 'lastName', 'email'].includes(key)
        )
      
      default:
        return false
    }
  }

  useEffect(() => {
    // Validate initial state
    const stepName = FORM_STEPS[currentStep].component.name
    const isValid = validateStep(stepName)
    setStepValidity(currentStep, isValid)

    // Set up subscription for changes
    const subscription = form.watch(() => {
      const isValid = validateStep(stepName)
      setStepValidity(currentStep, isValid)
    })

    return () => subscription.unsubscribe()
  }, [form, currentStep, setStepValidity])

  return { validateStep }
}
