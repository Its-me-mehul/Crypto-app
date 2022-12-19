import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import "./css/exchangeCard.css";
import { Link } from "react-router-dom";


const CoinTemp = ({name, id, url, img, price, symbol, currSymbol = "₹"}) => {
    return(
        <Link to={`/coin/${id}`}>
            <VStack  className="eCard">
                <Image src={img} w={"10"} h={"10"} alt={"Exchange"} objectFit={"contain"}/>
                <Heading size={"md"}>{symbol}</Heading>
                <Text noOfLines={1}>{name}</Text>
                <Text noOfLines={1}>{`${currSymbol}${price}`}</Text>
            </VStack>
        </Link>
    )
}


export default CoinTemp;