import React, { Component } from "react";
import { Button } from "@material-ui/core";
class Test extends Component {
    // handleUpload = (event) => {
    //     console.log(event.target.files[0].type);
    // };
    constructor(props) {
        super(props);

        this.state = {
            array: [1, 2, 3, 4, 5],
        };
    }

    render() {
        return (
            <React.Fragment>
                {/* {/* <Button value="name" onClick={this.handleClick}>
                    name
                </Button> */}
                {/* <input type="file" onChange={this.handleUpload}></input>  */}
                {/* {this.state.array.map((res, i) => console.log(res, i))} */}
                {/* <h1>wassup</h1> */}
            </React.Fragment>
        );
    }
}

export default Test;
