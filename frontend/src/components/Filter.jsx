import React, { useContext } from "react";
import { Select, Stack, useColorModeValue } from "@chakra-ui/react";
import { Context } from "./Context";

export default function Filter() {
  const {
    domainFilter,
    setDomainFilter,
    genderFilter,
    setGenderFilter,
    availableFilter,
    setAvailableFilter,
  } = useContext(Context);

  const selectStyle = {
    // Apply responsive width and margin
    w: ["100%", "100%", "100%", "auto"],
    mx: { base: "auto", md: "0", lg: "0" }, // Adjust the horizontal margin for responsive layout
    // Style the select options
    option: {
      bg: useColorModeValue("white", "gray.800"), // Use white background in light mode and gray in dark mode
      color: "gray.700",
      _hover: {
        bg: useColorModeValue("gray.100", "gray.700"), // Use gray.100 background in light mode and gray.700 in dark mode on hover
      },
      _selected: {
        bg: useColorModeValue("teal.500", "blue.500"), // Use teal color in light mode and blue in dark mode for selected option
        color: "white",
      },
      _focus: {
        boxShadow: "outline",
      },
    },
  };

  return (
    <Stack
      position="sticky"
      top="20px"
      mt={10}
      spacing={5}
      direction={["column", "column", "row", "row"]} // Change the direction for responsive layout
      align={["center", "center", "flex-start", "flex-start"]} // Align options for responsive layout
    >
      <Select
        {...selectStyle}
        name="domain"
        value={domainFilter}
        onChange={(e) => setDomainFilter(e.target.value)}
      >
        <option value="">Filter By Domain</option>
        <option value="Management">Management</option>
        <option value="Sales">Sales</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="IT">IT</option>
        <option value="UI Designing">UI Designing</option>
      </Select>
      <Select
        {...selectStyle}
        name="gender"
        value={genderFilter}
        onChange={(e) => setGenderFilter(e.target.value)}
      >
        <option value="">Filter By Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </Select>
      <Select
        {...selectStyle}
        name="available"
        value={availableFilter}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "true") {
            setAvailableFilter(true);
          } else if (value === "false") {
            setAvailableFilter(false);
          } else {
            setAvailableFilter("");
          }
        }}
      >
        <option value="">Filter By Availability</option>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </Select>
    </Stack>
  );
}
