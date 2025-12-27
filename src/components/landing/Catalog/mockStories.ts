import type { StoryPreview } from './types'

/**
 * TODO: replace with API call later (backend catalog endpoint).
 * These are just placeholder previews for landing.
 */
export const mockStories: StoryPreview[] = [
    {
        id: 'story-1',
        title: 'A Fox in the Moonlight',
        subtitle: 'A cozy bedtime tale about courage and curiosity.',
        ageLabel: '3+',
        minutes: 5,
        languages: ['FI', 'EN', 'SV'],
        imageSrc: '/assets/catalog/story-1.png',
        imageAlt: 'Story cover illustration',
    },
    {
        id: 'story-2',
        title: 'The Little Owl’s Journey',
        subtitle: 'A gentle adventure through the night forest.',
        ageLabel: '3+',
        minutes: 6,
        languages: ['FI', 'EN'],
        imageSrc: '/assets/catalog/story-2.png',
        imageAlt: 'Story cover illustration',
    },
    {
        id: 'story-3',
        title: 'Mushrooms and Magic',
        subtitle: 'A bright daytime story with one hero and one plot.',
        ageLabel: '4+',
        minutes: 7,
        languages: ['FI', 'EN', 'SV'],
        imageSrc: '/assets/catalog/story-3.png',
        imageAlt: 'Story cover illustration',
    },
    {
        id: 'story-4',
        title: 'Summer in the Meadow',
        subtitle: 'Warm vibes, tiny lessons, and a happy ending.',
        ageLabel: '3+',
        minutes: 5,
        languages: ['EN', 'SV'],
        imageSrc: '/assets/catalog/story-4.png',
        imageAlt: 'Story cover illustration',
    },
]
