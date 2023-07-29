





import {
  Avatar,
  Badge,
  Box,
  Center,
  Button,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function YourTeam() {
  let TeamMembers = JSON.parse(localStorage.getItem("teamMember")) || [];

  const deletefun = (id) => {
    TeamMembers = TeamMembers.filter((item) => item._id !== id);
    localStorage.setItem("teamMember", JSON.stringify(TeamMembers));
    window.location.reload();
  };

  // Add custom styles
  const gridItemStyle = {
    display: "flex",
    justifyContent: "center",
  };

  const boxStyle = {
    width: "100%",
    maxWidth: "320px",
    boxShadow: "2xl",
    borderRadius: "lg",
    px: 5,
    py: 10,
    textAlign: "center",
    bg: useColorModeValue("white", "gray.900"), // Use white background in light mode and gray in dark mode
  };

  const badgeStyle = {
    fontSize: "0.8rem",
    fontWeight: "normal",
    color: "white",
    bg: "blue.400",
    borderRadius: "md",
    py: "2px",
    px: "8px",
  };

  const deleteButtonStyle = {
    flex: 1,
    fontSize: "sm",
    rounded: "full",
    bg: "blue.400",
    color: "white",
    boxShadow:
      "0px 1px 25px -5px rgba(66, 153, 225, 0.48), 0 10px 10px -5px rgba(66, 153, 225, 0.43)",
    _hover: {
      bg: "blue.500",
    },
    _focus: {
      bg: "blue.500",
    },
  };

  return (
    <Box>
      <Grid
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(3,1fr)",
        ]}
        width={"90%"}
        py={10}
        px={5}
        gap={10}
        margin={"auto"}
      >
        {TeamMembers.length > 0 ? (
          TeamMembers?.map((item) => {
            return (
              <GridItem key={Math.random()} style={gridItemStyle}>
                <Center>
                  <Box style={boxStyle}>
                    <Avatar
                      size={"xl"}
                      src={item.avatar}
                      mb={4}
                      pos={"relative"}
                      _after={{
                        content: '""',
                        w: 4,
                        h: 4,
                        bg: "green.300",
                        border: "2px solid white",
                        rounded: "full",
                        pos: "absolute",
                        bottom: 0,
                        right: 3,
                      }}
                    />
                    <Heading fontSize={"2xl"} fontFamily={"body"}>
                      {item.first_name + " " + item.last_name}
                    </Heading>
                    <Text fontWeight={600} color={"gray.500"} mb={4}>
                      {item.email}
                    </Text>
                    <Stack>
                      <Badge {...badgeStyle}>Gender: {item.gender}</Badge>
                      <Badge {...badgeStyle}>Domain: {item.domain}</Badge>
                      <Badge {...badgeStyle}>
                        Available: {item.available ? "True" : "False"}
                      </Badge>
                    </Stack>
                    <Stack mt={8} direction={"row"} spacing={4}>
                      <Button
                        onClick={() => deletefun(item._id)}
                        {...deleteButtonStyle}
                      >
                        Delete User
                      </Button>
                    </Stack>
                  </Box>
                </Center>
              </GridItem>
            );
          })
        ) : (
          <GridItem colSpan={3} style={gridItemStyle}>
            <Heading textAlign={"center"}>No one in your Team</Heading>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
}

