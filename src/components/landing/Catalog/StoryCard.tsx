'use client'

import React, { useCallback } from 'react'
import {
  AspectRatio,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useTranslations } from 'next-intl'

import type { StoryLanguage, StoryPreview } from './types'

export interface StoryCardProps {
  story: StoryPreview
  onOpen?: (id: string) => void
}

export const StoryCard: React.FC<StoryCardProps> = ({ story, onOpen }) => {
  const t = useTranslations('Landing.Catalog')

  const handleOpen = useCallback(() => {
    onOpen?.(story.id)
  }, [onOpen, story.id])

  const languageLabel = (lang: StoryLanguage) => lang

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      bg="chakra-body-bg"
      transition="transform 180ms ease"
      _hover={{ transform: 'translateY(-2px)' }}
    >
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={3}>
          <Box
            borderWidth="1px"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
            fontWeight="700"
            opacity={0.95}
          >
            {story.ageLabel}
          </Box>

          <Text fontSize="sm" color="fg.muted">
            {t('card.minutes', { minutes: story.minutes })}
          </Text>
        </Flex>

        <AspectRatio ratio={4 / 3}>
          {story.imageSrc ? (
            <Image
              src={story.imageSrc}
              alt={story.imageAlt ?? t('card.defaultAlt')}
              objectFit="cover"
              borderRadius="xl"
            />
          ) : (
            <Box
              borderRadius="xl"
              bgGradient="linear(to-br, blackAlpha.300, blackAlpha.50)"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="sm" color="fg.muted">
                {t('card.placeholder')}
              </Text>
            </Box>
          )}
        </AspectRatio>

        <Stack gap={2} mt={4}>
          <Text fontSize="lg" fontWeight="700" lineHeight="1.2">
            {story.title}
          </Text>

          <Text
            fontSize="sm"
            color="fg.muted"
            overflow="hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {story.subtitle}
          </Text>

          <Flex justify="space-between" align="center" pt={2}>
            <HStack gap={2}>
              {story.languages.map((lang) => (
                <Box
                  key={lang}
                  borderWidth="1px"
                  borderRadius="full"
                  px={2}
                  py={1}
                  fontSize="xs"
                  fontWeight="600"
                  opacity={0.9}
                >
                  {languageLabel(lang)}
                </Box>
              ))}
            </HStack>

            <Button size="sm" variant="outline" onClick={handleOpen}>
              {t('card.open')}
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}
