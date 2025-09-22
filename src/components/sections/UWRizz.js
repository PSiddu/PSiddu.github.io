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
import img from "../../assets/uwrizz.jpg";

export default function UWRizz() {
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
          <Heading paddingTop="10px">UWRizz</Heading>
          <Flex
            justify={["none", "none", "none", "center"]}
            direction={["column", "column", "row", "row"]}
          >
            <Stack justify={["none", "none", "none", "center"]} direction="row">
              <Box
                backgroundColor={colorMode === "light" ? "#f4d2f2" : "#c012d7"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Kotlin</Text>
              </Box>
              <Box
                backgroundColor={colorMode === "light" ? "#f5b26d" : "#f18b23"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Firebase</Text>
              </Box>
              <Box
                backgroundColor={colorMode === "light" ? "#b3bfc6" : "#002b41"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Compose</Text>
              </Box>
            </Stack>
            <Stack
              marginLeft={["none", "none", "2", "2"]}
              justify={["none", "none", "none", "center"]}
              direction="row"
            >
              <Box
                backgroundColor={colorMode === "light" ? "#b4e7ff" : "#04aeff"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Ktor</Text>
              </Box>
            </Stack>
          </Flex>

          <Text>
            UWRizz is an Android Application that was created as a project for
            the University of Waterloo's CS346 course. It is a dating app that
            is exclusive to the student body of UWaterloo. Due to observations
            that the UWaterloo student body often felt isolated from dating due
            to its uniquely stressful academic environment, this app was
            designed to match and bring UWaterloo students who shared common
            interests together.
          </Text>
          <Text>
            This app uses Firebase for backend services such as chatting between
            users, saving their profiles, and recording matches based on our
            survey and algorithm. It also uses Kotlin, Compose, and Ktor. This
            app was not published due to its nature as a school group project,
            but it did well in our course, and the Github repository is
            available to be viewed!
          </Text>

          <Link
            href="https://github.com/PSiddu/UWRizz"
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
