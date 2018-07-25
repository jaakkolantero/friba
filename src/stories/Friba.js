import React from "react";
import { storiesOf, action } from "@storybook/react";

import Counter from "../components/friba/Counter";
import CounterWithTitle from "../components/friba/CounterWithTitle";

const stories = storiesOf("Friba", module);

stories.add("Counter", () => (
  <Counter
    count="3"
    onIncrement={action("Increment")}
    onDecrement={action("Decrement")}
  />
));

stories.add("CounterWithTitle", () => (
  <CounterWithTitle
    count="3"
    title="player 1"
    onIncrement={action("Increment")}
    onDecrement={action("Decrement")}
  />
));
