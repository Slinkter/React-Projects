export default function Item(props) {
    const { item, onHandlePinned, onHandleSelectNote, index, actualIndex } =
        props;

    function handleSelectNote(item, e) {
        onHandleSelectNote(item, e);
    }

    function handlePinned(item, index) {
        onHandlePinned(item, index);
    }

    const styleDiv = index === actualIndex ? "note activeNote" : "note"

    return (
        <div
            key={item.id}
            className={styleDiv}
            onClick={(e) => handleSelectNote(item, e)}
        >
            <div>
                {item.title === ""? "[Sin título]": item.title.substring(0, 20)}
            </div> 
            <div>
                <button
                    className="pinButton"
                    onClick={() => handlePinned(item, index)}
                >
                    {item.pinned ? "Pinned" : "Pin"}
                </button>
            </div>
        </div>
    );
}
