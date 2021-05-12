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
import img from "../../assets/ybdcwebsite.jpg";

export default function YbdcWebsite() {
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
          <Heading paddingTop="10px">
            Youth Book Drive Collective Website
          </Heading>
          <Stack justify={["none", "none", "none", "center"]} direction="row">
            <Box
              backgroundColor={colorMode === "light" ? "#B4CDCD" : "#4A777A"}
              padding="2"
              borderRadius="1rem"
            >
              <Text>React</Text>
            </Box>
            <Box
              backgroundColor={colorMode === "light" ? "#FFF44F" : "#756609"}
              padding="2"
              borderRadius="1rem"
            >
              <Text>JavaScript</Text>
            </Box>
            <Box
              backgroundColor={colorMode === "light" ? "#C6F6D5" : "#276749"}
              padding="2"
              borderRadius="1rem"
            >
              <Text>Chakra UI</Text>
            </Box>
          </Stack>

          <Text>
            A website for the non-profit that I Co-Founded with some friends
            with the aim of collecting books and donating them to underserved
            children locally and beyond. To date, we have donated 800+ books.
          </Text>
          <Text>
            I was in charge of the Front-End of this website, working with a
            team of UI designers and back-end developers to bring our site to
            life. The expected roll-out for the website is the end of May 2021.
          </Text>

          <Link
            href="https://github.com/AndyKChen/youth-book-drive-collective"
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
