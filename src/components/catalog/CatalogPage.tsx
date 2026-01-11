"use client";

import NextLink from "next/link";
import { useTranslations } from "next-intl";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link as ChakraLink,
  Stack,
} from "@chakra-ui/react";

import { CatalogGrid } from "./CatalogGrid";
import type { StoryPreview } from "../landing/Catalog/types";
import ThemeToggleButton from "@/components/background/ThemeToggleButton";

export interface CatalogPageProps {
  stories: StoryPreview[];
}

export function CatalogPage({ stories }: CatalogPageProps) {
  const t = useTranslations("CatalogPage");

  return (
    <Box as="main" py={{ base: 8, md: 12 }}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Stack gap={{ base: 6, md: 8 }}>
          <Flex
            align={{ base: "stretch", md: "center" }}
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            gap={{ base: 3, md: 4 }}
          >
            <Heading
              as="h1"
              size={{ base: "xl", md: "2xl" }}
              color="primary.default"
              textAlign={{ base: "center", md: "left" }}
            >
              {t("title")}
            </Heading>

            <Stack direction="row" gap={3} align="center">
              <ChakraLink
                as={NextLink}
                href="/profile"
                _hover={{ textDecoration: "none" }}
                alignSelf={{ base: "center", md: "auto" }}
              >
                <Button variant="outline" borderRadius="full" px={6}>
                  {t("actions.backHome")}
                </Button>
              </ChakraLink>

              <ThemeToggleButton aria-label={t("actions.toggleTheme")} />
            </Stack>
          </Flex>

          <CatalogGrid stories={stories} />
        </Stack>
      </Container>
    </Box>
  );
}
