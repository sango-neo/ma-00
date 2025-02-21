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
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { useStepValidation } from "@/hooks/useStepValidation"

export const FORM_STEPS = [
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
  const { formData, currentStep, validSteps, updateFormData, setStep, resetForm } = useFormStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formData,
    mode: "onChange", // Add this line to enable real-time validation
  })
  const { validateStep } = useStepValidation(form, currentStep)
  
  useEffect(() => {
    resetForm()
    form.reset()
  }, [])



  const onSubmit = async (data: ContactFormData) => {
    
    try {
      setIsSubmitting(true)
      const response = await fetch('https://ma-00-api-server.vercel.app/api/submit-form', {
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
      setIsSubmissionSuccess(true)
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

  const nextStep = () => {
    const stepName = FORM_STEPS[currentStep].component.name
    if (validateStep(stepName)) {
      updateFormData(form.getValues())
      setStep(currentStep + 1)
    } else {
      toast({
        title: "Please fill in required fields",
        description: "Some required information is missing.",
        variant: "destructive",
      })
    }
  }

  const previousStep = () => {
    setStep(currentStep - 1)
  }

  const CurrentStepComponent = FORM_STEPS[currentStep].component

  if (isSubmissionSuccess) {
    return (
      <section className="px-[5%] relative overflow-x-hidden bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="w-[80vw] mx-auto px-4 my-16 lg:px-0 min-h-[50vh] flex flex-col items-center justify-center"
        >
          <div className="bg-white rounded-2xl shadow-large p-10 text-center w-full">
            <CheckCircle 
              className="w-20 h-20 text-green-500 mx-auto mb-6" 
              strokeWidth={1.5}
            />
            <h2 className="text-2xl font-semibold text-ma_darkBlue mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-ma_grey text-lg mb-6">
              We've received your message and will get back to you shortly to engage with you.
            </p>
            <p className="text-ma_grey">
              You can continue to navigate the Moago Africa website.
            </p>
          </div>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="px-[5%] relative overflow-x-hidden bg-gray-50">
        <motion.div 
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full mx-auto px-4 my-16 lg:px-0"
        >
        <div className="w-full bg-white rounded-2xl shadow-large hover:shadow-xlarge hover:scale-[1.01] transition-all duration-150 overflow-hidden">
            {/* Progress indicator */}
            <div className="px-6 py-3 bg-white">
            <div className="flex items-center justify-center mb-2 w-fit p-4 mx-auto">
                {FORM_STEPS.map((step, index) => (
                <div key={index} className="flex items-center">
                    <div 
                    className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300 relative",
                        {
                        "bg-ma_darkBlue scale-125": index === currentStep,
                        "border-2 border-ma_lightBlue bg-transparent": index < currentStep,
                        "border-2 border-ma_grey/30 bg-transparent": index > currentStep
                        }
                    )}
                    >
                    {index < currentStep && (
                        <svg 
                        className="absolute inset-0 w-full h-full text-ma_lightBlue"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        >
                        <polyline points="20 6 9 17 4 12" />
                        </svg>
                    )}
                    </div>
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

            <div className="p-10 pt-0">
            {/* Step header */}
            <div className="mb-6 text-center">
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
                            className="min-w-fit sm:min-w-[120px] px-6 rounded border-ma_darkBlue text-ma_darkBlue hover:bg-ma_darkBlue hover:text-white transition-colors"
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
                        disabled={!validSteps[currentStep]}
                        className={cn(
                        "min-w-fit sm:min-w-[120px] px-6 ml-auto bg-ma_darkBlue text-white rounded",
                        "hover:bg-ma_lightBlue transition-colors",
                        "disabled:opacity-50 disabled:cursor-not-allowed"
                        )}
                    >
                        Next
                    </Button>
                    ) : (
                    <Button 
                        type="submit"
                        disabled={isSubmitting || !validSteps[currentStep]}
                        className={cn(
                        "min-w-fit sm:min-w-[120px] px-6 ml-auto bg-ma_darkBlue text-white rounded",
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
      return ['predefinedChallenges', 'customChallenges']
    case 'CompanyInfoStep':
      return ['companyName', 'industry']
    case 'PersonalInfoStep':
      return ['firstName', 'lastName', 'email']
    default:
      return []
  }
}
