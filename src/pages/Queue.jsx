import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../firebaseFuntions/auth.firebase";
import { collection } from "firebase/firestore";
import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiMic } from "react-icons/fi";

function StatsCard(props) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}>
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={"auto"}
          color={useColorModeValue("gray.800", "gray.200")}
          alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export const Queue = () => {
  const requestsRef = collection(db, "requests");

  const [requests] = useCollectionData(requestsRef);

  return (
    <div>
      <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={"center"}
          fontSize={"4xl"}
          py={10}
          fontWeight={"bold"}>
          Up next for Karaoke!
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          {requests &&
            requests
              .map((el) => {
                return (
                  <div key={el.songName}>
                    <StatsCard
                      title={el.performers + " playing"}
                      stat={el.songName}
                      icon={<FiMic size={"3em"} />}
                    />
                  </div>
                );
              })
              .reverse()}

          {/*   <StatsCard
            title={"Servers"}
            stat={"1,000"}
            icon={<FiServer size={"3em"} />}
          />
          <StatsCard
            title={"Datacenters"}
            stat={"7"}
            icon={<GoLocation size={"3em"} />}
          /> */}
        </SimpleGrid>
      </Box>
    </div>
  );
};
