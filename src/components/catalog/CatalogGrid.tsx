'use client'

import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'

import { StoryCard } from './StoryCard'
import type { StoryPreview } from './types'

export interface CatalogGridProps {
  stories: StoryPreview[]
  onOpen?: (id: string) => void
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({ stories, onOpen }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 4 }}
      gap={6}
      w="full"
      maxW={{ base: '320px', sm: '700px', lg: '1400px' }}
      mx="auto"
      justifyItems="center"
    >
      {stories.map((story) => (
        <Box key={story.id} w="full" maxW="320px">
          <StoryCard story={story} onOpen={onOpen} />
        </Box>
      ))}
    </SimpleGrid>
  )
}
