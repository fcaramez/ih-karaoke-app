import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import ihLogo from "../assets/ironhack-logo.png";
import { Image } from "@chakra-ui/react";
import { sendPasswordReset } from "../firebaseFuntions/auth.firebase";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handlePasswordReset = () => {
    sendPasswordReset(email);
    setEmail("");
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}>
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
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Forgot your password?
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}>
          You&apos;ll get an email with a reset link
        </Text>
        <FormControl id="email">
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: "gray.500" }}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            onClick={() => handlePasswordReset()}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}>
            Request Reset
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
