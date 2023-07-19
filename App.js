// React.creatElement consist with "tag" "object" "what we want to put inside tag"
const heading = React.createElement("h1", {}, "This is React 🪶");

// console.log(heading); ---> It's a Object

const rt = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root

rt.render(heading);

// children 1
const heading1 = React.createElement(
  "h1",
  { id: "container" },
  "This is h1 tag from bodyContainer 😋"
);

// children 2
const heading2 = React.createElement(
  "h2",
  { id: "container" },
  "This is h2 tag from bodyContainer 😎"
);

// When we want to pass more than 1 tag
// 1st argument is tag name 2nd argument is attribute (Props) & 3rd argument is children
// Props is besically properties it can be anything like 'id' , 'class' or anything'
const bodyContainer = React.createElement("div", { id: "bodyContainer" }, [
  heading1,
  heading2,
]);

rt.render(bodyContainer);
