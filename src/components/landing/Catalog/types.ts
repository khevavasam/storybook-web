export type StoryLanguage = 'FI' | 'EN' | 'SV'

export interface StoryPreview {
    id: string
    title: string
    subtitle: string
    ageLabel: string
    minutes: number
    languages: StoryLanguage[]
    imageSrc?: string
    imageAlt?: string
}
