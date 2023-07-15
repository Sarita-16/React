// React.creatElement consist with "tag" "object" "what we want to put inside tag"
const heading = React.createElement("h1", {}, "This is React 🪶");

// console.log(heading); ---> It's a Object

const rt = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root

rt.render(heading);

const heading1 = React.createElement(
  "h1",
  { id: "container" },
  "This is h1 tag from bodyContainer 😋"
);

const heading2 = React.createElement(
  "h2",
  { id: "container" },
  "This is h2 tag from bodyContainer 😎"
);

const bodyContainer = React.createElement("div", { id: "bodyContainer" }, [
  heading1,
  heading2,
]);

rt.render(bodyContainer);
