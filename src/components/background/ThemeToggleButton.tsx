"use client";

import React from "react";
import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { Sun, Moon } from "@phosphor-icons/react";

import { useColorMode } from "@/theme/color-mode";

export const ThemeToggleButton: React.FC<IconButtonProps> = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      aria-label="Toggle theme"
      onClick={toggleColorMode}
      variant="plain"
      size="sm"
      minH={10}
      minW={10}
      borderRadius="full"
      {...props}
    >
      {isDark ? <Sun weight="bold" /> : <Moon weight="bold" />}
    </IconButton>
  );
};

export default ThemeToggleButton;
