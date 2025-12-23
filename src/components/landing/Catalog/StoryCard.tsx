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
import styles from './StoryCard.module.css'

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
      className={styles.card}
    >
      <Box p={4}>
        <Flex justify="space-between" align="center" mb={3}>
          <Box
            px={3}
            py={1}
            borderWidth="1px"
            borderRadius="full"
            fontSize="xs"
            fontWeight="700"
            lineHeight="1"
            letterSpacing="0.02em"
            className={styles.ageBadge}
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
            className={styles.subtitleClamp}
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

            <Button
              size="sm"
              variant="outline"
              px={5}
              minH={10}
              borderRadius="full"
              onClick={handleOpen}
            >
              {t('card.open')}
            </Button>
          </Flex>
        </Stack>
      </Box>
    </Box>
  )
}
