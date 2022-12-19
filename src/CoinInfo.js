import React, { useState, useEffect } from "react";
import { Badge, Box, Button, Container, HStack, Image, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";
import Footer from "./Footer";
import Chart from "./Chart";


const CoinInfo = () => {

    const servName = "https://api.coingecko.com/api/v3";
    
    const [coin, setCoin] = useState({});
    const [loader, setLoader] = useState(true);
    const [error, setError] = useState(false);
    const [curr, setCurr] = useState("inr");
    const [days, setDays] = useState("24h");
    const [chartArr, setChartArr] = useState([]);

    const currSymbol = curr === "inr" ? "₹" : curr === "eur" ? "€" : "$"; 

    const btn = ["24h", "1d", "7d", "14d", "30d", "60d", "200d", "365d", "max"]

    const params = useParams();
    // console.log(`${servName}/coins/${params.id}`);

    useEffect(() => {
        const fetchCoin = async () => {
            try {

                const { data } = await axios.get(`${servName}/coins/${params.id}`);
                const { data:chartData } = await axios.get(`${servName}/coins/${params.id}/market_chart?vs_currency=${curr}&days=${days}`);
                console.log(chartData);
                setCoin(data);
                setChartArr(chartData.prices);
                setLoader(false);
                
            } catch(error){

                setError(true);
                setLoader(false);
                
            }
        }

        fetchCoin();    
    }, [params.id, curr, days])

    const handleChartDetails = (val) =>{

        setDays(val);
        setLoader(true);

    }

    if(error)
    {
        return <Error />
    }

    console.log(coin);
    // console.log(error);
    return(
        <Container maxW={"container.xl"}>
            {
                loader ? (
                    <Loader /> 
                )
                :
                ( 
                <>
                    <Box width={"full"} borderWidth={1}>
                        <Chart arr={chartArr} curr={currSymbol} days={days}/>
                        
                    </Box>

                    <Text bgColor={"blackAlpha.100"} borderRadius={10} p={4} marginTop={4} fontWeight={"bold"}>Showing the chart of last {days}</Text>

                    <HStack p={4} wrap={"wrap"}>
                        {
                            btn.map((val)=>{
                                return <Button key= {val} bgColor={"blackAlpha.800"} color={"white"} onClick={() => handleChartDetails(val)}> {val} </Button>
                            })
                        }
                    </HStack>

                    <br />

                    <RadioGroup value={curr} onChange={setCurr} p={4}>
                        <Radio value="inr" marginRight={3}>INR</Radio>
                        <Radio value="usd" marginRight={3}>USD</Radio>
                        <Radio value="eur" marginRight={3}>EUR</Radio>
                    </RadioGroup>

                    <VStack spacing={"4"} p="16" alignItems={"flex-start"}>
                        <Text alignSelf={"center"}>Last updated on {Date(coin.market_data.last_updated).split("G")[0]}</Text>

                        
                        <Image src={coin.image.large} w={"20"} h={"20"} objectFit={"contain"}/>

                        <Stat>
                            <StatLabel>
                                {coin.name}
                            </StatLabel>
                            <StatNumber>
                                {currSymbol}{coin.market_data.current_price[curr]}
                            </StatNumber>
    
                            <StatHelpText>
                                <StatArrow type={coin.market_data.price_change_24h_in_currency[curr] > 0 ? "increase" : "decrease"}/>
                                {currSymbol}{coin.market_data.price_change_24h_in_currency[curr]}{`(${coin.market_data.price_change_percentage_24h_in_currency[curr] > 0 ? "increase" : "decrease"} by ${coin.market_data.price_change_percentage_24h_in_currency[curr]}%)`}
                        
                            </StatHelpText>
                        </Stat>

                        <Badge fontSize={"xl"} bgColor={"blackAlpha.900"} color={"white"} borderRadius={"5px"}>
                            {`#${coin.market_cap_rank}`}
                        </Badge>

                        <CustomBar 
                            high={`${currSymbol}${coin.market_data.high_24h[curr]}`}
                            low={`${currSymbol}${coin.market_data.low_24h[curr]}`}
                        />

                        <Box w={"full"} p={4}>

                            <Item title={"MAX SUPPLY"} value={coin.market_data.max_supply} />
                            <Item
                                title={"CIRCULATING SUPPLY"}
                                value={coin.market_data.circulating_supply} 
                            />
                            <Item
                                title={"MARKET CAP"}
                                value={`${currSymbol}${coin.market_data.market_cap[curr]}`} 
                            />
                            <Item
                                title={"All Time Low"}
                                value={`${currSymbol}${coin.market_data.atl[curr]}`} 
                            />
                            <Item
                                title={"All Time High"}
                                value={`${currSymbol}${coin.market_data.ath[curr]}`} 
                            />

                        </Box>

                    </VStack>

                </>
                )
            }

        </Container>
        )
    
}

const CustomBar = ({low, high}) => {
    return(
        <VStack w={"full"}>
            <Progress value={"50"} colorScheme={"teal"} w={"full"}/>
            <HStack justifyContent={"space-between"} w={"full"}>
                <Badge children={low} colorScheme={"red"}/>
                <Text fontSize={"sm"}>24H Range</Text>
                <Badge children={high} colorScheme={"green"}/>
            </HStack>
        </VStack>
    );
}

const Item = ({title, value}) => {
    return(
        <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
            <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>{title}</Text>
            <Text>{value}</Text>
        </HStack>
    );
}

export default CoinInfo;