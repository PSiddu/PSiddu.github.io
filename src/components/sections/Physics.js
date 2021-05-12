import React from "react";
import {
  Flex,
  Stack,
  Box,
  Image,
  Heading,
  Text,
  useColorMode,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import img from "../../assets/helicopter2.jpg";

export default function Physics() {
  const { colorMode } = useColorMode();
  var color_str = "";
  colorMode === "light" ? (color_str = "#e5e4e2") : (color_str = "#4f5b66");

  return (
    <Box
      maxW={["none", "none", "none", "75%"]}
      borderWidth="1px"
      borderRadius="1rem"
      overflow="hidden"
      padding="10px"
      shadow="2xl"
      align="center"
      backgroundColor={colorMode === "light" ? "#FAF9F6" : "#343d46"}
      _hover={{
        backgroundColor: color_str,
      }}
    >
      <Stack direction={["column", "column", "column", "row"]}>
        <Stack direction="column" width={["none", "none", "none", "100%"]}>
          <Flex align="center" justify="center" paddingTop="15px">
            <Image
              //align="center"
              src={img}
              size="100%"
              width="300px"
              rounded="1rem"
              border="1px"
              //shadow="2xl"
            />
          </Flex>
        </Stack>
        <Stack direction="column" padding="2">
          <Heading paddingTop="10px" fontSize="32px">
            International Baccalaureate SL Physics Internal Assignment
          </Heading>

          <Text paddingTop={["none", "none", "none", "30px"]}>
            My paper investigates the correlation between the lift force of a
            helicopter and the speed of a helicopter’s blade. Recieved a level 6
            out of 7.
          </Text>
          <Text>
            I later submitted this project to the 2019 Canadian STEM Fellowship
            Scholarly Writing Challenge and won an award for the best submission
            in the Physical Sciences.
          </Text>
          <Link
            href="https://drive.google.com/file/d/1_bJxxHMM66IeQN7SDDDeoCwsntHAKpBl/view?usp=sharing"
            isExternal
            paddingTop="10px"
          >
            Check it out <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
