import React from "react";
import { Box, Heading, Flex, Text, Stack } from "@chakra-ui/react";
import { Switch, useColorMode, Divider } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { LinkBox, LinkOverlay } from "@chakra-ui/react";

// Header is all under one function
const Header = (props) => {
  // drop down menu for mobile
  const [show, setShow] = React.useState(false);
  // to toggle between lightmode and dark mode
  const { colorMode, toggleColorMode } = useColorMode();
  // toggle drop down menu
  const toggleMenu = () => setShow(!show);

  // print the menu items, deal with dark mode cases
  const MenuItems = ({ children, to = "/" }) => (
    <LinkBox>
      <Text
        mt={{ base: 4, md: 0 }}
        mr={6}
        display="block"
        color={colorMode === "light" ? "whiteDark" : "black"}
      >
        <LinkOverlay href={to}>{children}</LinkOverlay>
      </Text>
    </LinkBox>
  );

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg={colorMode === "light" ? "#EF820D" : "orange.400"} // colors are open to be changed (but i want orange)
      color="white"
      width="100%"
      //p={3}
      {...props}
    >
      <Flex align="left" mr={5}>
        <LinkBox color={colorMode === "light" ? "whiteDark" : "black"}>
          <Heading as="h1" size="lg" letterSpacing="0px">
            <LinkOverlay href="/">Siddhardh Palaparthi</LinkOverlay>
          </Heading>
        </LinkBox>
      </Flex>

      <Box
        display={["block", "block", "block", "block", "none"]}
        onClick={toggleMenu}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </Box>

      <Box
        display={[
          show ? "block" : "none",
          show ? "block" : "none",
          show ? "block" : "none",
          show ? "block" : "none",
          "block",
        ]} //{{ base: show ? "block" : "none", md: "block" }}
        flexBasis={["100%", "100%", "100%", "100%", "auto", "auto"]} //{{ base: "100%", md: "auto" }}
      >
        <Flex
          align="center"
          //marginLeft = {["0px", "0px", "0px", "625px"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "column", "column", "column", "row"]}
          pt={[4, 4, 0, 0]}
          ml="10"
          mr="10"
        >
          <MenuItems to="#/about">About Me </MenuItems>
          <MenuItems to="#/pprojects">Programming Projects </MenuItems>
          <MenuItems to="#/awards">Awards and Experiences </MenuItems>
          <MenuItems to="#/other">Other Projects </MenuItems>
          <MenuItems to="https://drive.google.com/file/d/1LwumDL1eGi4Tc9rLTKGxdiEIuB3iGOi9/view?usp=sharing">
            Resume
          </MenuItems>

          <Flex height={["0px", "0px", "0px", "0px", "50px"]}>
            <Divider
              orientation="vertical"
              //borderWidth="1px"
              borderColor={colorMode === "light" ? "whiteDark" : "black"}
            />
          </Flex>
          <Stack direction="row">
            <Switch
              colorScheme="yellow"
              onChange={toggleColorMode}
              paddingTop={["30px", "30px", "30px", "0px"]}
              paddingLeft={["0px", "0px", "0px", "20px"]}
              paddingRight="10px"
              fontSize="18px"
            ></Switch>
            <Flex paddingTop={["30px", "30px", "30px", "0px"]}>
              {colorMode === "light" ? (
                <FaRegMoon color="black" size="18px" />
              ) : (
                <FiSun size="18px" />
              )}
            </Flex>
          </Stack>
        </Flex>
      </Box>
    </Flex>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export default Header;
