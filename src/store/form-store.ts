import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContactFormData } from '@/lib/schemas/contact-form-schema'

interface FormStore {
  formData: ContactFormData
  currentStep: number
  validSteps: boolean[]
  updateFormData: (data: Partial<ContactFormData>) => void
  setStep: (step: number) => void
  setStepValidity: (step: number, isValid: boolean) => void
  resetForm: () => void
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: {} as ContactFormData,
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
          formData: {} as ContactFormData,
          currentStep: 0,
          validSteps: [false, false, false],
        }),
    }),
    {
      name: 'contact-form-storage',
    }
  )
)
