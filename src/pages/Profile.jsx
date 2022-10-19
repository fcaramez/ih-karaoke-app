import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

function StatsCard(props) {
  const { stat, url } = props;
  const navigate = useNavigate();
  return (
    <Stat
      onClick={() => navigate(`/${url}`)}
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("blue.800", "blue.500")}
      rounded={"lg"}
      cursor={"pointer"}
      _hover={{
        bg: "blue.500",
      }}>
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
        fontSize={"3xl"}
        py={10}
        fontWeight={"bold"}>
        Explore our cool features!
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, lg: 8 }}>
        <StatsCard
          url={"add-request"}
          stat={"Rock the Karaoke 🎤"}
        />
        <StatsCard url={"queue"} stat={"Check the Queue 🕚"} />
        <StatsCard
          url={"coming-soon"}
          stat={"Share your experience ✨ (coming soon)"}
        />
        <StatsCard
          url={"coming-soon"}
          stat={"Check on other Ironhackers 🚀 (coming soon)"}
        />
      </SimpleGrid>
    </Box>
  );
}
