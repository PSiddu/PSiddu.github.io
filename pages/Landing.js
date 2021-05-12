import React from "react";
import { Flex, Stack } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import LandingLayout from "../components/layouts/LandingLayout";
import Portrait from "../components/ui/Portrait";
import { motion } from "framer-motion";
import About from "../pages/About";
import PProjects from "../pages/PProjects";
import Awards from "./Awards";
import Other from "./Other";

export default function Landing() {
  return (
    <LandingLayout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <Flex align="center" paddingTop={["none", "none", "none", "50px"]}>
          <Stack direction={["column", "row"]}>
            <Hero
              title="Hi, I'm Siddhardh Palaparthi, a computer science student at
            UWaterloo, and an aspiring White-Hat Hacker!"
              subtitle="Hello! Welcome to my personal website! Here, I will be sharing a few things about myself, 
            including a few of my accolades, accomplishments, and even some of my projects that are unrelated 
            to computer science! Feel free to take a look around!"
              //image={books}
            />
            <Flex
              paddingTop={["none", "none", "none", "50px"]}
              align="center"
              paddingRight={["none", "none", "30px", "30px", "30px"]}
            >
              <Portrait />
            </Flex>
          </Stack>
        </Flex>
        <Flex id="/about" itemID="/about">
          <About />
        </Flex>
        <Flex id="/pprojects" itemID="/pprojects">
          <PProjects />
        </Flex>
        <Flex id="/awards" itemID="/awards">
          <Awards />
        </Flex>
        <Flex id="/other" itemID="/other">
          <Other />
        </Flex>
      </motion.div>
    </LandingLayout>
  );
}
