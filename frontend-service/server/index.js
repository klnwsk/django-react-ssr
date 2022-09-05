import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as ReactDOMServer from "react-dom/server";
import React from 'react'
import { App } from "../client/src/App";
const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("There is nothing here go to /render");
});

app.post("/render", (req, res) => {
  //Server Side Rendering of React App
  const data = req.body;
  const htmlString = getHomePage(data);
  res.json({
    html: htmlString,
  });
});

app.listen(port, () => {
  console.log(`Server starting at http://localhost:${port}`);
});

export const getHomePage = (data) => {
  const html = ReactDOMServer.renderToString(<App data={data} />);
  const response_html = `<div id="home-component-react">${html}</div>`;
  return response_html;
};
