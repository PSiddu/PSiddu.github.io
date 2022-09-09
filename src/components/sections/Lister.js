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
import img from "../../assets/to-do-light.jpg";

export default function Lister() {
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
          <Heading paddingTop="10px">Lister</Heading>
          <Flex
            justify={["none", "none", "none", "center"]}
            direction={["column", "column", "row", "row"]}
          >
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
            <Stack
              marginLeft={["none", "none", "2", "2"]}
              justify={["none", "none", "none", "center"]}
              direction="row"
            >
              <Box
                backgroundColor={colorMode === "light" ? "#f9cd9e" : "#ef820c"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Node.js</Text>
              </Box>
              <Box
                backgroundColor={colorMode === "light" ? "#d3a4f4" : "#a749e8"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>Express.js</Text>
              </Box>
              <Box
                backgroundColor={colorMode === "light" ? "#9aaeac" : "#023430"}
                padding="2"
                borderRadius="1rem"
              >
                <Text>MongoDB</Text>
              </Box>
            </Stack>
          </Flex>

          <Text>
            Lister is a MERN application that allows for users to create to-do
            lists in order to better organize their daily tasks. Users can
            create multiple lists for different things such as Groceries, class
            assignments, etc. All lists and list items are saved within each
            user's dashboard, and anyone can easily sign up for a free account.
          </Text>
          <Text>
            This website uses Auth0 for user authentication, MongoDB to store
            users and their list data, Node and Express on the backend, and
            React on the frontend. The app is responsive on mobile devices, and
            has a light/dark theme.
          </Text>

          <Link
            href="https://lister-todo.herokuapp.com/"
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
