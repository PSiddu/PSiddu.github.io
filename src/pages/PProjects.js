import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import Connect4 from "../components/sections/Connect4";
import Fortunext from "../components/sections/Fortunext";
import YbdcWebsite from "../components/sections/YbdcWebsite";

export default function PProject() {
  return (
    <Stack direction="column" align="center" justify="center">
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={["center", "center", "center", "center"]}
        //paddingBottom="30px"
        paddingTop="115px"
      >
        Programming Projects
      </Heading>

      {/* Add projects here */}
      <Stack
        direction="column"
        padding="10"
        justify="center"
        align="center"
        spacing={3}
      >
        <YbdcWebsite />
        <Connect4 />
        <Fortunext />
      </Stack>
    </Stack>
  );
}
