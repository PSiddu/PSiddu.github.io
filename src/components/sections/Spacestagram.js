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
import img from "../../assets/spacestagram.jpg";

export default function Spacestagram() {
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
              width="400px"
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
            Spacestagram is a web app that gets photos from NASA’s Astronomy
            Picture of the Day API, and shares them on a social media platform
            with posts that can be liked and disliked and that have expandable
            descriptions.
          </Text>
          <Text>
            This website was created for the Shopify Summer 2022 Front-End
            Challenge. Some extra features that I chose to implement were a
            date-picker with which you can search for posts between a certain
            date and today, as well as dark and light theme functionality.
          </Text>

          <Link
            href="https://spacestagram-siddup.herokuapp.com/"
            isExternal
            paddingTop="10px"
          >
            See Site <ExternalLinkIcon mx="2px" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
