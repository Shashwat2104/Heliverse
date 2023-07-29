

import React, { useContext } from "react";
import { Context } from "./Context";
import {
  Box,
  Grid,
  GridItem,
  Badge,
  Image,
  Text,
  VStack,
  Flex,
  Spinner,
  Button,
  ButtonGroup,
  Center,
  Heading,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Card() {
  const { data, loading, handleAddTeam } = useContext(Context);
  const navigate = useNavigate();

  const buttonStyle = {
    size: "sm",
    bg: "#4f3ba9",
    color: "#fff",
    _hover: { bg: "#3b49df" },
  };

  return (
    <Box minH={"100vh"} bg="#f9f9f9">
      {!loading ? (
        <>
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
            {data.data?.length <= 0 ? (
              <GridItem colSpan={4}>
                <Heading textAlign={"center"} fontSize="2xl">
                  No results found
                </Heading>
              </GridItem>
            ) : (
              data.data?.map((item) => (
                <GridItem
                  key={item._id}
                  boxShadow={"lg"}
                  borderRadius={"lg"}
                  bg="#ffffff"
                  overflow="hidden"
                  transition="all .3s ease-in-out"
                  _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
                >
                  <Box maxW="sm" p={4} h={"100%"} shadow="md">
                    <Flex
                      justifyContent={"space-evenly"}
                      alignItems={"center"}
                      flexDirection={{ base: "column", md: "row" }}
                    >
                      <VStack justifyContent={"center"} gap={5}>
                        <Image
                          src={item.avatar || "fallback-avatar.jpg"} // Use a fallback image URL here
                          objectFit={"cover"}
                          alt={`${item.first_name}`}
                          borderRadius="full"
                          boxSize="120px"
                          border="5px solid #ffffff"
                          boxShadow="lg"
                        />
                        <Badge
                          borderRadius="full"
                          px="2"
                          colorScheme="teal"
                          fontSize="sm"
                        >
                          {item.gender}
                        </Badge>
                      </VStack>
                      <Box mt={{ base: 4, md: 0 }}>
                        <Box d="flex" alignItems="baseline" mb={2}>
                          <Text
                            fontWeight="bold"
                            fontSize={{ base: "xl", md: "2xl" }}
                          >
                            {item.first_name} {item.last_name}
                          </Text>
                        </Box>
                        <Box mb={2}>
                          <Text
                            color="gray.600"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            {item.email}
                          </Text>
                        </Box>
                        <Box>
                          <Text
                            color="gray.600"
                            fontSize={{ base: "sm", md: "md" }}
                            fontWeight="semibold"
                          >
                            {item.available}
                          </Text>
                          <Text
                            color="gray.600"
                            fontSize={{ base: "sm", md: "md" }}
                          >
                            Domain: {item.domain}
                          </Text>
                        </Box>
                      </Box>
                    </Flex>
                    <Center mt={5}>
                      <ButtonGroup>
                        <Button
                          {...buttonStyle}
                          onClick={() => handleAddTeam(item)}
                        >
                          Add to Team
                        </Button>
                        <Button
                          {...buttonStyle}
                          onClick={() => navigate(`/${item._id}`)}
                        >
                          More Info
                        </Button>
                      </ButtonGroup>
                    </Center>
                  </Box>
                </GridItem>
              ))
            )}
          </Grid>
        </>
      ) : (
        <Flex minH={"90vh"} justifyContent={"center"} alignItems={"center"}>
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="#4f3ba9"
            size="xl"
          />
        </Flex>
      )}
    </Box>
  );
}
