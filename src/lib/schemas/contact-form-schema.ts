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

export const DROPDOWN_CHALLENGES = [
  {
    category: "1. Unreliable Asset Information & Visibility Gaps",
    challenges: [
      "Incomplete, outdated, or inaccurate asset records",
      "Lack of a centralized asset database",
      "Difficulty tracking asset location, condition, and history",
    ],
    impact: "Poor decisions, higher costs, and unplanned downtime."
  },
  {
    category: "2. Inadequate Maintenance Strategies",
    challenges: [
      "Over-reliance on reactive maintenance (fix after failure)",
      "Lack of preventive or predictive maintenance plans",
      "Maintenance schedules not based on actual asset condition",
    ],
    impact: "Frequent breakdowns, reduced asset life, safety risks."
  },
  {
    category: "3. High Maintenance and Operating Costs",
    challenges: [
      "Rising spare parts and labor costs",
      "Inefficient use of maintenance resources",
      "Long repair times due to lack of spares or skilled staff",
    ],
    impact: "Budget overruns and reduced profitability."
  },
  {
    category: "4. Asset Downtime and Reliability Issues",
    challenges: [
      "Unexpected equipment failures",
      "Emergency repairs costing more than planned maintenance",
      "Poor reliability and availability of critical assets",
    ],
    impact: "Production losses, service interruptions, customer dissatisfaction."
  },
  {
    category: "5. Lack of Skilled Personnel",
    challenges: [
      "Shortage of trained maintenance and asset management professionals",
      "Loss of knowledge due to staff turnover or retirement",
      "Insufficient training on new technologies or systems",
    ],
    impact: "Poor maintenance quality and increased failure rates."
  },
  {
    category: "6. Weak Asset Lifecycle Management",
    challenges: [
      "Focus only on acquisition, ignoring long-term costs",
      "Poor planning for asset renewal, replacement, or disposal",
      "Assets used beyond their optimal life",
    ],
    impact: "Higher total cost of ownership and safety risks."
  },
  {
    category: "7. Ineffective Use of Technology",
    challenges: [
      "Underutilization of CMMS/EAM systems",
      "Lack of condition monitoring or digital tools",
      "Poor integration between asset, finance, and operations systems",
    ],
    impact: "Limited visibility and inefficient decision-making."
  },
  {
    category: "8. Spare Parts and Inventory Issues",
    challenges: [
      "Overstocking or stock-outs of critical spares",
      "Poor forecasting of spare parts needs",
      "Obsolete or unused inventory",
    ],
    impact: "Increased downtime or tied-up capital."
  },
  {
    category: "9. Compliance, Safety, and Risk Management",
    challenges: [
      "Difficulty meeting regulatory and safety requirements",
      "Inadequate inspection and documentation",
      "Poor risk assessment of critical assets",
    ],
    impact: "Legal penalties, accidents, reputational damage."
  },
  {
    category: "10. Budget Constraints and Financial Pressure",
    challenges: [
      "Limited funds for maintenance and asset replacement",
      "Maintenance budgets cut during cost-saving efforts",
      "Difficulty justifying asset investments",
    ],
    impact: "Deferred maintenance and long-term asset degradation."
  },
  {
    category: "11. Poor Communication and Coordination",
    challenges: [
      "Lack of coordination between operations, maintenance, and finance",
      "Conflicting priorities between production and maintenance teams",
      "Unclear roles and responsibilities",
    ],
    impact: "Delays, inefficiencies, and increased failure risk."
  },
  {
    category: "12. Aging Infrastructure and Assets",
    challenges: [
      "Old equipment with declining performance",
      "Limited availability of spare parts",
      "Higher failure rates",
    ],
    impact: "Increased maintenance effort and operational risk."
  },
]

export const SECTOR_OPTIONS = [
  { label: "Government", value: "government" },
  { label: "Private", value: "private" },
  { label: "State Entity", value: "state-entity" },
]
