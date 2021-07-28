import { Story } from "@modules/dev";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Popup } from "../component";

// // // //

storiesOf("Popup", module).add("renders", () => {
    return (
        <Story>
            <Popup />
        </Story>
    );
});
