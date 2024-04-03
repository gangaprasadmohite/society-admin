"use client";

import React, { useState } from "react";
import { Button, CircularProgress } from "@mui/joy";

export default function StyledButton({
  label = "",
  onClick = null,
  icon = null,
  disabled = false,
  size = "md",
  sx = null,
  isLoading = false,
  isApiCallInvolved = false,
  color = "primary",
  variant = "soft",
}) {
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  const handleDebouncedApiCall = () => {
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    setDebounceTimeout(
      setTimeout(() => {
        onClick();
      }, 1000)
    );
  };

  const handleClick = () => {
    if (isApiCallInvolved) {
      handleDebouncedApiCall();
    } else {
      onClick();
    }
  };

  return (
    <Button
      variant={variant}
      onClick={handleClick}
      startDecorator={icon}
      disabled={isLoading || disabled}
      size={size}
      color={color}
      sx={{ ...sx }}
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : label}
    </Button>
  );
}
