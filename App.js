import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "h1", 
    {id: "parent"}, 
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "I am an h1 tag"), 
        React.createElement("h2", {}, "I am an h2 tag")]));

console.log(parent);


//jsx -> javascript xml - this is not undestood by the browser - it is understood by the transpiler done by babel - it is a syntactic sugar
// jsx is transpile to React.createElement via babel- later this is HTMLElement via render
const jsxParent = <h1 className="parent">Hello from JSX Parent</h1>;

console.log(jsxParent);

//React Component - a function that returns a jsx
//2 types -> class based and functional component
//class based component - stateful component
//functional component - stateless component

//functional component
const HeadingComponent = () => {
    return <h1 className="heading">Hello from Heading Component</h1>;
}
console.log(HeadingComponent);


//how to write component inside a component (ordering of code of component code does not matter)

const ChildComponent = () => {
    return (
        <div>
            <h1>Hello from Child Component</h1>
        </div>
    );
}

const ParentComponent1 = () => {
    return (
        <div>
            <h1>Hello from Parent Component1</h1>
            <ChildComponent />
        </div>
    );
}

//running js and putting react element in component
const ParentComponent2 = () => {
    const name = "John"; //js variable
    const element = <h1>Hello from Parent Component 2</h1>; //react element
    return (
        <div>
            {element}
            <ChildComponent />
            <h2>{name}</h2>
        </div>
    );
}

//putting component in element (here ordering matters, the component should be defined before the element)
const element2 = (
    <div>
        <ParentComponent1 />
        <ParentComponent2 />
    </div>
);

//different ways to write component inside  a component
const ParentComponent4 = () => {
    return (
        <div>
            <h1>Hello from Parent Component4</h1>
            <ChildComponent />
            {ChildComponent()}
            <ChildComponent></ChildComponent>
        </div>
    );
}

const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
const root3 = ReactDOM.createRoot(document.getElementById("root3"));
const root4 = ReactDOM.createRoot(document.getElementById("root4"));
const root5 = ReactDOM.createRoot(document.getElementById("root5"));
//how to render an element
root1.render(parent);

//how to render an element with jsx
root2.render(jsxParent);

//how to render a component
// root3.render(<ParentComponent1 />);
// root4.render(<ParentComponent2 />);
// root5.render(element2);
root4.render(<ParentComponent4 />);