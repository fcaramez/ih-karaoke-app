import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import GoogleButton from "react-google-button";
import ihLogo from "../assets/ironhack-logo.png";
import { Image } from "@chakra-ui/react";
import {
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebaseFuntions/auth.firebase";
import { useState } from "react";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
            <Heading fontSize={"4xl"}>Sign up for Karaoke!🎤</Heading>
          </Stack>
        </Center>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>Username</FormLabel>
              <Input type="text" onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}>
                <Center>
                  <Link color={"blue.400"}>Already have an account?</Link>
                </Center>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  registerWithEmailAndPassword(name, email, password);
                }}>
                Sign up
              </Button>
              <GoogleButton
                onClick={() => signInWithGoogle()}
                style={{ width: "100%" }}></GoogleButton>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
