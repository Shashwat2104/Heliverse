

import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Context } from "./Context";

export default function SingleCard() {
  const navigate = useNavigate();
  const toast = useToast();
  const { id } = useParams();
  const [object, setObject] = useState({});
  const { handleDelete } = useContext(Context);


  const boxShadowStyle = {
    boxShadow: "2xl",
  };

  const avatarBadgeStyle = {
    w: 4,
    h: 4,
    bg: "green.300",
    border: "2px solid white",
    rounded: "full",
    pos: "absolute",
    bottom: 0,
    right: 3,
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

  return (
    <Center minH={"80vh"}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        rounded={"lg"}
        p={5}
        textAlign={"center"}
        // Apply custom box shadow style
        boxShadow={boxShadowStyle}
      >
        <Avatar
          size={"xl"}
          src={object.avatar}
          mb={4}
          pos={"relative"}
          _after={avatarBadgeStyle}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {object.first_name + " " + object.last_name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {object.email}
        </Text>
        <Stack spacing={2} align="center">
          <Badge {...badgeStyle}>Gender: {object.gender}</Badge>
          <Badge {...badgeStyle}>Domain: {object.domain}</Badge>
          <Badge {...badgeStyle}>
            Available: {object.available ? "True" : "False"}
          </Badge>
        </Stack>
        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            colorScheme="blue"
            // Apply custom box shadow and transition on hover and focus
            boxShadow={{
              base: "0px 1px 25px -5px rgba(66, 153, 225, 0.48), 0 10px 10px -5px rgba(66, 153, 225, 0.43)",
              _hover:
                "0px 1px 25px -5px rgba(66, 153, 225, 0.68), 0 10px 10px -5px rgba(66, 153, 225, 0.63)",
              _focus:
                "0px 1px 25px -5px rgba(66, 153, 225, 0.68), 0 10px 10px -5px rgba(66, 153, 225, 0.63)",
            }}
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Add to Team
          </Button>
          <Button
            onClick={() => handleDelete(object._id)}
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            colorScheme="red"
            // Apply custom box shadow and transition on hover and focus
            boxShadow={{
              base: "0px 1px 25px -5px rgba(239, 68, 68, 0.48), 0 10px 10px -5px rgba(239, 68, 68, 0.43)",
              _hover:
                "0px 1px 25px -5px rgba(239, 68, 68, 0.68), 0 10px 10px -5px rgba(239, 68, 68, 0.63)",
              _focus:
                "0px 1px 25px -5px rgba(239, 68, 68, 0.68), 0 10px 10px -5px rgba(239, 68, 68, 0.63)",
            }}
            _hover={{
              bg: "red.500",
            }}
            _focus={{
              bg: "red.500",
            }}
          >
            Delete User
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}

