import { UseFormReturn } from "react-hook-form"
import { ContactFormData } from "@/lib/schemas/contact-form-schema"
import { useEffect, useCallback } from "react"
import { useFormStore } from "@/store/form-store"
import { FORM_STEPS } from "@/lib/constants/form-steps"

export function useStepValidation(form: UseFormReturn<ContactFormData>, currentStep: number) {
  const setStepValidity = useFormStore((state) => state.setStepValidity)

  const validateStep = useCallback((stepName: string): boolean => {
    const values = form.getValues()
    const currentStepConfig = FORM_STEPS[currentStep]
    const requiredFields = currentStepConfig.requiredFields

    // Check if all required fields for current step are filled
    const hasRequiredFields = requiredFields.every(field => {
      const value = values[field as keyof ContactFormData]
      if (Array.isArray(value)) {
        return value.length > 0
      }
      return value && String(value).trim().length > 0
    })

    // Check if there are any errors in the required fields
    const hasNoErrors = !Object.keys(form.formState.errors).some(key => 
      requiredFields.includes(key)
    )

    return hasRequiredFields && hasNoErrors
  }, [form, currentStep])

  useEffect(() => {
    const stepName = FORM_STEPS[currentStep].component.name
    
    // Initial validation
    const isValid = validateStep(stepName)
    setStepValidity(currentStep, isValid)

    // Set up subscription for field changes
    const subscription = form.watch(() => {
      const isValid = validateStep(stepName)
      setStepValidity(currentStep, isValid)
    })

    return () => subscription.unsubscribe()
  }, [form, currentStep, setStepValidity, validateStep])

  return { validateStep }
}
