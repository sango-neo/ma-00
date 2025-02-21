import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ContactFormData } from '@/lib/schemas/contact-form-schema'

interface FormStore {
  formData: ContactFormData
  currentStep: number
  validSteps: boolean[]
  updateFormData: (data: Partial<ContactFormData>) => void
  setStep: (step: number) => void
  setStepValidity: (step: number, isValid: boolean) => void
  resetForm: () => void
}

// Explicitly type the initial form data
const initialFormData = {
  predefinedChallenges: [] as string[],  // Explicitly type as string array
  customChallenges: "",
  companyName: "",
  sector: "",
  industry: "",
  jobTitle: "",
  companySize: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
} as const satisfies ContactFormData

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: { ...initialFormData },
      currentStep: 0,
      validSteps: [false, false, false],
      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      setStep: (step) => set({ currentStep: step }),
      setStepValidity: (step, isValid) =>
        set((state) => ({
          validSteps: state.validSteps.map((v, i) =>
            i === step ? isValid : v
          ),
        })),
      resetForm: () =>
        set({
          formData: { ...initialFormData },
          currentStep: 0,
          validSteps: [false, false, false],
        }),
    }),
    {
      name: 'contact-form-storage',
    }
  )
)
