import React from "react";
import { Image, Stack, Heading, useColorMode } from "@chakra-ui/react";
import Tippy from "@tippyjs/react";
import badminton from "../assets/badminton.jpg";
import bookdrive from "../assets/bookdrive.jpg";
import tea from "../assets/tea.jpg";
import helicopter from "../assets/helicopter.jpg";
import squad from "../assets/squad.jpg";
import minecraft from "../assets/minecraft.jpg";
import Flip from "react-reveal/Flip";
import { motion } from "framer-motion";
import { GiFullPizza } from "react-icons/gi";
import { BiCameraMovie } from "react-icons/bi";
import { BsMusicNote, BsClockHistory, BsCodeSlash } from "react-icons/bs";

export default function About() {
  const { colorMode } = useColorMode();

  return (
    <Stack
      direction="column"
      justify="center"
      align="center"
      paddingTop="115px"
      paddingBottom="75px"
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign={["center", "center", "left", "left"]}
        paddingBottom="30px"
      >
        About Me
      </Heading>

      <Stack
        direction={["column", "column", "column", "row"]}
        justify="center"
        spacing={["5", "5", "5", "5", "41"]}
        align="center"
      >
        <Flip left>
          <Image
            src={squad}
            boxSize="190px"
            alt="squad"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
        <Flip left delay={500}>
          <Image
            src={badminton}
            boxSize="190px"
            alt="badminton"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
        <Flip left delay={1000}>
          <Image
            src={bookdrive}
            boxSize="190px"
            alt="bookdrive"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
        <Flip left delay={1500}>
          <Image
            src={tea}
            boxSize="190px"
            alt="tea"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
        <Flip left delay={2000}>
          <Image
            src={helicopter}
            boxSize="190px"
            alt="helicopter"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
        <Flip left delay={2500}>
          <Image
            src={minecraft}
            boxSize="190px"
            alt="minecraft"
            borderRadius="25px"
            border="2px"
          ></Image>
        </Flip>
      </Stack>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={["center", "center", "center", "center"]}
        paddingTop="15px"
        paddingBottom="20px"
        paddingLeft={["40px", "40px", "40px", "200px"]}
        paddingRight={["40px", "40px", "40px", "200px"]}
      >
        Currently, I am in my 2B term at the University of Waterloo for Computer
        Science. My inspiration for entering this field is its evolving and
        mysterious nature, and a desire to be a part of the future.
      </Heading>

      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign={["center", "center", "center", "center"]}
        paddingBottom="100px"
        paddingLeft={["40px", "40px", "40px", "200px"]}
        paddingRight={["40px", "40px", "40px", "200px"]}
      >
        To see some of my general interests, feel free to interact with the
        icons below. You can drag them in whatever direction you want, and get
        more info by hovering over them!
      </Heading>

      <Stack direction={["column", "column", "column", "row"]} spacing={2}>
        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 700,
            bottom: 100,
          }}
        >
          <Tippy content="Badminton">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                //xmlns:xlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="100px"
                height="100px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.3 2c-.97.03-1.72.84-1.69 1.8c.01.24.06.47.16.7l.29.64c.04.13-.03.27-.17.31c-.09.05-.19 0-.26-.08l-.42-.55c-.33-.42-.83-.68-1.36-.69c-.97-.02-1.77.75-1.79 1.71c-.01.42.13.82.39 1.16l.42.5h.01c.08.13.05.29-.06.37c-.09.07-.21.07-.29 0L7 7.45c-.34-.26-.75-.4-1.16-.39c-.96.02-1.73.82-1.71 1.79c.01.53.27 1.03.69 1.36l.57.44c.11.1.11.26-.01.35a.23.23 0 0 1-.26.05h-.01l-.61-.28c-.23-.09-.46-.15-.7-.16c-.96-.03-1.77.73-1.8 1.7c0 .72.4 1.38 1.06 1.66l11.39 5.07l4.59-4.59l-5.07-11.39C13.69 2.39 13 1.97 12.3 2m.83 4.1c.42-.01.8.23.96.61l3.05 6.84l-3.95-3.94l-.93-2.11c-.3-.63.16-1.38.87-1.4M9.85 8.85c.27 0 .52.1.71.3l4.81 4.81c.4.38.41 1.01.03 1.41c-.4.4-1.02.41-1.44 0l-4.81-4.81a.987.987 0 0 1-.02-1.41c.19-.2.45-.3.72-.3m-2.72 3.32c.13 0 .27.04.37.09l2.13.94l3.94 3.94l-6.86-3.05c-1.02-.44-.68-1.95.42-1.92m13.15 3.87l-4.24 4.24l.85.85c.76.75 1.86 1.04 2.89.77a3.024 3.024 0 0 0 2.12-2.12c.27-1.03-.02-2.13-.77-2.89l-.85-.85z"
                  fill={colorMode === "light" ? "#626262" : "#EF820D"}
                />
              </svg>
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -200,
            right: 600,
            bottom: 100,
          }}
        >
          <Tippy content="Minecraft">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
                width="100px"
                height="100px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 26 26"
                enable-background="new 0 0 26 26"
              >
                <path
                  d="M 8 0 L 8 2 L 18 2 L 18 0 L 8 0 z M 18 2 L 18 4 L 20 4 L 20 6 L 22 6 L 22 8 L 24 8 L 24 2 L 22 2 L 18 2 z M 24 8 L 24 18 L 26 18 L 26 8 L 24 8 z M 24 18 L 22 18 L 22 20 L 24 20 L 24 18 z M 22 18 L 22 10 L 20 10 L 20 18 L 22 18 z M 20 10 L 20 8 L 18 8 L 18 10 L 20 10 z M 18 10 L 16 10 L 16 12 L 18 12 L 18 10 z M 16 12 L 14 12 L 14 14 L 16 14 L 16 12 z M 14 14 L 12 14 L 12 16 L 14 16 L 14 14 z M 12 16 L 10 16 L 10 18 L 12 18 L 12 16 z M 10 18 L 8 18 L 8 20 L 10 20 L 10 18 z M 8 20 L 6 20 L 6 22 L 8 22 L 8 20 z M 6 22 L 4 22 L 4 24 L 6 24 L 6 22 z M 4 24 L 2 24 L 2 22 L 0 22 L 0 24 L 0 26 L 2 26 L 4 26 L 4 24 z M 2 22 L 4 22 L 4 20 L 2 20 L 2 22 z M 4 20 L 6 20 L 6 18 L 4 18 L 4 20 z M 6 18 L 8 18 L 8 16 L 6 16 L 6 18 z M 8 16 L 10 16 L 10 14 L 8 14 L 8 16 z M 10 14 L 12 14 L 12 12 L 10 12 L 10 14 z M 12 12 L 14 12 L 14 10 L 12 10 L 12 12 z M 14 10 L 16 10 L 16 8 L 14 8 L 14 10 z M 16 8 L 18 8 L 18 6 L 16 6 L 16 8 z M 16 6 L 16 4 L 8 4 L 8 6 L 16 6 z M 8 4 L 8 2 L 6 2 L 6 4 L 8 4 z"
                  fill={colorMode === "light" ? "#626262" : "#EF820D"}
                />
              </svg>
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -300,
            right: 500,
            bottom: 100,
          }}
        >
          <Tippy content="Pizza">
            <div>
              <GiFullPizza
                width="100px"
                height="100px"
                fill={colorMode === "light" ? "#626262" : "#EF820D"}
                size="100px"
              />
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -400,
            right: 400,
            bottom: 100,
          }}
        >
          <Tippy content="Movies">
            <div>
              <BiCameraMovie
                width="100px"
                height="100px"
                fill={colorMode === "light" ? "#626262" : "#EF820D"}
                size="100px"
              />
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -500,
            right: 300,
            bottom: 100,
          }}
        >
          <Tippy content="Hip-Hop Music">
            <div>
              <BsMusicNote
                width="100px"
                height="100px"
                fill={colorMode === "light" ? "#626262" : "#EF820D"}
                size="100px"
              />
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -600,
            right: 200,
            bottom: 100,
          }}
        >
          <Tippy content="Programming">
            <div>
              <BsCodeSlash
                width="100px"
                height="100px"
                fill={colorMode === "light" ? "#626262" : "#EF820D"}
                size="100px"
              />
            </div>
          </Tippy>
        </motion.div>

        <motion.div
          className="item"
          drag
          dragConstraints={{
            top: -100,
            left: -700,
            right: 100,
            bottom: 100,
          }}
        >
          <Tippy content="History">
            <div>
              <BsClockHistory
                width="100px"
                height="100px"
                fill={colorMode === "light" ? "#626262" : "#EF820D"}
                size="100px"
              />
            </div>
          </Tippy>
        </motion.div>
      </Stack>
    </Stack>
  );
}
//BsClockHistory
