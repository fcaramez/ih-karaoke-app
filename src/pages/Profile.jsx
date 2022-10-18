import React from "react";
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";

function StatsCard({ stat }) {
  return (
    <Stat
      _hover={{ boxShadow: "16px grey" }}
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("blue.800", "blue.500")}
      rounded={"lg"}
      cursor={"pointer"}>
      <StatNumber textAlign={"center"} fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Profile() {
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"4xl"}
        py={10}
        fontWeight={"bold"}>
        Explore our cool features!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, lg: 8 }}>
        <StatsCard stat={"Rock the Karaoke 🎤"} />
        <StatsCard stat={"Check the Queue 🕚"} />
        <StatsCard stat={"Share your experience ✨"} />
        <StatsCard stat={"Check on other Ironhackers 🚀"} />
      </SimpleGrid>
    </Box>
  );
}
