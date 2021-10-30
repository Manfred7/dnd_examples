import React from "react";
import { useDrag } from "react-dnd";

export const Draggable = (props) => {
    const { data } = props;

    const [{ isDrag }, dragRef] = useDrag({
        type: "emoji",
        item: data,
        collect: (monitor) => ({
            isDrag: monitor.isDragging()
        })
    });

    return (
        !isDrag && (
            <li ref={dragRef} className="draggable-element">
                {data.content}
            </li>
        )
    );
};

