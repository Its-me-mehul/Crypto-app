import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { Container, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { ClassNames } from "@emotion/react";
import ExchangeTemp from "./ExchangeTemp";
import Error from "./Error";

const Exchange = () => {
    const servName = "https://api.coingecko.com/api/v3";

    const [exchanges, setExchanges] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [query, setQuery] = useState("");

    useEffect(()=>{

        const fetchData = async () => {
        try {   

            const {data} = await axios.get(`${servName}/exchanges`);
            setExchanges(data);
            // console.log(exchanges);
            setLoader(false);

        } catch(error){

            setError(true);
            setLoader(false);

        }}

        fetchData();

    },[])
    
    if(error)
    {
        return <Error />
    }

    const searchedExchanges = (query, exchanges) => {
        if(!query) return exchanges;

        return exchanges.filter(val => val.name === query);

    }

    const filteredItems = searchedExchanges(query, exchanges);

    console.log(exchanges);

    return(
        <Container maxW={"container.xl"}>
            {
                loader ?  
                <Loader />
                :
                <VStack>
                    <Text fontWeight={"bold"}>Search 
                        <Input p={4} m={2} w={"container.3sm"} placeholder="Search in Exchanges" onChange={e => setQuery(e.target.value)}/>
                    </Text>
                    
                    {
                        query ?  
                            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                                
                                {filteredItems.map(ele =>{
                                return <ExchangeTemp key ={ele.id} name={ele.name} id={ele.id} rank={ele.trust_score_rank} img={ele.image} url={ele.url}/>
                                })}
            
                            </HStack> 
                            :
                            <VStack>
                            <Text fontWeight={"bold"} textAlign={"left"}> Showing Top 100 Exchanges</Text>
                            <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                                
                                {exchanges.map(ele =>{
                                return <ExchangeTemp key ={ele.id} name={ele.name} id={ele.id} rank={ele.trust_score_rank} img={ele.image} url={ele.url}/>
                                })}

                            </HStack>
                            </VStack>
                    }
                    
                </VStack>
            }
            
        </Container>
    )
}

export default Exchange;