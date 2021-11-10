import React, { Component } from "react";
import logo from "../Rowan.png";
import "../styles/BlankHeader.css";
import { ChakraProvider } from "@chakra-ui/react"


export default class RegHeader extends Component {
    render() {
        return (
            <ChakraProvider>
            <div class="containerTop">
                <div className="top">
                    <h1 style={{color: "aliceblue"}}>Sign Up</h1>
                </div>
            </div>
            </ChakraProvider>
        )
    }
}
export {RegHeader}