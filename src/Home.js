import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import bgpic from "./images/Crypto3.jpg";
import { motion } from "framer-motion";


const Home = () => {
    return(
            <Box h={"85vh"} bgColor={"blackAlpha.900"} w={"full"}>

                <motion.div style={{height: "80vh"}} animate={{translateY : "20px"}} transition={{duration:"2", repeat: "Infinity", repeatType:"reverse"}}>
                    <Image src={bgpic}  h={"60vh"} objectFit={"contain"} filter={"grayscale(1)"} w={"full"}/>
                </motion.div>

                <Text mt={"-20"} color={"whiteAlpha.900"} textAlign={"center"} fontWeight={"thin"} fontSize={"6xl"}>Crypton</Text>
            </Box>
        
    )
}

export default Home;