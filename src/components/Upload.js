import React, { Component } from "react";
import { Button, Grid, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

export class Upload extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleOnChange = (event) => {
        // console.log(this.props.getBook);
        // console.log(e.target.files[0].type === "application/epub+zip");
        if (event.target.files[0].type === "application/epub+zip") {
            let reader = new FileReader();
            reader.readAsArrayBuffer(event.target.files[0]);

            reader.onload = () => {
                // console.log(reader.result);
                this.props.getBook(reader.result);
                // console.log(this.props.getBook);
            };
        } else {
            alert("Only .epub Files are supported");
        }
    };

    render() {
        return (
            <Grid
                container
                direction="column"
                justify="space-around"
                alignItems="center"
            >
                <Grid item>
                    {/* <Typography>Upload a Epub book To Read</Typography> */}
                    <h1>Upload a Epub book To Read</h1>
                </Grid>
                <Grid item>
                    <input
                        // accept="image/*"
                        // className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        style={{ display: "none" }}
                        onChange={this.handleOnChange}
                    />
                    <label htmlFor="contained-button-file">
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            size="large"
                            style={{ width: "300px", fontSize: "30px" }}
                        >
                            Upload
                        </Button>
                    </label>
                </Grid>

                <Grid item>
                    <IconButton href="https://github.com/" size="'medium">
                        <GitHubIcon
                            style={{ width: "100px", height: "200px" }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
        );
    }
}

export default Upload;
