import { UseFormReturn } from "react-hook-form"
import { ContactFormData } from "@/lib/schemas/contact-form-schema"
import { useEffect } from "react"
import { useFormStore } from "@/store/form-store"
import { FORM_STEPS } from "@/components/ContactForm"

export function useStepValidation(form: UseFormReturn<ContactFormData>, currentStep: number) {
  const setStepValidity = useFormStore((state) => state.setStepValidity)

  const validateStep = (stepName: string): boolean => {
    const values = form.getValues()
    const errors = form.formState.errors
    
    switch (stepName) {
      case 'ChallengesStep':
        return !!(
          (values.predefinedChallenges && values.predefinedChallenges.length > 0) ||
          (values.customChallenges && values.customChallenges.trim().length > 0)
        )
      
      case 'CompanyInfoStep':
        // Check all required company fields are filled and valid
        return !!(
          values.companyName?.trim() &&
          values.sector?.trim() &&
          values.industry?.trim() &&
          !errors.companyName &&
          !errors.sector &&
          !errors.industry
        )
      
      case 'PersonalInfoStep':
        // Check all required personal info fields are filled and valid
        return !!(
          values.firstName?.trim() &&
          values.lastName?.trim() &&
          values.email?.trim() &&
          !errors.firstName &&
          !errors.lastName &&
          !errors.email
        )
      
      default:
        return false
    }
  }

  useEffect(() => {
    const subscription = form.watch((value, { name, type }) => {
      // Get current step name based on the changed field
      const stepName = FORM_STEPS[currentStep].component.name
      const isValid = validateStep(stepName)
      setStepValidity(currentStep, isValid)
    })

    return () => subscription.unsubscribe()
  }, [form, currentStep, setStepValidity])

  return { validateStep }
}
