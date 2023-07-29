// import {
//   Container,
//   Box,
//   Heading,
//   Flex,
//   FormControl,
//   FormLabel,
//   Input,
//   Select,
//   useToast,
//   Button,
// } from "@chakra-ui/react";
// import { useContext, useState } from "react";
// import { Context } from "./Context";

// const CreateUser = () => {
//   const toast = useToast();
//   const { formData, setformData, handleSubmit } = useContext(Context);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformData((pre) => ({ ...pre, [name]: value.trim() }));
//   };

//   const formFunc = (e) => {
//     handleSubmit(e)
//       .then((res) => {
//         if (res.data.msg == "email is already registered") {
//           return toast({
//             title: `${res.data.msg}`,
//             status: "error",
//             isClosable: true,
//             duration: 1000,
//           });
//         } else {
//           return toast({
//             title: `${res.data.msg}`,
//             duration: 1000,
//             status: "success",
//             isClosable: true,
//           });
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <Container maxW="5xl" p={{ base: 5, md: 10 }}>
//       <Heading
//         as="h3"
//         size="lg"
//         mb={["5", "5", "5", "10"]}
//         fontWeight="bold"
//         textAlign="center">
//         Fill Details
//       </Heading>
//       <Box mb={{ base: "2.5rem", lg: "4rem" }}>
//         <form onSubmit={formFunc}>
//           <Flex
//             justifyContent={"center"}
//             gap={5}
//             flexWrap={"wrap"}
//             justify="start"
//             alignItems="center"
//             flexDirection={{ base: "column", lg: "row" }}>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 First Name
//               </FormLabel>
//               <Input
//                 isRequired
//                 name="first_name"
//                 value={formData.first_name}
//                 onChange={handleChange}
//                 type="text"
//                 placeholder="First name"
//               />
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Last Name
//               </FormLabel>
//               <Input
//                 isRequired
//                 name="last_name"
//                 value={formData.last_name}
//                 onChange={handleChange}
//                 placeholder="Last Name"
//               />
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Email
//               </FormLabel>
//               <Input
//                 isRequired
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 type="email"
//                 placeholder="Email"
//               />
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Gender
//               </FormLabel>
//               <Select
//                 isRequired
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </Select>
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Avatar
//               </FormLabel>
//               <Input
//                 isRequired
//                 name="avatar"
//                 value={formData.avatar}
//                 onChange={handleChange}
//                 type="url"
//                 placeholder="Avatar"
//               />
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Domain
//               </FormLabel>
//               <Select
//                 isRequired
//                 name="domain"
//                 value={formData.domain}
//                 onChange={handleChange}>
//                 <option value="Sales">Sales</option>
//                 <option value="Finance">Finance</option>
//                 <option value="Marketing">Marketing</option>
//                 <option value="IT">IT</option>
//                 <option value="Management">Management</option>
//               </Select>
//             </FormControl>
//             <FormControl
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               <FormLabel fontSize="0.75rem" fontWeight="bold">
//                 Available
//               </FormLabel>
//               <Select
//                 isRequired
//                 name="available"
//                 value={formData.available}
//                 onChange={handleChange}>
//                 <option value={true}>Yes</option>
//                 <option value={false}>No</option>
//               </Select>
//             </FormControl>
//             <Button
//               type="submit"
//               mt={6}
//               width={{ base: "100%", lg: 1 / 3 }}
//               pr={{ lg: "2" }}
//               mb={{ base: "4", lg: "0" }}>
//               Submit
//             </Button>
//           </Flex>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default CreateUser;


import {
  chakra,
  Container,
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  useToast,
  Button,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { Context } from "./Context";

const StyledFormLabel = chakra(FormLabel, {
  baseStyle: {
    fontSize: "1rem",
    fontWeight: "bold",
    color: "teal.500", // Custom label color
  },
});


const StyledFormControl = chakra(FormControl, {
  baseStyle: {
    mb: { base: 4, lg: 0 },
  },
});

const StyledInput = chakra(Input, {
  baseStyle: {
    borderRadius: "md",
    borderColor: "teal.300", // Custom input border color
    _hover: {
      borderColor: "teal.500", // Custom input border color on hover
    },
    _focus: {
      borderColor: "teal.500", // Custom input border color on focus
      boxShadow: "0 0 0 1px teal.500", // Custom input focus box shadow
    },
  },
});

const StyledSelect = chakra(Select, {
  baseStyle: {
    borderRadius: "md",
    borderColor: "teal.300", // Custom select border color
    _hover: {
      borderColor: "teal.500", // Custom select border color on hover
    },
    _focus: {
      borderColor: "teal.500", // Custom select border color on focus
      boxShadow: "0 0 0 1px teal.500", // Custom select focus box shadow
    },
  },
});


const StyledButton = chakra(Button, {
  baseStyle: {
    mt: 6,
    width: { base: "100%", lg: "1/3" },
    pr: { lg: "2" },
    mb: { base: "4", lg: "0" },
    borderRadius: "md",
    backgroundColor: "teal.500", // Custom button background color
    color: "white", // Custom button text color
    _hover: {
      backgroundColor: "teal.600", // Custom button background color on hover
    },
    _focus: {
      boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Custom button focus box shadow
    },
  },
});





















const CreateUser = () => {
  const toast = useToast();
  const { formData, setformData, handleSubmit } = useContext(Context);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((pre) => ({ ...pre, [name]: value.trim() }));
  };

  const formFunc = (e) => {
    handleSubmit(e)
      .then((res) => {
        if (res.data.msg === "email is already registered") {
          return toast({
            title: res.data.msg,
            status: "error",
            isClosable: true,
            duration: 1000,
          });
        } else {
          return toast({
            title: res.data.msg,
            duration: 1000,
            status: "success",
            isClosable: true,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Heading
        as="h3"
        size="lg"
        mb={["5", "5", "5", "10"]}
        fontWeight="bold"
        textAlign="center"
      >
        Fill Details
      </Heading>
      <Box mb={{ base: "2.5rem", lg: "4rem" }}>
        <form onSubmit={formFunc}>
          <Flex
            justifyContent={"center"}
            gap={5}
            flexWrap={"wrap"}
            justify="start"
            alignItems="center"
            flexDirection={{ base: "column", lg: "row" }}
          >
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>First Name</StyledFormLabel>
              <StyledInput
                isRequired
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                type="text"
                placeholder="First name"
              />
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Last Name</StyledFormLabel>
              <StyledInput
                isRequired
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Email</StyledFormLabel>
              <StyledInput
                isRequired
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="Email"
              />
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Gender</StyledFormLabel>
              <StyledSelect
                isRequired
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </StyledSelect>
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Avatar</StyledFormLabel>
              <StyledInput
                isRequired
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
                type="url"
                placeholder="Avatar"
              />
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Domain</StyledFormLabel>
              <StyledSelect
                isRequired
                name="domain"
                value={formData.domain}
                onChange={handleChange}
              >
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
                <option value="IT">IT</option>
                <option value="Management">Management</option>
              </StyledSelect>
            </StyledFormControl>
            <StyledFormControl
              width={{ base: "100%", lg: 1 / 3 }}
              pr={{ lg: "2" }}
            >
              <StyledFormLabel>Available</StyledFormLabel>
              <StyledSelect
                isRequired
                name="available"
                value={formData.available}
                onChange={handleChange}
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </StyledSelect>
            </StyledFormControl>
            <StyledButton type="submit">Submit</StyledButton>
          </Flex>
        </form>
      </Box>
    </Container>
  );
};

export default CreateUser;

