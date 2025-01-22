"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "@/store/form-store"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact-form-schema"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { ChallengesStep } from "./steps/ChallengesStep"
import { CompanyInfoStep } from "./steps/CompanyInfoStep"
import { PersonalInfoStep } from "./steps/PersonalInfoStep"
import { toast } from "@/hooks/use-toast"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

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

export function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const { formData, currentStep, updateFormData, setStep, resetForm } = useFormStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formData,
  })

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true)
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Form submission failed')

      toast({
        title: "Thank you for reaching out!",
        description: "We'll be in touch with you shortly to discuss your challenges.",
      })
      
      resetForm()
      form.reset()
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const nextStep = async () => {
    const currentStepComponent = FORM_STEPS[currentStep].component.name
    const fields = getFieldsForStep(currentStepComponent)
    
    const isValid = await form.trigger(fields as any)
    
    if (isValid) {
      updateFormData(form.getValues())
      setStep(currentStep + 1)
    }
  }

  const previousStep = () => {
    setStep(currentStep - 1)
  }

  const CurrentStepComponent = FORM_STEPS[currentStep].component

  return (
    <section className="px-[5%] bg-gray-50/20 relative my-10 overflow-hidden">
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full mx-auto px-4 lg:px-0 my-16 lg:max-h-screen lg:max-w-[1024px]"
        >
        <div className="w-full bg-white rounded-2xl shadow-large hover:shadow-xlarge hover:scale-[1.01] transition-all duration-150 overflow-hidden">
            {/* Progress indicator */}
            <div className="p-6 bg-white border-b border-ma_grey/10">
            <div className="flex items-center justify-center gap-4 mb-2">
                {FORM_STEPS.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div 
                    className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        index === currentStep 
                        ? "bg-ma_darkBlue scale-125" 
                        : index < currentStep
                        ? "bg-ma_lightBlue"
                        : "border-2 border-ma_grey/30"
                    )}
                    />
                    {index < FORM_STEPS.length - 1 && (
                    <div 
                        className={cn(
                        "w-8 h-0.5 mx-1",
                        index < currentStep 
                            ? "bg-ma_lightBlue" 
                            : "bg-ma_grey/30"
                        )}
                    />
                    )}
                </div>
                ))}
            </div>
            {/* <p className="text-center text-sm text-ma_grey mt-2">
                Step {currentStep + 1} of {FORM_STEPS.length}
            </p> */}
            </div>

            <div className="p-8 lg:p-10">
            {/* Step header */}
            <div className="mb-10 text-center">
                <motion.h2 
                key={`title-${currentStep}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-2xl font-semibold text-ma_darkBlue mb-2 lg:text-3xl"
                >
                {FORM_STEPS[currentStep].title}
                </motion.h2>
                <motion.p 
                key={`desc-${currentStep}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="text-ma_grey"
                >
                {FORM_STEPS[currentStep].description}
                </motion.p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30
                    }}
                    >
                    <CurrentStepComponent form={form} />
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-between pt-6 border-t border-ma_grey/10">
                    <AnimatePresence>
                    {currentStep > 0 && (
                        <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        >
                        <Button 
                            type="button" 
                            variant="outline"
                            onClick={previousStep}
                            className="min-w-[120px] rounded border-ma_darkBlue text-ma_darkBlue hover:bg-ma_darkBlue hover:text-white transition-colors"
                        >
                            Back
                        </Button>
                        </motion.div>
                    )}
                    </AnimatePresence>
                    
                    {currentStep < FORM_STEPS.length - 1 ? (
                    <Button 
                        type="button" 
                        onClick={nextStep}
                        className={cn(
                        "min-w-[120px] ml-auto bg-ma_darkBlue text-white rounded",
                        "hover:bg-ma_lightBlue transition-colors",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        Next
                    </Button>
                    ) : (
                    <Button 
                        type="submit"
                        disabled={isSubmitting}
                        className={cn(
                        "min-w-[120px] ml-auto bg-ma_darkBlue text-white rounded",
                        "hover:bg-ma_lightBlue transition-colors",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle 
                                className="opacity-25" 
                                cx="12" 
                                cy="12" 
                                r="10" 
                                stroke="currentColor" 
                                strokeWidth="4"
                            />
                            <path 
                                className="opacity-75" 
                                fill="currentColor" 
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                            </svg>
                            Submitting...
                        </span>
                        ) : (
                        "Submit"
                        )}
                    </Button>
                    )}
                </div>
                </form>
            </Form>
            </div>
        </div>
        </motion.div>
    </section>
  )
}

// Helper function to determine which fields to validate for each step
function getFieldsForStep(stepName: string): string[] {
  switch (stepName) {
    case 'ChallengesStep':
      return ['predefinedChallenges']
    case 'CompanyInfoStep':
      return ['companyName', 'industry']
    case 'PersonalInfoStep':
      return ['firstName', 'lastName', 'email']
    default:
      return []
  }
}
