
const parent = React.createElement(
    "div",
    {id: "parent"},
    React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h1",{},"im an h2 tag")
    ]),

    React.createElement(
        "div",
        {id:"child"},
       [ React.createElement("h1",{},"im an h1 tag"),
        React.createElement("h1",{},"im an h2 tag")
    ]),
      console.log(mohamad roshan)
);
console.log(parent)
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);