'use client'

import React, { useCallback, useMemo } from 'react'
import NextLink from 'next/link'
import { useTranslations } from 'next-intl'
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react'
import { Moon, Sun } from '@phosphor-icons/react'

import { useColorMode } from '@/theme/color-mode'

interface HeaderProps {
  loginHref?: string
  joinHref?: string
}

export const Header: React.FC<HeaderProps> = ({
  loginHref = '/login',
  joinHref = '/join',
}) => {
  const t = useTranslations('Landing.Header')
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const navItems = useMemo(
    () => [
      { href: '#catalog', label: t('nav.catalog') },
      { href: '#how', label: t('nav.howItWorks') },
      { href: '#pricing', label: t('nav.pricing') },
      { href: '#reviews', label: t('nav.reviews') },
    ],
    [t]
  )

  const handleToggleTheme = useCallback(() => {
    toggleColorMode()
  }, [toggleColorMode])

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex="sticky"
      bg="chakra-body-bg"
    >
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <Flex align="center" py={4} gap={4}>
          <Box flex="1" minW="fit-content">
            <ChakraLink
              as={NextLink}
              href="/"
              _hover={{ textDecoration: 'none' }}
            >
              <Text fontSize="lg" fontWeight="700" lineHeight="1">
                {t('logo')}
              </Text>
            </ChakraLink>
          </Box>

          <HStack
            as="nav"
            flex="2"
            justify="center"
            gap={6}
            display={{ base: 'none', md: 'flex' }}
          >
            {navItems.map((item) => (
              <ChakraLink
                key={item.href}
                href={item.href}
                fontSize="sm"
                fontWeight="600"
                opacity={0.9}
                _hover={{ opacity: 1, textDecoration: 'none' }}
              >
                {item.label}
              </ChakraLink>
            ))}
          </HStack>

          <HStack flex="1" justify="flex-end" gap={3}>
            <ChakraLink as={NextLink} href={loginHref}>
              <Button variant="outline" size="sm">
                {t('actions.login')}
              </Button>
            </ChakraLink>

            <ChakraLink as={NextLink} href={joinHref}>
              <Button variant="solid" size="sm">
                {t('actions.join')}
              </Button>
            </ChakraLink>

            <IconButton
              aria-label={t('actions.toggleTheme')}
              onClick={handleToggleTheme}
              variant="ghost"
              size="sm"
            >
              {isDark ? <Sun weight="bold" /> : <Moon weight="bold" />}
            </IconButton>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}
