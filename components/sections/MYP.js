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
import img from "../../assets/MYP.jpeg";

export default function MYP() {
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
              //width="300px"
              rounded="1rem"
              border="1px"
              //shadow="2xl"
            />
          </Flex>
        </Stack>
        <Stack direction="column" padding="2">
          <Heading paddingTop="10px" fontSize="32px">
            MYP Personal Project
          </Heading>

          <Text paddingTop={["none", "none", "none", "30px"]}>
            A year long project that I completed as one of my graduation
            requirements.
          </Text>
          <Text>
            I research and follow through a plan I created to make my very own
            backyard vegetable garden.
          </Text>
          <Link
            href="https://docs.google.com/document/d/17RcDum4MqLyaGPuQVRhVtiqt1oadm9j39lMXU8Sc9IU/edit?usp=sharing"
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
