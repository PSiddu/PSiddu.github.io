import React from "react";
import { Text, Heading, Stack, Image, Box } from "@chakra-ui/react";
import hackathon from "../assets/Hackathon.png";
import DECA from "../assets/DECA.jpg";
import honor from "../assets/Honor Roll.JPG";
import ybdc1 from "../assets/YBDC.JPG";
import stem from "../assets/STEM.jpeg";
import badminton from "../assets/badminton.jpg";
import ybdc2 from "../assets/ybdc_my_pic.png";
import Slide from "react-reveal/Slide";

export default function Awards() {
  return (
    <Stack direction="column" align="center" justify="center">
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        //paddingBottom="30px"
        paddingTop="115px"
        paddingBottom="25px"
      >
        Awards and Experiences
      </Heading>

      <Stack direction={["column", "column", "column", "row"]} padding="20px">
        <Stack direction="column">
          <Slide left>
            <Box padding="10px">
              <Image src={hackathon} border="4px" />
              <Text align="center" paddingTop="5px">
                My team and I after placing first at AlphaHacks 2018
              </Text>
            </Box>
          </Slide>
          <Slide left>
            <Box padding="10px">
              <Image src={DECA} border="4px" />
              <Text align="center" paddingTop="5px">
                My case partner and I after placing top 9 at DECA Ontario
                Provincials 2019, qualifying for the International Career
                Development Conference in Orlando, Florida
              </Text>
            </Box>
          </Slide>
          <Slide left>
            <Box padding="10px">
              <Image src={honor} border="4px" />
              <Text align="center" paddingTop="5px">
                A few friends and I celebrate making the honor roll in our final
                highschool semester
              </Text>
            </Box>
          </Slide>
          <Slide left>
            <Box padding="10px">
              <Image src={ybdc1} border="4px" />
              <Text align="center" paddingTop="5px">
                Myself and other members of the Youth Book Drive Collective,
                after a days hard work of collecting books house to house
              </Text>
            </Box>
          </Slide>
        </Stack>
        <Stack direction="column">
          <Slide right>
            <Box padding="10px">
              <Image src={stem} border="4px" />
              <Text align="center" paddingTop="5px">
                Certificate for best Physical Sciences Submission to Canadian
                STEM Fellowship Scholarly Writing Challenge 2019
              </Text>
            </Box>
          </Slide>
          <Slide right>
            <Box padding="10px">
              <Image src={badminton} border="4px" />
              <Text align="center" paddingTop="5px">
                Photo of myself playing badminton at a tournament
              </Text>
            </Box>
          </Slide>
          <Slide right>
            <Box padding="10px">
              <Image src={ybdc2} border="4px" />
              <Text align="center" paddingTop="5px">
                My first major score during a door to door pledge for YBDC. One
                generous citizen donated a shopping cart of books!
              </Text>
            </Box>
          </Slide>
        </Stack>
      </Stack>
    </Stack>
  );
}
