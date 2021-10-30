import React from "react";
import {useDrop} from "react-dnd";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_TYPE} from "../services/actions/draggable";
import {Draggable} from "./draggable";

export const DropTarget = (props) => {
    const { board} = props;

    const dispatch = useDispatch();
    // Получим массив всех животных из хранилища
    const animals = useSelector(state => state.animalList.animals)

    const [{isOver}, dropRef] = useDrop({
        accept: "emoji",
        drop(item) {
            // Отправим экшен с текущим перетаскиваемым элементом и названием доски
            dispatch({
                type: UPDATE_TYPE,
                ...item,
                board
            });
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const borderColor = isOver ? "green" : "#000";

    return (
        <ul className="listTo" ref={dropRef} style={{borderColor}} >

            {animals
                // Получим массив животных, соответствующих целевому элементу
                .filter(animal => animal.board === board)
                // Отрисуем массив
                .map(animal => <Draggable key={animal.id} data={animal} />)
            }

        </ul>
    );
};
