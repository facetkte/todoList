import React, { useState, useEffect, useRef } from 'react'

const AddList = (props) => {
    //新增到List
    const [newList, setNewList] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        //載入時focus在input
        inputRef.current.focus();
    }, []);

    const handleAddList = () => {
        //確認有資料才新增，用時間排序
        if (newList.trim() !== "") {
            const newListItem = {
                text: newList,
                completed: false,
                id: Date.now(),
            };

            props.onAddList(newListItem);
            //清空
            setNewList("");
            //focus到輸入框
            inputRef.current.focus();
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddList();
        }
    }

    return (
        <div className='fixed bottom-12 z-10 w-[90%] mx-[5%]'>
            <h4 className='pb-2 text-body-large text-blue-4'>Add to list</h4>
            <div className='flex'>
                <input
                    className='w-full pl-2 text-body-large text-gray-500'
                    type="text"
                    value={newList}
                    onChange={(e) => setNewList(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Press Enter"
                    ref={inputRef}
                />
                <button className='button-add' onClick={handleAddList}>+</button>
            </div>
        </div>
    )
}

export default AddList