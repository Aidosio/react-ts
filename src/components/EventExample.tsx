import React, {FC, useRef, useState} from 'react';

interface EventExampleProps {
}

const EventExample: FC<EventExampleProps> = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<Boolean>( false)
    const inputRef = useRef<HTMLInputElement>( null)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag')
    }

    function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(true)
    }

    function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
    }

    function dropHandler(e: React.DragEvent<HTMLDivElement>) {
        e.preventDefault()
        setIsDrag(false)
        console.log('Drop')
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text" placeholder='Тут инпут 1' />
            <input ref={inputRef}  type="text" placeholder='Тут инпут 2' />
            <button onClick={clickHandler}>Нажми на меня сучка</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}} />
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 20}}
            />
        </div>
    );
};

export default EventExample;