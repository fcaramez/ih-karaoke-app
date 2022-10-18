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
import ihLogo from "../assets/ironhack-logo.png";
import { Image } from "@chakra-ui/react";
import { getUserById } from "../firebaseFuntions/auth.firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRequest } from "../firebaseFuntions/db.firebase";
import { AuthProvider, useAuth } from "../context/auth.context";

export default function RequestForm() {
  const [songName, setSongName] = useState("");
  const [performers, setPerformers] = useState("");
  const navigate = useNavigate();
  const { currentUser } = useAuth(AuthProvider);

  /* const getName = async () => {
    const name = await getUserById(currentUser.uid);
    console.log(name.name);
  }; */

  const handleRequest = async (e) => {
    try {
      const name = await getUserById(currentUser.uid);
      e.preventDefault();
      await addRequest(songName, performers, name.displayName);
      navigate("/queue");
    } catch (error) {
      console.log(error);
    }
  };

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
            <Heading fontSize={"3xl"}>Submit your request!</Heading>
          </Stack>
        </Center>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="Song Name">
              <FormLabel>Song Name</FormLabel>
              <Input
                type="text"
                onChange={(e) => setSongName(e.target.value)}
              />
            </FormControl>
            <FormControl id="performers">
              <FormLabel>Performers </FormLabel>
              <Input
                type="text"
                onChange={(e) => setPerformers(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
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
                onClick={(e) => handleRequest(e)}>
                Submit Request!
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
