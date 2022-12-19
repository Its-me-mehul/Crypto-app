import React from "react";
import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import "./css/exchangeCard.css";


const ExchangeTemp = ({name, id, rank, url, img}) => {

    return(
        <a href={url} target="blank">
            <VStack  className="eCard">
                <Image src={img} w={"10"} h={"10"} alt={"Exchange"} objectFit={"contain"}/>
                <Heading size={"md"}>{rank}</Heading>
                <Text noOfLines={1}>{name}</Text>
            </VStack>
        </a>
    )
}

export default ExchangeTemp;