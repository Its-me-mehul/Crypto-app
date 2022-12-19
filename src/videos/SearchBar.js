import { HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

class SearchBar extends React.Component{

    state ={term : ''};

    onFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.term)

        this.props.onSearchApp(this.state.term);
    }
    

    render(){


        return(
            <div className="ui segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
                    <HStack mt={4}>
                        <Text fontWeight={"bold"}>Search</Text>
                        <Input value = {this.state.term} onChange={(e) => this.setState({term: e.target.value})} placeholder="Type here!" w={"xl"}/>
                    </HStack>
            </form>
            </div>
        )
    }
}


export default SearchBar;