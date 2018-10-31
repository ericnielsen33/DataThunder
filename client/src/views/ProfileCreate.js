import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { withStyles, Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
    layout: {
        width: "auto",
        display: "block", // Fix IE11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto"
        }
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
            .spacing.unit * 3}px`
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.primary.main
    },
    form: {
        width: "100%", // Fix IE11 issue.
        marginTop: theme.spacing.unit
    },
    submit: {
        marginTop: theme.spacing.unit * 3
    }
});


@inject(["userStore"])
@observer
class ProfileCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: null,
            pager: "",
            mobile: "",

        };
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        const { level, pager, mobile } = this.state;
        console.log(this.props);
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography variant="headline">Create resident Profile</Typography>
                        <form className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Level</InputLabel>
                                <Input
                                    id="level"
                                    name="level"
                                    value={this.state.level}
                                    onChange={this.handleOnChange}
                                    autoFocus
                                />
                            </FormControl>

                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Pager</InputLabel>
                                <Input
                                    name="pager"
                                    type="pager"
                                    id="pager"
                                    value={this.state.pager}
                                    onChange={this.handleOnChange}
                                />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Mobile Phone</InputLabel>
                                <Input
                                    name="mobile"
                                    type="mobile"
                                    id="mobile"
                                    value={this.state.mobile}
                                    onChange={this.handleOnChange}
                                />
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="raised"
                                color="primary"
                                className={classes.submit}
                                onClick={this.handleFormSubmit}
                            >
                                New Profile
              </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(ProfileCreate);
