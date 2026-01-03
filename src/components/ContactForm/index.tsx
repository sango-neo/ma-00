"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormStore } from "@/store/form-store"
import { contactFormSchema, type ContactFormData, DROPDOWN_CHALLENGES } from "@/lib/schemas/contact-form-schema"
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
  const { formData, currentStep, validSteps, updateFormData, setStep, resetForm } = useFormStore()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmissionSuccess, setIsSubmissionSuccess] = useState(false)
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null)
  const [submittedChallenges, setSubmittedChallenges] = useState<
    { category: string; challenges: string[]; impact: string }[]
  >([])
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

  useEffect(() => {
    // Validate current step whenever it changes
    const stepName = FORM_STEPS[currentStep].component.name
    const isValid = validateStep(stepName)
    useFormStore.getState().setStepValidity(currentStep, isValid)
  }, [currentStep])

  const buildChallengeSummary = (selected: string[]) =>
    DROPDOWN_CHALLENGES.map((group) => {
      const chosen = group.challenges.filter((c) => selected.includes(c))
      return { category: group.category, challenges: chosen, impact: group.impact }
    }).filter((entry) => entry.challenges.length > 0)

  const onSubmit = async (data: ContactFormData) => {
    const challengeSummary = buildChallengeSummary(data.predefinedChallenges || [])
    const payload = {
      ...data,
      challengeImpacts: challengeSummary.map(({ category, impact, challenges }) => ({
        category,
        impact,
        challenges
      }))
    }

    try {
      setIsSubmitting(true)
      const response = await fetch('https://ma-00-api-server.vercel.app/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Form submission failed')

      toast({
        title: "Thank you for reaching out!",
        description: "We'll be in touch with you shortly to discuss your challenges.",
      })
      
      setSubmittedData(data)
      setSubmittedChallenges(challengeSummary)
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

  const nextStep = async () => {
    const stepName = FORM_STEPS[currentStep].component.name
    const isValid = validateStep(stepName)
    
    if (isValid) {
      updateFormData(form.getValues())
      setStep(currentStep + 1)
    } else {
      await form.trigger() // Trigger validation
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
          <div className="bg-white rounded-2xl shadow-large p-10 w-full space-y-8">
            <div className="text-center space-y-4">
            <CheckCircle 
              className="w-10 h-10 text-green-500 mx-auto mb-6" 
              strokeWidth={2}
            />
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-ma_darkBlue mb-2">
                Thank You for Reaching Out!
              </h2>
              <p className="text-ma_grey text-sm">
                We've received your message and will get back to you shortly to engage with you.
              </p>
            </div>
            </div>

            {submittedData && (
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3 p-4 rounded-xl border border-ma_grey/20 bg-slate-50/60">
                  <h3 className="text-ma_darkBlue font-semibold">Selected Challenges</h3>
                  <div className="space-y-3">
                    {submittedChallenges.length === 0 && (
                      <p className="text-ma_grey text-sm">No predefined challenges selected.</p>
                    )}
                    {submittedChallenges.map(({ category, challenges }) => (
                      <div key={category} className="space-y-1">
                        <p className="text-sm font-medium text-ma_darkBlue">{category}</p>
                        <ul className="list-disc list-inside text-sm text-ma_grey space-y-1">
                          {challenges.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {submittedData.customChallenges && (
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-ma_darkBlue">Other Challenges</p>
                        <p className="text-sm text-ma_grey whitespace-pre-line">{submittedData.customChallenges}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-3 p-4 rounded-xl border border-ma_grey/20 bg-slate-50/60">
                  <h3 className="text-ma_darkBlue font-semibold">Your Details</h3>
                  <div className="grid grid-cols-1 gap-2 text-sm text-ma_grey">
                    <div className="flex justify-between gap-3">
                      <span className="text-ma_darkBlue font-medium">Name</span>
                      <span className="text-right">{submittedData.firstName} {submittedData.lastName}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-ma_darkBlue font-medium">Email</span>
                      <span className="text-right">{submittedData.email}</span>
                    </div>
                    {submittedData.phone && (
                      <div className="flex justify-between gap-3">
                        <span className="text-ma_darkBlue font-medium">Phone</span>
                        <span className="text-right">{submittedData.phone}</span>
                      </div>
                    )}
                    <div className="flex justify-between gap-3">
                      <span className="text-ma_darkBlue font-medium">Company</span>
                      <span className="text-right">{submittedData.companyName}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-ma_darkBlue font-medium">Industry</span>
                      <span className="text-right capitalize">{submittedData.industry}</span>
                    </div>
                    <div className="flex justify-between gap-3">
                      <span className="text-ma_darkBlue font-medium">Sector</span>
                      <span className="text-right capitalize">{submittedData.sector}</span>
                    </div>
                    {submittedData.jobTitle && (
                      <div className="flex justify-between gap-3">
                        <span className="text-ma_darkBlue font-medium">Job Title</span>
                        <span className="text-right">{submittedData.jobTitle}</span>
                      </div>
                    )}
                    {submittedData.companySize && (
                      <div className="flex justify-between gap-3">
                        <span className="text-ma_darkBlue font-medium">Company Size</span>
                        <span className="text-right">{submittedData.companySize}</span>
                      </div>
                    )}
                    {submittedData.message && (
                      <div className="space-y-1">
                        <p className="text-ma_darkBlue font-medium">Message</p>
                        <p className="text-ma_grey text-sm whitespace-pre-line text-right">{submittedData.message}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col items-center gap-3 text-center">
              <p className="text-ma_grey">
                You can continue to navigate the Moago Africa website or start a new submission.
              </p>
              <Button 
                type="button"
                variant="outline"
                onClick={() => {
                  setSubmittedData(null)
                  setSubmittedChallenges([])
                  setIsSubmissionSuccess(false)
                  resetForm()
                  form.reset()
                  setStep(0)
                }}
              >
                Start a new submission
              </Button>
            </div>
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
        <div className="w-full bg-white rounded-2xl shadow-large hover:shadow-xlarge transition-all duration-150 overflow-hidden">
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
