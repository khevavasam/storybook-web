'use client'

import React from 'react'
import { Box, SimpleGrid } from '@chakra-ui/react'
import type { SimpleGridProps } from '@chakra-ui/react'

import { StoryCard } from '../landing/Catalog/StoryCard'
import type { StoryPreview } from '../landing/Catalog/types'

export interface CatalogGridProps {
  stories: StoryPreview[]
  onOpen?: (id: string) => void
  columns?: SimpleGridProps['columns']
  gap?: SimpleGridProps['gap']
  cardMaxW?: SimpleGridProps['maxW']
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  stories,
  onOpen,
  columns = { base: 1, sm: 2, lg: 4 },
  gap = 6,
  cardMaxW,
}) => {
  return (
    <SimpleGrid columns={columns} gap={gap} w="full" maxW={cardMaxW}>
      {stories.map((story) => (
        <Box key={story.id} w="full">
          <StoryCard story={story} onOpen={onOpen} />
        </Box>
      ))}
    </SimpleGrid>
  )
}
