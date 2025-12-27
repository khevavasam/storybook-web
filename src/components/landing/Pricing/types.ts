export type PlanFeature = {
    id: string
    label: string
    included: boolean
    value?: string
}

export type Plan = {
    id: string
    name: string
    price: { amount: string; period: string }
    subPriceText: string
    badges: string[]
    rpsLabel: string
    rps: number
    features: PlanFeature[]
    cta: string
    highlighted?: boolean
}
