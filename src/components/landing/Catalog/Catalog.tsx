"use client";

import React, { useCallback, useMemo, useState } from "react";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Link as ChakraLink,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";

import { mockStories } from "../../catalog/mockStories";
import { StoryCard } from "../../catalog";
import type { StoryPreview } from "../../catalog/types";
import styles from "./Catalog.module.css";

type LanguageFilter = "ALL" | string;

export const Catalog: React.FC = () => {
  const t = useTranslations("Landing.Catalog");
  const [language, setLanguage] = useState<LanguageFilter>("ALL");

  const stories: StoryPreview[] = mockStories;

  const filteredStories = useMemo(() => {
    if (language === "ALL") return stories;
    return stories.filter((s) => s.language === language);
  }, [language, stories]);

  const languageOptions = useMemo(
    () => [
      { value: "ALL" as const, label: t("filters.all") },
      { value: "FI" as const, label: "FI" },
      { value: "EN" as const, label: "EN" },
      { value: "SV" as const, label: "SV" },
    ],
    [t]
  );

  const handleOpenStory = useCallback((id: string) => {
    console.log("Open story:", id);
  }, []);

  return (
    <Box
      as="section"
      id="catalog"
      py={{ base: 16, md: 24 }}
      scrollMarginTop="88px"
    >
      <Container
        maxW="6xl"
        px={{ base: 4, md: 6 }}
        mx="auto"
        className={styles.shell}
      >
        <Stack gap={10}>
          <Stack gap={3} textAlign="center">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "3xl" }}
              lineHeight="1.05"
              letterSpacing="-0.02em"
              color="primary.default"
            >
              {t("title")}
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="fg.muted"
              maxW="2xl"
              mx="auto"
            >
              {t("subtitle")}
            </Text>
          </Stack>

          <Flex justify="center">
            <HStack
              gap={2}
              borderWidth="1px"
              borderRadius="full"
              p={1}
              overflowX="auto"
            >
              {languageOptions.map((opt) => {
                const isActive = opt.value === language;

                return (
                  <Button
                    key={opt.value}
                    size="sm"
                    borderRadius="full"
                    variant={isActive ? "solid" : "ghost"}
                    onClick={() => setLanguage(opt.value)}
                  >
                    {opt.label}
                  </Button>
                );
              })}
            </HStack>
          </Flex>

          <Box id="catalog-cards" scrollMarginTop="88px">
            <SimpleGrid
              minChildWidth={{ base: "16rem", md: "18rem" }}
              gap={6}
              w="full"
              maxW={{ base: "640px", md: "1400px" }}
              mx="auto"
              justifyItems="center"
            >
              {filteredStories.slice(0, 4).map((story) => (
                <Box
                  key={story.id}
                  w="full"
                  maxW="20rem"
                  display="flex"
                  h="96"
                  alignItems="stretch"
                >
                  <StoryCard
                    story={story}
                    onOpen={handleOpenStory}
                    size="default"
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Box>
 
          <Flex justify="center">
            <ChakraLink
              as={NextLink}
              href="/catalog"
              _hover={{ textDecoration: "none" }}
            >
              <Button
                size="lg"
                variant="solid"
                borderRadius="full"
                px={7}
                minH={12}
                className={styles.cta}
              >
                {t("actions.viewCatalog")}
              </Button>
            </ChakraLink>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};
