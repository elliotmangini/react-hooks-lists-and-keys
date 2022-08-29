import React from "react";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <ColorList />
    </div>
  );
}

export default App;


// got it

// SO FAR THE FLOW OF THINGS WE LEARNED TODAY:

// React uses components declared through either function or class syntax in a tree-like structure to dynamically render html elements to the DOM. Props are objects containing data the elements will use which we pass from parent to child and label along the way so that code can be reused. When our props include arrays of objects of indeterminant length we use map to first convert each item to JSX and store it in an array of JSX objects. Then we plug that evaluated variable in just as we would a single component.