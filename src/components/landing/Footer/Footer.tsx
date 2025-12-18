'use client'

import { Box, Container, Text } from '@chakra-ui/react'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <Box as="footer" className={styles.root} py={10}>
      <Container maxW="6xl" className={styles.inner}>
        <Text color="fg.muted">© {new Date().getFullYear()} Storybook. All rights reserved.</Text>
      </Container>
    </Box>
  )
}


