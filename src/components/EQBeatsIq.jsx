import { Box, SimpleGrid, Text } from "@chakra-ui/react";

const EQBeatsIq = () => {
  return (
    <Box className="mt-20">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
        <Box>
          <Text fontSize={"xx-large"} fontWeight={"bold"}>
            Eq Beats IQ
          </Text>
        </Box>
        <Box>
          <Text fontSize={"larger"}>
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to behappier and have healtheir relationships.
          </Text>
        </Box>
        <Box>
          <Text fontSize={"larger"}>
            They are more successful in their pursuits and make forinspiring
            leaders. According to science, they earns $29 a year
          </Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default EQBeatsIq;
