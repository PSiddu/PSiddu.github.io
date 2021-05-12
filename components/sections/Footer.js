import React from "react";
import { Stack, Text, useColorMode, Flex } from "@chakra-ui/react";

export default function Footer() {
  const { colorMode } = useColorMode();

  return (
    <Flex
      width="full"
      height="75px"
      bgColor={colorMode === "light" ? "#EF820D" : "orange.400"}
      as="footer"
      marginBottom="0px"
    >
      <Stack
        direction="row"
        justify={["center", "center", "center", "space-between"]}
        width="full"
      >
        <Text
          fontSize={["12px", "12px", "12px", "17px"]}
          paddingTop="25px"
          paddingLeft="20px"
          align="left"
          color={colorMode === "light" ? "white" : "black"}
        >
          Created by Siddhardh Palaparthi, 2021
        </Text>

        <Text
          paddingTop="25px"
          paddingRight="20px"
          fontSize={["12px", "12px", "12px", "17px"]}
          align="right"
          color={colorMode === "light" ? "white" : "black"}
        >
          Contact Me: siddu.palaparthi@gmail.com
        </Text>
      </Stack>
    </Flex>
  );
}
