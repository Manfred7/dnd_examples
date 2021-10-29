import "./styles.css";

import {HTML5Backend} from "react-dnd-html5-backend";
import {DndProvider} from "react-dnd";
import React from "react";
import {DropTarget} from "./Components/drop-target";
import {Draggable} from "./Components/draggable";

const listImages = [
    {
        id: 1,
        content: '😁'
    },
    {
        id: 2,
        content: '🎩'
    }
    ,
    {
        id: 3,
        content: '👁'
    }
    ,
    {
        id: 4,
        content: '😎'
    },
    {
        id: 5,
        content: '😁'
    },
    {
        id: 6,
        content: '🎩'
    }
    ,
    {
        id: 7,
        content: '👁'
    }
    ,
    {
        id: 8,
        content: '😎'
    },
    {
        id: 11,
        content: '😁'
    },
    {
        id: 12,
        content: '🎩'
    }
    ,
    {
        id: 13,
        content: '👁'
    }
    ,
    {
        id: 14,
        content: '😎'
    },
    {
        id: 15,
        content: '😁'
    },
    {
        id: 16,
        content: '🎩'
    }
    ,
    {
        id: 17,
        content: '👁'
    }
    ,
    {
        id: 18,
        content: '😎'
    }

];


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
        setDraggedElements([...draggedElements, item]);

        setElements(elements.filter((elem) => elem.id !== item.id));
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <article className="container">
                <div className="draggable-elements">
                    {elements.map((emoji) => (
                        <Draggable key={emoji.id} data={emoji} />
                    ))}
                </div>

                <div className="dropped-elements">
                    <DropTarget onDropHandler={onDropHandler}>
                        {draggedElements.map((item) => (
                            <div key={item.id} className="dropped-element">
                                <span>{item.content}</span>
                            </div>
                        ))}
                    </DropTarget>
                </div>
            </article>
        </DndProvider>
    );
};




export default App;
