import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return(
        <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16","8"]} w="100%">

            <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
                <VStack w ={"full"} alignItems={["center", "flex-start"]}>
                    <Text fontWeight={"bold"}> About Crypto Currency </Text>
                    <Text fontSize={"sm"} letterSpacing={"widest"} textAlign={["center","left"]}> 
                    A cryptocurrency is a digital currency, which is an alternative form of payment created using encryption algorithms 
                    </Text>
                </VStack>

                <VStack>
                    <Avatar boxSize={"28"} mt={[4,0]} />
                    <Text> Mehul</Text>
                </VStack>
            </Stack>

        </Box>
    );    
}

export default Footer;