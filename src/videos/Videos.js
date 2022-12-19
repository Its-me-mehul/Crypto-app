import React from "react";
import SearchBar from './SearchBar';
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "./api/youtube";
import { HStack, VStack } from "@chakra-ui/react";

class App extends React.Component
{
    state ={videos: [], selectedVideo: null}

    componentDidMount(){
        this.onSearchApp('crypto currency');
    }

    onSearchApp = async (term) =>{
        // console.log(term);

        const response = await youtube.get('/search', {
            params:{
                q: term
            }
        });

        this.setState({videos: response.data.items,
        selectedVideo: response.data.items[0]});

    }

    onVideoSelect = (video) =>{

        this.setState({selectedVideo: video})

    }

    render(){

        return(

            // <div className="ui container" style={{margin:'10px'}}>
                <VStack>
                    <SearchBar onSearchApp = {this.onSearchApp}/>
                    <HStack>
                        <VideoDetail video = {this.state.selectedVideo}/>
                        <VideoList onVideoSelect={this.onVideoSelect} videos ={this.state.videos}/>
                    </HStack>

                </VStack>
                
            //     {/* <div className="ui grid">
            //         <div className="ui row">
            //             <div className="eleven wide column">
            //                 <HStack>
                            
            //             </div>
            //             <div className="five wide column">
                            
            //                 <HStack/>
            //             </div>
            //         </div>
            //     </div>
            //     <VStack/>
            // </div> */}
        )
    }
}

export default App;