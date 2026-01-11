"use client";

import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

import { StoryCard } from "./StoryCard";
import type { StoryPreview } from "./types";

export interface CatalogGridProps {
  stories: StoryPreview[];
  onOpen?: (id: string) => void;
}

export const CatalogGrid: React.FC<CatalogGridProps> = ({
  stories,
  onOpen,
}) => {
  return (
    <SimpleGrid
      minChildWidth={{ base: "16rem", md: "18rem" }}
      gap={6}
      w="full"
      maxW={{ base: "640px", md: "1400px" }}
      mx="auto"
      justifyItems="center"
    >
      {stories.map((story) => (
        <Box
          key={story.id}
          w="full"
          maxW="20rem"
          display="flex"
          alignItems="stretch"
        >
          <StoryCard story={story} onOpen={onOpen} size="default" />
        </Box>
      ))}
    </SimpleGrid>
  );
};
