import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

addDecorator((story, context) => withInfo("")(story)(context));

function loadStories() {
  require("../src/stories");
}

configure(loadStories, module);
