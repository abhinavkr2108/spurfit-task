import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const BestWithEq = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} marginTop={"20px"}>
      <Box>
        <Text fontSize={"xx-large"} fontWeight={"bold"}>
          Be the best you with EQ
        </Text>
      </Box>
      <Box>
        <Text fontSize={"larger"}>
          Not having your own emotions under control might be holding you back.
        </Text>
      </Box>
      <Box>
        <Text fontSize={"larger"}>
          Additionally, not understanding those of others strops you from being
          parent, friend you can be.
        </Text>
      </Box>
    </SimpleGrid>
  );
};

export default BestWithEq;
