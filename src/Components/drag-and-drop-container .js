import React from 'react';
import {DropTarget} from "./drop-target";
import {Draggable} from "./draggable";
import {listImages} from "../testData";
import {useSelector} from "react-redux";

const DragAndDropContainer = () => {

    const [elements, setElements] = React.useState([]);
    const [draggedElements, setDraggedElements] = React.useState([]);

    // Получим все доски из хранилища
    const boards = useSelector(state => state.boardList.boards)

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
        <article className="container">
            {
                // Отрисуем каждую доску и передадим её название в качестве пропса
                boards.map((item, i) => (
                    <DropTarget key={i} board={item} />
                ))
            }

        </article>
    );
};

export default DragAndDropContainer;