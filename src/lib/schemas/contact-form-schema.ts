import { z } from "zod"

export const contactFormSchema = z.object({
  // Challenges
  predefinedChallenges: z.array(z.string()).min(1, "Please select at least one challenge"),
  customChallenges: z.string().optional(),
  
  // Company Info
  companyName: z.string().min(1, "Company name is required"),
  industry: z.string().min(1, "Industry is required"),
  sector: z.string().min(1, "Sector is required"),
  jobTitle: z.string().optional(),
  companySize: z.string().optional(),
  
  // Personal Info
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const INDUSTRY_OPTIONS = [
  { label: "Manufacturing", value: "manufacturing" },
  { label: "Healthcare", value: "healthcare" },
  { label: "Education", value: "education" },
    { label: "Technology", value: "technology" },
  { label: "Construction", value: "construction" },
  { label: "Transportation", value: "transportation" },
  { label: "Other", value: "other" },
]

export const COMPANY_SIZE_OPTIONS = [
  { label: "1-10 employees", value: "1-10" },
  { label: "11-50 employees", value: "11-50" },
  { label: "51-200 employees", value: "51-200" },
  { label: "201-500 employees", value: "201-500" },
  { label: "501+ employees", value: "501+" },
]

export const PREDEFINED_CHALLENGES = [
  "No fixed or movable asset register",
  "Outdated fixed asset register",
  "Outdated equipment asset register",
  "Use of various spreadsheets to account for assets",
  "Poor maintenance history records for equipment",
  "Unknown asset condition",
  "Misinformed Functional Performance Index outcomes",
  "Unverified asset location and details",
  "Outdated OHS compliance checklist",
  "Duplication of work orders",
  "Poor maintenance plan",
  "Misinformed or outdated maintenance priority list",
  "Delayed or reactive maintenance work"
]

export const SECTOR_OPTIONS = [
  { label: "Government", value: "government" },
  { label: "Private", value: "private" },
  { label: "State Entity", value: "state-entity" },
]
