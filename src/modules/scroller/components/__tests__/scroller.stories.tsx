import { Story } from "@src/modules/dev";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Scroller } from "../component";

// // // //

storiesOf("Scroller", module).add("renders", () => {
    return (
        <Story>
            <Scroller />
        </Story>
    );
});
