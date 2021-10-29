import "./styles.css";

import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import React from "react";
import {DropTarget} from "./Components/drop-target";
import {Draggable} from "./Components/draggable";
import {listImages} from "./testData";


const App = () => {
    const [elements, setElements] = React.useState([]);
    const [draggedElements, setDraggedElements] = React.useState([]);

    React.useEffect(() => {
        setElements([
            // При монтировании компонента добавляем в elements захардкоженные данные
            ...listImages
        ]);
    }, []);

    const onDropHandler = (item) => {

        if (item.source === "2")
            return

        setDraggedElements([...draggedElements, item.data]);
        setElements(elements.filter((elem) => elem.id !== item.data.id));
    };
    const onDropToHomeHandler = (item) => {

        if (item.source === "1")
            return

        setElements([...elements, item.data]);
        setDraggedElements(draggedElements.filter((elem) => elem.id !== item.data.id));
    };
    return (
        <DndProvider backend={HTML5Backend}>
            <article className="container">
                <DropTarget source="1" onDropHandler={onDropToHomeHandler}>

                    {elements.map((emoji) => (
                        <Draggable key={emoji.id} data={{data: emoji, source: "1"}}/>
                    ))}

                </DropTarget>


                <DropTarget source="2" onDropHandler={onDropHandler}>
                    {draggedElements.map((emoji) => (
                        <Draggable key={emoji.id} data={{data: emoji, source: "2"}}/>
                    ))}
                </DropTarget>

            </article>
        </DndProvider>
    );
};


export default App;
