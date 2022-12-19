import { Box } from "@chakra-ui/react";
import React from "react";
import VideoItem from "./VideoItem";


const VideoList = (props) =>{

    // console.log(props);
    const renderedList = props.videos.map((el) => {
        return <VideoItem onVideoSelect={props.onVideoSelect} key = {el.id.videoId} videos= {el}/>
    }) 

    return(
        <div className="ui relaxed divided list">
            <Box height={"90vh"} width={"container.3sm"}>
            {renderedList}
            </Box>
        </div>
    )
}


export default VideoList;