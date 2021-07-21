import { Button, Divider } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React, { FunctionComponent } from "react";
import { browser, Tabs } from "webextension-polyfill-ts";
import "./styles.scss";

// // // //

// Scripts to execute in current tab
const scrollToTopScript = `window.scroll(0,0)`;
const scrollToBottomScript = `window.scroll(0,9999999)`;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    }),
);

/**
 * Executes a string of Javascript on the current tab
 * @param code The string of code to execute on the current tab
 */
function executeScript(code: string): void {
    // Query for the active tab in the current window
    browser.tabs
        .query({ active: true, currentWindow: true })
        .then((tabs: Tabs.Tab[]) => {
            // Pulls current tab from browser.tabs.query response
            const currentTab: Tabs.Tab | undefined = tabs[0];

            // Short circuits function execution is current tab isn't found
            if (!currentTab) {
                return;
            }

            // Executes the script in the current tab
            browser.tabs
                .executeScript(currentTab.id, {
                    code,
                })
                .then(() => {
                    console.log("Done Scrolling");
                });
        });
}

// // // //

export const Scroller: FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className="row">
            <div className="col-lg-12">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    onClick={(): void => executeScript(scrollToTopScript)}
                >
                    Scroll To Top
                </Button>
                <Divider />
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.margin}
                    onClick={(): void => executeScript(scrollToBottomScript)}
                >
                    Scroll To Bottom
                </Button>
            </div>
        </div>
    );
};
