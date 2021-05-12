import React from "react";
import {
  IconButton,
  Box,
  Text,
  ButtonGroup,
  LinkOverlay,
  LinkBox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Socials() {
  /*const [linkedin, setLinkedin] = useState(false);
  const [github, setGithub] = useState(false);
  const [email, setEmail] = useState(false);

  const handleSignIn = (event) => {
    if (setLinkedin) {
      window.location.href = "https://www.linkedin.com/in/siddu-palaparthi/";
    } else if (setGithub) {
      window.location.href = "https://github.com/PSiddu";
    } else if (setEmail) {
      window.location.href = "siddu.palaparthi@gmail.com";
    }
  };*/

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      padding="10px"
      shadow="base"
      align="center"
    >
      <Text fontSize="xl" paddingBottom="5px">
        Contact Me!
      </Text>

      <ButtonGroup spacing="6">
        <LinkBox>
          <IconButton
            colorScheme="linkedin"
            aria-label="linkedin"
            icon={<AiFillLinkedin size="35px" />}
            boxSize="50px"
          />
          <LinkOverlay href="https://www.linkedin.com/in/siddu-palaparthi/"></LinkOverlay>
        </LinkBox>
        <LinkBox>
          <IconButton
            colorScheme="green"
            aria-label="github"
            icon={<AiFillGithub size="35px" />}
            boxSize="50px"
          />
          <LinkOverlay href="https://github.com/PSiddu"></LinkOverlay>
        </LinkBox>
        <Popover>
          <PopoverTrigger>
            <IconButton
              colorScheme="red"
              aria-label="email"
              icon={<AiOutlineMail size="35px" />}
              boxSize="50px"
            />
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Here are my addresses!</PopoverHeader>
            <PopoverBody>
              Primary Email: siddu.palaparthi@gmail.com School Email:
              vspalapa@uwaterloo.ca
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </ButtonGroup>
    </Box>
  );
}
