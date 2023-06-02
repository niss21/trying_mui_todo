import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import ListCom from './ListCom'

const ToDolist = () => {

    const [item, setItem] = useState("");
    const [newitem, setNewItem] = useState([]);
    
    const itemEvent = (event) => {
        setItem(event.target.value);
    };

    const listOfItems = () => {
        setNewItem((previousval) => {
            return [...previousval, item];
        });
        setItem("");
    };

    return (
        <>
        <div >
            <div >
                <br />
                <h1>ToDo list</h1>
                <br/>
                <input 
                type='text' 
                value={item} 
                placeholder = "Add an Item" 
                onChange={itemEvent} />

                <Button className='newBtn' onClick={listOfItems} >
                    <AddIcon/>
                </Button>

                <br />
                
                <ol>
                    {newitem.map((val, index) => {
                        return <ListCom key={index} text={val} />;
                    })}
                </ol>

            </div>
        </div>
        </>
    );
}

export default ToDolist