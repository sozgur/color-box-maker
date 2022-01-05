import "./Box.css";

const Box = ({ id, backgroundColor, width, height, remove }) => {
    return (
        <>
            <div
                className="Box"
                style={{
                    background: backgroundColor,
                    width: `${width}em`,
                    height: `${height}em`,
                }}
            >
                <button className="remove" onClick={() => remove(id)}>
                    X
                </button>
            </div>
        </>
    );
};

export default Box;
