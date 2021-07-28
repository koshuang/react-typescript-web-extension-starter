import { ThemeProvider } from "@material-ui/core/styles";
import { Hello } from "@modules/hello";
import { Scroller } from "@modules/scroller";
import { theme } from "@styles/theme";
import React, { FunctionComponent } from "react";
import { browser } from "webextension-polyfill-ts";
import "./styles.scss";

// // // //

export const Popup: FunctionComponent = () => {
    // Sends the `popupMounted` event
    React.useEffect(() => {
        browser.runtime.sendMessage({ popupMounted: true });
    }, []);

    // Renders the component tree
    return (
        <ThemeProvider theme={theme}>
            <div className="popup-container">
                <div className="container mx-4 my-4">
                    <Hello />
                    <hr />
                    <Scroller />
                </div>
            </div>
        </ThemeProvider>
    );
};
