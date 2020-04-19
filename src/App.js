import React, { Component } from "react";
import Reader from "./components/Reader";
// import Test from "./components/Test";
// import Upload from "./components/Upload";

export class App extends Component {
    render() {
        return (
            <div style={{ margin: 0 }}>
                {/* <Test /> */}
                <Reader />
                {/* <Upload /> */}
            </div>
        );
    }
}

export default App;
