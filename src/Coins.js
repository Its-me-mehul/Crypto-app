import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import Error from "./Error";
import axios from "axios";
import { Button, Container, HStack, Input, Radio, RadioGroup, Text } from "@chakra-ui/react";
import CoinTemp from "./CoinTemp";


const Coins = () => {

    const servName = "https://api.coingecko.com/api/v3";

    const [newData, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [curr, setCurr] = useState("inr")
    const [query, setQuery] = useState("");

    const currSymbol = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$";

    const btns = new Array(132).fill(1);

    useEffect(()=>{

        const fetchData = async() => {
            
            try{
            const {data} = await axios.get(`${servName}/coins/markets?vs_currency=${curr}&per_page=40&page=${page}`)
            setData(data);
            console.log(data);
            setLoader(false);

            } catch(error){

                setLoader(false);
                setError(true);
            }
        }

        fetchData();
    },[curr, page])

    const pagingOper = (val) => {

        setLoader(true);
        setPage(val);

    }

    if(error)
    {
        return <Error />
    }

    const searchCoins = (data, query) => {
        if(!query) return data;

        return data.filter(val => val.name === query);
    }

    const filteredItems = searchCoins(newData, query);

    console.log(newData);

    return(
    <Container maxW={"container.xl"}>
        {   
            loader ? <Loader /> 
            : 
            <>
            <HStack justifyContent={"space-evenly"}>
                <RadioGroup onChange={setCurr}>
                    <HStack>
                        <Radio value={"inr"}>INR </Radio>
                        <Radio value={"usd"}>USD </Radio>
                        <Radio value={"eur"}>EUR </Radio>
                    </HStack>
                </RadioGroup>

                <Text fontWeight={"bold"}>Search 
                    <Input w={"container.5sm"} placeholder="Search Coins" p={"4"} m={"2"} borderRadius={10} onChange={e => setQuery(e.target.value)}/>
                </Text>
            </HStack>
            {
                query ? 
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                    {filteredItems.map(ele => {
                        return <CoinTemp key={ele.id} name={ele.name} id={ele.id} price={ele.current_price} img={ele.image} currSymbol={currSymbol} symbol={ele.symbol} />;
                    })}
                    </HStack>
                : 
                    <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
                        {newData.map(ele => {
                            return <CoinTemp key={ele.id} name={ele.name} id={ele.id} price={ele.current_price} img={ele.image} currSymbol={currSymbol} symbol={ele.symbol} />;
                        })}
                    </HStack>}
            
            
            <HStack w={"full"} overflowX={"auto"} p={8}>
                {btns.map((ele, idx) => {
                    return <Button key={idx} bgColor={"blackAlpha.900"} color={"white"} onClick={() => { pagingOper(idx + 1); } }>{idx + 1}</Button>;
                })}
            </HStack></>
            
       }

    </Container>

    
    )
}

export default Coins;