import React from "react";
import { Stack, Heading } from "@chakra-ui/react";
import Physics from "../components/sections/Physics";
import MYP from "../components/sections/MYP";
import Chemistry from "../components/sections/Chemistry";
import Arm from "../components/sections/Arm";

export default function Other() {
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
        paddingBottom="25px"
      >
        Some of my other Projects
      </Heading>

      {/* Add projects here */}
      <Stack
        direction="column"
        padding="10"
        justify="center"
        align="center"
        spacing={3}
      >
        <Physics />
        <MYP />
        <Chemistry />
        <Arm />
      </Stack>
    </Stack>
  );
}
