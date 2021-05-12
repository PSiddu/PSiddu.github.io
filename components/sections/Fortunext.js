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
import img from "../../assets/fortunext1.JPG";

export default function Fortunext() {
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
            Fortunext
          </Heading>

          <Stack justify={["none", "none", "none", "center"]} direction="row">
            <Box
              backgroundColor={colorMode === "light" ? "#ff8680" : "#cc0a00"}
              padding="2"
              borderRadius="1rem"
            >
              <Text>Java</Text>
            </Box>
            <Box
              backgroundColor={colorMode === "light" ? "#ff8680" : "#cc0a00"}
              padding="2"
              borderRadius="1rem"
            >
              <Text>Javax Swing</Text>
            </Box>
          </Stack>

          <Text>
            Fortunext is a Java flashcard program that serves as an educational
            tool for people who wish to learn about Finance and Financial
            Literacy. It's filled with terms and their definitions that you can
            learn using the interactive "flash card" feature, where you press a
            button to reveal a terms definition.
          </Text>
          <Text>
            Winner of the 2018 AlphaHacks Fintech Hackathon, placing first out
            of 75 engineers, high-schoolers, designers and business students.
            Our submission also included a budget calculator website and a
            Fintech dictionary Chrome extension which were created by other
            members of my team.
          </Text>

          <Link
            href="https://github.com/PSiddu/Fortunext"
            isExternal
            paddingTop="10px"
          >
            See GitHub Repo <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
