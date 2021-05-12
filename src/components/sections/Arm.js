import React from "react";
import {
  Flex,
  Stack,
  Box,
  Image,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import img from "../../assets/arm.jpeg";

export default function Arm() {
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
            Arduino Minecraft Glove
          </Heading>

          <Text paddingTop={["none", "none", "none", "30px"]}>
            I worked with a team to create a new immersive Minecraft experience.
            Using a Raspberry Pi, my team created a "Hide and Seek" Game Mode in
            the game by running a Python script. The player has to look for a
            block with constant clues from the computer.
          </Text>
          <Text>
            My responsibility was creating a glove using Arduino wiring and
            breadboards to create a glove where you could control the character
            by holding different fingers together.
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
