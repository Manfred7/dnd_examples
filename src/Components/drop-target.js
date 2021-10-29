import React from "react";
import { useDrop } from "react-dnd";

export const DropTarget = (props) => {
    const { children, onDropHandler } = props;
    const [{ isOver }, dropRef] = useDrop({
        accept: "emoji",
        drop(item) {
            onDropHandler(item);
        },
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    });

    const borderColor = isOver ? "#f00" : "#000";

    return (
        <div ref={dropRef} className="drop-target" style={{ borderColor }}>
            {children}
        </div>
    );
};
