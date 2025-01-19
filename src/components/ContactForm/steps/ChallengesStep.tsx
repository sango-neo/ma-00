"use client"

import { UseFormReturn } from "react-hook-form"
import { ContactFormData, PREDEFINED_CHALLENGES } from "@/lib/schemas/contact-form-schema"
import { 
  FormField, 
  FormItem, 
  FormLabel, 
  FormControl,
  FormMessage 
} from "@/components/ui/form"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface ChallengesStepProps {
  form: UseFormReturn<ContactFormData>
}

export function ChallengesStep({ form }: ChallengesStepProps) {
  return (
    <div className="space-y-6">
      <FormField
        control={form.control}
        name="predefinedChallenges"
        render={() => (
          <FormItem>
            <FormLabel>
              Select Your Challenges <span className="text-red-500">*</span>
            </FormLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {PREDEFINED_CHALLENGES.map((challenge) => (
                <FormField
                  key={challenge}
                  control={form.control}
                  name="predefinedChallenges"
                  render={({ field }) => (
                    <FormItem
                      key={challenge}
                      className={cn(
                        "flex items-center space-x-3 space-y-0",
                        "p-4 rounded-xl border border-ma_grey/20",
                        "hover:border-ma_lightBlue/50 transition-colors",
                        "bg-white hover:bg-slate-50/50"
                      )}
                    >
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
                          className="translate-y-[1px]"
                        />
                      </FormControl>
                      <FormLabel className="font-normal text-sm leading-tight cursor-pointer pt-0 flex-1">
                        {challenge}
                      </FormLabel>
                    </FormItem>
                  )}
                />
              ))}
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
                className="min-h-[100px] resize-none rounded-2xl"
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
