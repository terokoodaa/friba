import React from "react";
import { storiesOf, action } from "@storybook/react";
import { decorate } from "@storybook/addon-actions";

import Counter from "../components/friba/Counter";
import CounterWithTitle from "../components/friba/CounterWithTitle";
import CourseSelector from "../components/friba/CourseSelector";
import SelectPlayers from "../components/friba/SelectPlayers";

import InputWithTitle from "../components/form/InputWithTitle";

const stories = storiesOf("Friba", module);

const players = [
  { name: "player", id: "1", selected: true },
  { name: "player2", id: "2", selected: false },
  { name: "player3", id: "3", selected: true }
];

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

stories.add("Create new game", () => (
  <div className="section has-text-centered">
    <h1 className="is-size-1">Create New game</h1>
    <InputWithTitle title="Name:" placeholder="Track name" />
    <div className="field is-horizontal">
      <div className="field-label" />
      <div className="field-body">
        <CounterWithTitle count="3" title="# of holes" />
      </div>
    </div>
    <hr />
    <CounterWithTitle count="3" title="hole 1" />
    <CounterWithTitle count="3" title="hole 2" />
    <CounterWithTitle count="3" title="hole 3" />
    <hr />
    <SelectPlayers players={players} onToggle={action("onToggle")} />
    <hr />
    <a className="button is-primary">Start new game</a>
  </div>
));

stories.add("Hole view", () => (
  <React.Fragment>
    <div className="section has-text-centered">
      <div className="field">
        <label className="label">Hole 1/18</label>
      </div>
      <CounterWithTitle count="10" title="player 1" />
      <CounterWithTitle count="-" title="player 2" />
      <CounterWithTitle count="3" title="player 3" />
    </div>
    <div className="section has-text-centered">
      <a className="button is-primary" style={{ margin: 8 }}>
        Previous
      </a>
      <a className="button is-primary" style={{ margin: 8 }}>
        Next
      </a>
      <CourseSelector holes="18" active="3" onSelect={action("onSelect")} />
    </div>
  </React.Fragment>
));
