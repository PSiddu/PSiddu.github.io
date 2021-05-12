import React from "react";
import { Flex } from "@chakra-ui/react";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export default function LandingLayout(props) {
  return (
    <Flex
      direction="column"
      align="center"
      //maxW={{ xl: "1200px" }}
      m="0 auto"
      {...props}
    >
      <Header
        position="sticky"
        top={0}
        zIndex="2"
        boxShadow="lg"
        marginTop={0}
        //paddingTop="0"
      />
      {props.children}
      <Footer />
    </Flex>
  );
}
