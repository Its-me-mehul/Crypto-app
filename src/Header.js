import React from "react";
// import "./css/header.css"
import { Link } from "react-router-dom";
import { HStack, Text } from "@chakra-ui/react";

const Header = () => {
    return(
        <HStack p={4} bgColor={"blackAlpha.900"} color={"whiteAlpha.900"} w={"full"}>
            <HStack>
                <Link to ="/" style={{marginRight:"4px"}}><Text fontWeight={"bold"}>Home</Text></Link>
                <Link to ="/coins" style={{marginRight:"4px"}}><Text fontWeight={"bold"}>Coins</Text></Link>
                <Link to ="/exchange" style={{marginRight:"4px"}}><Text fontWeight={"bold"}>Exchange</Text></Link>
                <Text color={"whiteAlpha.700"}>Wanna know more about crypto??</Text> <Link to="/videos"><Text fontWeight={"bold"}>Click Here!</Text> </Link>
            </HStack>  
        </HStack>
    )
}

export default Header;