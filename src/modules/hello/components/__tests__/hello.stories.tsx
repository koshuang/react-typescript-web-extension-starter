import { Story } from "@src/modules/dev";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Hello } from "../component";

// // // //

storiesOf("Hello", module).add("renders", () => {
    return (
        <Story>
            <Hello />
        </Story>
    );
});
