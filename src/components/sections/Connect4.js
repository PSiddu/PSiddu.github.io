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
import img from "../../assets/connect4.JPG";

export default function Connect4() {
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
            Connect 4: Face-Down Edition
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
            A version of the classic Connect 4 game where the board is "face
            down", so the pieces don't drop down. I created this game for my
            final project in my 10th Grade Computer Science Class, where we had
            to put a twist on any classic board game.
          </Text>
          <Text>
            I was originally using Java Applets, but because Applet is starting
            to get outdated, I switched to Swing. Since the program was marked,
            it has very descriptive comments, and is quite easy to follow. I
            ended up doing well on the project, getting full marks.
          </Text>
          <Link
            href="https://github.com/PSiddu/Connect-4-Face-Down-Game"
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
