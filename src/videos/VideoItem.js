import React from "react";

import './VideoItem.css';

const VideoItem = (props) =>{

    const target = props.videos.snippet;        //this value was repetative


    return(
        <div className="video-item item" onClick={() => props.onVideoSelect(props.videos)}>
            <img className="ui image" src={target.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">
                    {target.title}
                </div>
            </div>
            
        </div>

    );
}


export default VideoItem;