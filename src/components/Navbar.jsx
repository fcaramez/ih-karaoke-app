import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Center,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import ihLogo from "../assets/ironhack-logo.png";
import { useAuth, AuthProvider } from "../context/auth.context";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentUser, logOutUser } = useAuth(AuthProvider);
  const navigate = useNavigate();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Center>
              <Image
                onClick={() => navigate("/")}
                src={ihLogo}
                style={{
                  maxWidth: "15%",
                  maxHeight: "15%",
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                alt="ironhack logo"></Image>
            </Center>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              <Button onClick={() => navigate("/queue")}>Queue</Button>
              <Button onClick={() => navigate("/feed")}>Feed</Button>
              <Button onClick={() => logOutUser()}>Logout</Button>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                onClick={() => navigate("/profile")}
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}>
                {currentUser && (
                  <Avatar size={"sm"} src={currentUser.photoURL} />
                )}
              </MenuButton>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Button onClick={() => navigate("/queue")}>Queue</Button>
              <Button onClick={() => navigate("/feed")}>Feed</Button>
              <Button onClick={() => logOutUser()}>Logout</Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
