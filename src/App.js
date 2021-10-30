import "./styles.css";

import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import React from "react";
import DragAndDropContainer from "./Components/drag-and-drop-container ";

const App = () => {

    return (
        <DndProvider backend={HTML5Backend}>
            <DragAndDropContainer/>
        </DndProvider>
    );
};


export default App;
