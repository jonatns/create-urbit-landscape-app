const _jsxFileName = "/root/urbit-v0.10.7-linux64/mipnus-mortem/urbit-todo/src/index.js";import React from 'react';
import ReactDOM from 'react-dom';
import { Root } from '/components/root';
import { api } from '/api';
import { store } from '/store';
import { subscription } from "/subscription";

api.setAuthTokens({
  ship: window.ship
});

window.urb = new window.channel();

subscription.start();

ReactDOM.render((
  React.createElement(Root, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 17}} )
), document.querySelectorAll("#root")[0]);
