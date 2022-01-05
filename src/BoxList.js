import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const INITIAL_STATE = [];
    const [boxes, setBoxes] = useState(INITIAL_STATE);

    const addBox = (newBox) => {
        setBoxes([...boxes, { ...newBox, id: uuidv4() }]);
    };

    const removeBox = (id) => {
        setBoxes(boxes.filter((box) => id !== box.id));
    };

    return (
        <>
            <div>
                <NewBoxForm addBox={addBox} />
            </div>
            <div>
                {boxes.map(({ id, backgroundColor, width, height }) => (
                    <Box
                        key={id}
                        id={id}
                        backgroundColor={backgroundColor}
                        width={width}
                        height={height}
                        remove={removeBox}
                    />
                ))}
            </div>
        </>
    );
};

export default BoxList;
