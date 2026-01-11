"use client";

import React from "react";
import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import type { StoryPreview } from "./types";
import styles from "./StoryCard.module.css";

type Labels = {
  readButton?: string;
  minutesLabel?: (m?: number) => string;
};

export function StoryCard({
  story,
  labels,
  onOpen,
  size = "default",
}: {
  story: StoryPreview;
  labels?: Labels;
  onOpen?: (id: string) => void;
  size?: "compact" | "default" | "large";
}) {
  const { title, subtitle, imageSrc, imageAlt, minutes, ageLabel } = story;

  const minutesText =
    labels?.minutesLabel?.(minutes) ?? (minutes ? `${minutes} min` : undefined);

  return (
    <Box
      borderWidth="1px"
      borderRadius="2xl"
      overflow="hidden"
      bg="chakra-body-bg"
      className={styles.card}
      w="full"
      display="flex"
      minH={
        size === "compact"
          ? { base: "64", md: "72" }
          : size === "large"
          ? { base: "96", md: "112" }
          : { base: "80", md: "96" }
      }
      flexDir="column"
    >
      <Box
        p={4}
        flex="1"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        overflow="hidden"
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          {ageLabel ? (
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
              {ageLabel}
            </Box>
          ) : (
            <Box />
          )}

          <Text fontSize="sm" color="fg.muted">
            {minutesText}
          </Text>
        </Box>

        <AspectRatio ratio={4 / 3} flex="0 0 auto">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt ?? title}
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
                {"No image"}
              </Text>
            </Box>
          )}
        </AspectRatio>

        <Stack
          spacing={2}
          mt={4}
          flex="1"
          justify="space-between"
          overflow="hidden"
        >
          <Heading size="sm" lineHeight="short">
            {title}
          </Heading>

          {subtitle ? (
            <Text
              fontSize="sm"
              color="fg.muted"
              className={styles.subtitleClamp}
            >
              {subtitle}
            </Text>
          ) : null}

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pt={2}
          >
            <HStack spacing={2}>{/* placeholder for tags */}</HStack>

            <Button
              size="sm"
              variant="outline"
              px={5}
              minH={10}
              borderRadius="full"
              onClick={() => onOpen?.(story.id)}
            >
              {labels?.readButton ?? "Open"}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default StoryCard;
