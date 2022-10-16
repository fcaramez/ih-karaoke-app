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
  Text,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import ihLogo from "../assets/ironhack-logo.png";
import { Image } from "@chakra-ui/react";
import {
  logInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebaseFuntions/auth.firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 

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
            <Heading fontSize={"3xl"}>Login for Karaoke!🎤</Heading>
          </Stack>
        </Center>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
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
                <Stack>
                  <Link
                    color={"blue.400"}
                    onClick={() => navigate("/reset-password")}>
                    Forgot password?
                  </Link>
                </Stack>
              </Stack>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={() => {
                  logInWithEmailAndPassword(email, password);
                }}>
                Login
              </Button>
              <Button
                onClick={() => signInWithGoogle()}
                w={"full"}
                variant={"outline"}
                leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
