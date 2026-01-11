"use client";

import React, { useMemo } from "react";
import NextLink from "next/link";
import { useTranslations } from "next-intl";
import {
  Box,
  Container,
  Flex,
  HStack,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/react";
import { AuthButtons } from "../Auth/AuthButtons";
import ThemeToggleButton from "@/components/background/ThemeToggleButton";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  const t = useTranslations("Landing.Header");

  const navItems = useMemo(
    () => [
      { href: "#how", label: t("nav.howItWorks") },
      { href: "#catalog-cards", label: t("nav.catalog") },
      { href: "#pricing-plans", label: t("nav.pricing") },
      { href: "#reviews", label: t("nav.reviews") },
    ],
    [t]
  );

  return (
    <Box
      as="header"
      position="fixed"
      top={0}
      left={0}
      right={0}
      w="full"
      zIndex="sticky"
      bg="transparent"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }} mx="auto">
        <Flex align="center" py={4} gap={4} className={styles.shell}>
          <Box flex="1" minW="fit-content">
            <ChakraLink
              as={NextLink}
              href="/"
              _hover={{ textDecoration: "none" }}
            >
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                fontWeight="800"
                lineHeight="1"
                letterSpacing="-0.02em"
                color="button.solid.bg"
              >
                {t("logo")}
              </Text>
            </ChakraLink>
          </Box>

          <HStack
            as="nav"
            flex="2"
            justify="center"
            gap={6}
            display={{ base: "none", md: "flex" }}
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                href={item.href}
                fontSize="sm"
                fontWeight="600"
                opacity={0.9}
                className={styles.navLink}
                _hover={{ opacity: 1, textDecoration: "none" }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack flex="1" justify="flex-end" gap={2}>
            <AuthButtons variant="header" />
            <ThemeToggleButton aria-label={t("actions.toggleTheme")} ml={2} />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};
