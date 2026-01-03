"use client"

import { useState } from "react"
import { UseFormReturn } from "react-hook-form"
import { ContactFormData, DROPDOWN_CHALLENGES } from "@/lib/schemas/contact-form-schema"
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl,
  FormMessage 
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface ChallengesStepProps {
  form: UseFormReturn<ContactFormData>
}

export function ChallengesStep({ form }: ChallengesStepProps) {
  const [openMap, setOpenMap] = useState<Record<string, boolean>>({})
  const selectedChallenges = form.watch("predefinedChallenges") || []

  const getSelectedCount = (challenges: string[]) =>
    challenges.filter((challenge) => selectedChallenges.includes(challenge)).length

  return (
    <div className="space-y-6 mx-auto">
      <FormField
        control={form.control}
        name="predefinedChallenges"
        render={() => (
          <FormItem>
            <FormLabel className="text-ma_darkBlue/60">
              Select Your Challenges <span className="text-red-500">*</span>
            </FormLabel>
            <p className="text-sm text-ma_grey/80 mt-1">Expand a category to see and select relevant challenges.</p>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
              {DROPDOWN_CHALLENGES.map(({ category, challenges, impact }) => {
                const isOpen = !!openMap[category]
                const selectedCount = getSelectedCount(challenges)

                return (
                  <Popover
                    key={category}
                    open={isOpen}
                    onOpenChange={(open) => setOpenMap((prev) => ({ ...prev, [category]: open }))}
                  >
                    <div className="border border-ma_grey/15 rounded-xl bg-white shadow-sm transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-ma_lightBlue/60">
                      <PopoverTrigger asChild>
                        <button
                          type="button"
                          className="flex w-full h-full items-center justify-between gap-3 p-4 text-left"
                          aria-expanded={isOpen}
                        >
                          <div className="space-y-1">
                            <h4 className="font-medium text-ma_darkBlue text-sm leading-snug">{category}</h4>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            {selectedCount > 0 && (
                              <span className="rounded-full border border-green-700 bg-green-500/15 px-3 py-1 text-xs text-green-800">
                                {selectedCount} selected
                              </span>
                            )}
                            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                              <ChevronDown className="h-4 w-4 text-ma_grey/80" aria-hidden="true" />
                            </motion.div>
                          </div>
                        </button>
                      </PopoverTrigger>

                      <PopoverContent className="w-[340px] max-w-[85vw] border-ma_grey/15 bg-white shadow-md">
                        <div className="space-y-2">
                          {challenges.map((challenge) => (
                            <FormField
                              key={challenge}
                              control={form.control}
                              name="predefinedChallenges"
                              render={({ field }) => (
                                <FormItem className="flex items-start space-x-3 space-y-0 rounded-lg border border-ma_grey/20 bg-slate-50/70 px-3 py-2 hover:border-ma_lightBlue/60">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(challenge)}
                                      onCheckedChange={(checked) => {
                                        const value = field.value || []
                                        if (checked) {
                                          field.onChange([...value, challenge])
                                        } else {
                                          field.onChange(value.filter((v) => v !== challenge))
                                        }
                                      }}
                                      className="translate-y-[2px] rounded-[2px]"
                                    />
                                  </FormControl>
                                  <FormLabel className="flex-1 cursor-pointer text-sm font-normal leading-snug">
                                    {challenge}
                                  </FormLabel>
                                </FormItem>
                              )}
                            />
                          ))}
                        </div>
                      </PopoverContent>
                    </div>
                  </Popover>
                )
              })}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="customChallenges"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Other Challenges (Optional)</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Please describe any other challenges your organization is facing..."
                className="min-h-[50px] max-w-lg resize-none rounded-lg"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  )
}
