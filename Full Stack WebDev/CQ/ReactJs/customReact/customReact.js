function customRender(reactElement, container) {
  
  // const domElement = document.createElement(reactElement.type);
  // domElement.innerHTML = reactElement.children;
  // domElement.setAttribute("href", reactElement.props.href);
  // domElement.setAttribute("target", reactElement.props.target);

  // container.appendChild(domElement);
  

  reactElement.forEach((element) => {
    const domElement = document.createElement(element.type);
    domElement.innerHTML = element.children;

    Object.keys(element.props).forEach((prop) => {
      if (prop !== "children") {
        domElement.setAttribute(prop, element.props[prop]);
      }
    });

    container.appendChild(domElement);
  });
}

const elementsToRender = [
  {
    type: "a",
    props: {
      href: "https://google.com",
      target: "_blank",
    },
    children: "Click me to visit google",
  },
  {
    type: "h1",
    props: {},
    children: "Hello World",
  },
  {
    type: "p",
    props: {},
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro facilis quisquam illum nostrum quas blanditiis maiores doloremque tempora. Tempora fuga optio voluptatum blanditiis sint quas, rem distinctio temporibus sed amet!",
  },
];

const mainContainer = document.querySelector("#root");

customRender(elementsToRender, mainContainer);


