import React from 'react';
import {DropTarget} from "./drop-target";
import {useSelector} from "react-redux";

const DragAndDropContainer = () => {

    // Получим все доски из хранилища
    const boards = useSelector(state => state.boardList.boards)

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