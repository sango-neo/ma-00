import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { ContactFormData } from '@/lib/schemas/contact-form-schema'

interface FormStore {
  formData: Partial<ContactFormData>
  currentStep: number
  updateFormData: (data: Partial<ContactFormData>) => void
  setStep: (step: number) => void
  resetForm: () => void
}

export const useFormStore = create<FormStore>()(
  persist(
    (set) => ({
      formData: {},
      currentStep: 0,
      updateFormData: (data) =>
        set((state) => ({
          formData: { ...state.formData, ...data },
        })),
      setStep: (step) => set({ currentStep: step }),
      resetForm: () => set({ formData: {}, currentStep: 0 }),
    }),
    {
      name: 'contact-form-storage',
    }
  )
)
