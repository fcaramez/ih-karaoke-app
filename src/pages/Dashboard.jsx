import { getRequests, deleteRequest } from "../firebaseFuntions/db.firebase";
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
  Center,
} from "@chakra-ui/react";
import { FiX } from "react-icons/fi";

export const Dashboard = () => {
  const [requests, setRequests] = useState([]);

  const fetchRequests = async () => {
    try {
      const res = await getRequests();
      setRequests(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteRequest(id);
      await fetchRequests();
    } catch (error) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div>
      {requests ?
        requests.map((el, i) => {
          if (i === 0) {
            return (
              <div key={el.id}>
                <br />
                <Box
                  px={{ base: 2, md: 4 }}
                  py={"5"}
                  shadow={"xl"}
                  border={"1px solid"}
                  rounded={"lg"}
                  borderColor={"gold"}
                  textAlign="center">
                  <Center>
                    <FiX
                      cursor={"pointer"}
                      onClick={async () => await handleDelete(el.id)}
                      color="gold"
                      size={"3em"}
                    />
                  </Center>
                  <Heading color={"white"} as="h2" size="xl" mt={6} mb={2}>
                    On Stage:
                  </Heading>
                  <Heading color={"white"}>
                    {el.performers + " playing " + el.songName}
                  </Heading>
                  <br />
                  <p>Requested by: {el.requestedBy}</p>
                </Box>
                <br />
              </div>
            );
          } else {
            return (
              <div key={el.id}>
                <Stat
                  px={{ base: 2, md: 4 }}
                  py={"5"}
                  shadow={"xl"}
                  border={"1px solid"}
                  rounded={"lg"}>
                  <Flex justifyContent={"space-between"}>
                    <Box pl={{ base: 2, md: 4 }}>
                      <StatLabel fontWeight={"medium"}>
                        {el.performers + " playing"}
                      </StatLabel>
                      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
                        {el.songName}
                      </StatNumber>
                      <StatNumber fontSize={"md"} fontWeight={"medium"}>
                        Requested by: {el.requestedBy}
                      </StatNumber>
                    </Box>
                    <Box
                      cursor={"pointer"}
                      onClick={async () => await handleDelete(el.id)}
                      my={"auto"}
                      alignContent={"center"}>
                      <FiX size={"3em"} />
                    </Box>
                  </Flex>
                </Stat>
              </div>
            );
          }
        }): <div>
          <h1>No Requests yet poderoso chefão :P</h1>
        </div> }
    </div>
  );
};
