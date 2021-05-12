import React from "react";
import PropTypes from "prop-types";
import Socials from "../sections/Socials";
import { Flex, Image, Heading, Stack, HStack } from "@chakra-ui/react";

export default function Hero({ title, subtitle, image, ...rest }) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      paddingRight="10px"
      paddingTop="50px"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "70%", md: "80%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.200"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.200"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Socials />
        <HStack spacing="12px">
          <Image
            src={image}
            size="100%"
            width="700px"
            rounded="1rem"
            shadow="2xl"
          />
        </HStack>
      </Stack>
    </Flex>
  );
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
};
