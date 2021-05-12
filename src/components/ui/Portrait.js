import React from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import pic_of_me from "../../assets/picofme.jpeg";

export default function Portrait(props) {
  const { colorMode } = useColorMode();

  return (
    <Box {...props}>
      <Image
        src={pic_of_me}
        alt="ybdc_group_pic"
        borderRadius="25px"
        border="2px"
        borderColor={colorMode === "light" ? "black" : "white"}
      ></Image>
    </Box>
  );
}
