
import React, { useContext } from "react";
import Card from "../components/Card";
import { Box, Flex } from "@chakra-ui/react";
import { Context } from "../components/Context";
import Pagination_button from "../components/Pagination_button";
import Filter from "../components/Filter";

export default function Homepage() {
  const { searchValue } = useContext(Context);

  // Add custom styles
  const containerStyle = {
    // Apply responsive flex layout
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
  };

  const filterBoxStyle = {
    flex: ["0 0 100%", "0 0 100%", "0 0 100%", "0 0 25%"], // Adjust the width for responsive layout
    // Add box shadow and padding
    boxShadow: "lg",
    p: "20px",
    borderRadius: "md",
    // Add beautiful background color
    bg: "teal.100",
  };

  const cardBoxStyle = {
    flex: ["0 0 100%", "0 0 100%", "0 0 100%", "0 0 75%"], // Adjust the width for responsive layout
    // Add box shadow and padding
    boxShadow: "lg",
    p: "20px",
    borderRadius: "md",
    // Add beautiful background color
    bg: "white",
  };

  return (
    <Box>
      {searchValue ? (
        <Card />
      ) : (
        <Box
          display={["block", "block", "block", "flex"]}
          style={containerStyle}
        >
          <Box style={filterBoxStyle}>
            <Filter />
          </Box>
          <Box style={cardBoxStyle}>
            <Card />
            <Pagination_button />
          </Box>
        </Box>
      )}
    </Box>
  );
}

