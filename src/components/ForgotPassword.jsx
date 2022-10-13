import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import ihLogo from "../assets/ironhack-logo.png";
import { Image } from "@chakra-ui/react";
import { sendPasswordReset } from "../firebaseFuntions/auth.firebase";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Center>
          <Stack align={"center"}>
            <Center>
              <Image
                src={ihLogo}
                style={{
                  maxWidth: "25%",
                  maxHeight: "25%",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                alt="ironhack logo"></Image>
            </Center>
            <Heading fontSize={"4xl"}>Reset your Password</Heading>
          </Stack>
        </Center>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Email</FormLabel>
              <Input type="text" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <Stack spacing={4}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}></Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  sendPasswordReset(email);
                }}>
                Send Reset Email
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
