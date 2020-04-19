import React, { Component } from "react";
import { Grid } from "@material-ui/core";
// import Book from "../reached.epub";
import { EpubView } from "react-reader";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";
import Upload from "./Upload";
import logo from "./loader.gif";

class Reader extends Component {
    constructor(props) {
        super(props);
        this.readerRef = React.createRef();
        this.state = {
            rendition: null,
            height: 0,
            width: 0,
            toc: [],
            fontSize: 12,
            buttonColor: "grey",
            book: undefined,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    next = () => {
        const node = this.readerRef.current;
        node.nextPage();
    };

    prev = () => {
        const node = this.readerRef.current;
        node.prevPage();
    };

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener("resize", this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    getRendition = (rendition) => {
        this.setState({ rendition });
        if (rendition) {
            rendition.themes.register("night", { body: { color: "#A1A1A1" } });
            rendition.themes.register("night-contrast", {
                body: { color: "#FFFFFF" },
            });
            rendition.themes.register("sepia", { body: { color: "#644D32" } });
            rendition.themes.register("sepia-contrast", {
                body: { color: "#000000" },
            });
            rendition.themes.register("console", {
                body: { color: "#008000" },
            });
            rendition.themes.register("day", {
                body: { color: "black" },
            });
        }
        // console.log(rendition.getContents());
    };

    locationChanged = (pages) => {
        // console.log(pages);
    };

    tocChanged = (toc) => {
        // console.log("toc:", toc);
        this.setState({ toc });
    };

    // changeText = () => {
    //     // console.log(this.state.rendition.themes);
    // };

    changeTheme = (value) => {
        this.state.rendition.themes.select(value);
        switch (value) {
            case "night": {
                document.body.style.backgroundColor = "black";
                break;
            }
            case "night-contrast": {
                document.body.style.backgroundColor = "black";
                break;
            }
            case "sepia": {
                document.body.style.backgroundColor = "#F5DEB3";
                break;
            }
            case "sepia-contrast": {
                document.body.style.backgroundColor = "#F5DEB3";
                break;
            }
            case "console": {
                document.body.style.backgroundColor = "black";
                break;
            }
            case "day": {
                document.body.style.backgroundColor = "white";
                break;
            }
            default:
                document.body.style.backgroundColor = "white";
        }
    };

    changeFontSize = (fontSize) => {
        this.state.rendition.themes.fontSize(fontSize + "px");
        this.setState({ fontSize });
    };

    // changeFont = (font) => {
    //     this.state.rendition.themes.font(font);
    // };

    getBook = (Book) => {
        this.setState({ Book });
        // console.log(Book);
    };

    render() {
        const { Book } = this.state;
        return Book ? (
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
            >
                <Grid item xs={1}>
                    <LeftSide
                        prev={this.prev}
                        height={this.state.height}
                        toc={this.state.toc}
                        rendition={this.state.rendition}
                        buttonColor={this.state.buttonColor}
                    />
                </Grid>

                <Grid item xs={10} style={{ height: this.state.height - 30 }}>
                    <EpubView
                        url={this.state.Book}
                        ref={this.readerRef}
                        loadingView={
                            <div
                                style={{
                                    position: "absolute",
                                    top: "50%",
                                    left: "10%",
                                    right: "10%",
                                    color: "#ccc",
                                    textAlign: "center",
                                    margintop: "-.5em",
                                }}
                            >
                                <img src={logo} alt="loading..." />
                            </div>
                        }
                        locationChanged={this.locationChanged}
                        getRendition={this.getRendition}
                        tocChanged={this.tocChanged}
                    />
                </Grid>

                <Grid item xs={1}>
                    <RightSide
                        next={this.next}
                        height={this.state.height}
                        changeFontSize={this.changeFontSize}
                        fontSize={this.state.fontSize}
                        changeTheme={this.changeTheme}
                        changeFont={this.changeFont}
                        buttonColor={this.state.buttonColor}
                    />
                </Grid>
            </Grid>
        ) : (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                style={{ height: this.state.height - 30 }}
            >
                <Grid item>
                    <Upload getBook={this.getBook} />
                </Grid>
            </Grid>
        );
    }
}

export default Reader;
