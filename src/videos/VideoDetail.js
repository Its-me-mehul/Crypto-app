import { Box, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import Loader from '../Loader';


const VideoDeatil = (props) =>{

    if(!props.video) 
    {
        return <Loader />
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return(

        <div>
        <div className='ui embed'>
            <Box height={"80vh"} width={"100vh"} m={6}>
                <iframe alt='Video Player' src={videoSrc} height="100%" width={"100%"}/>
            </Box>
        </div>
        <div className='ui segment'>
            <VStack m={6} alignItems={"flex-start"}>
            <Text fontWeight={"bold"}>{props.video.snippet.title}</Text>
            <p>{props.video.snippet.description}</p>
            </VStack>
        </div>
        </div>
    );
}


export default VideoDeatil;