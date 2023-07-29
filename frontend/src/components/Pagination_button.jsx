import {
  Button,
  ButtonGroup,
  Center,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { Context } from "./Context";

export default function Pagination_button() {
  const { page, handleSetPage, data } = useContext(Context);

  // Add custom styles
  const buttonStyle = {
    color: "white",
    rounded: "md",
    bg: useColorModeValue("teal.500", "blue.500"), // Use teal color in light mode and blue in dark mode
    transition: "background-color 0.3s ease",
    _hover: {
      bg: useColorModeValue("teal.600", "blue.600"), // Use teal color in light mode and blue in dark mode on hover
    },
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    opacity: "0.7", // Reduce opacity for disabled buttons
    cursor: "not-allowed", // Change cursor for disabled buttons
    pointerEvents: "none", // Disable pointer events for disabled buttons
  };

  return (
    <Center mb={10}>
      <ButtonGroup>
        <Button
          {...buttonStyle}
          isDisabled={page <= 1}
          onClick={() => handleSetPage(-1)}
        >
          Previous
        </Button>
        <Button {...disabledButtonStyle} isDisabled>
          {page}
        </Button>
        <Button
          {...buttonStyle}
          isDisabled={data.totalPages === page}
          onClick={() => handleSetPage(1)}
        >
          Next
        </Button>
      </ButtonGroup>
    </Center>
  );
}
