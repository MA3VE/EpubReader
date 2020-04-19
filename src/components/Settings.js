import React, { Component } from "react";
import {
    Drawer,
    IconButton,
    ExpansionPanel,
    ExpansionPanelDetails,
    Typography,
    ExpansionPanelSummary,
    Grid,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import TextSizeSetting from "./TextSizeSetting";
import ThemeSetting from "./ThemeSetting";

class Chapters extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    toggleDrawer = () => {
        const { open } = this.state;
        this.setState({ open: !open });
    };

    render() {
        return (
            <div>
                <IconButton onClick={this.toggleDrawer}>
                    <SettingsIcon style={{ color: this.props.buttonColor }} />
                </IconButton>
                <Drawer
                    anchor="right"
                    onClose={this.toggleDrawer}
                    open={this.state.open}
                >
                    <Grid container style={{ maxWidth: "300px" }}>
                        <Grid item xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>Text Size</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <TextSizeSetting
                                        changeFontSize={
                                            this.props.changeFontSize
                                        }
                                        // {...console.log(
                                        //     this.props.changeFontSize
                                        // )}
                                        fontSize={this.props.fontSize}
                                    />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                        <Grid item xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography>Themes</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails
                                    style={{ alignItems: "center" }}
                                >
                                    <ThemeSetting
                                        changeTheme={this.props.changeTheme}
                                    />
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Grid>
                    </Grid>
                </Drawer>
            </div>
        );
    }
}

export default Chapters;
