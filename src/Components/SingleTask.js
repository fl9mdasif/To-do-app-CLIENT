// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SingleTask = ({ task, index }) => {
    const navigate = useNavigate()

    const { _id, taskDetails } = task;

    const CompletedTask = () => {
        // console.log('clicked')
        // console.log('id', _id)
        const task = {
            taskDetails: taskDetails
        }


        const url = `http://localhost:5000/completetasks`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                // toast('Product added to Dashboard Page')
            })
        navigate('/completed-task')
    };


    // const [allTasks, setTasks] = useState([])
    // useEffect(() => {
    //     fetch('http://localhost:5000/tasks')
    //         .then(res => res.json())
    //         .then(data => setTasks(data));
    // }, []);



    const deleteTask = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `http://localhost:5000/tasks/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    // allTasks(data)
                    // toast('product deleted from my order');
                })
        }
    };



    return (
        <>
            <div className='flex justify-center text-text '>
                {/* <input onChange={() => CompletedTask(_id)} type="checkbox" name="checkbox" id="" /> */}

                <li className='pl-2 list-none'><span className='text-head'>{index + 1}.</span> {task.taskDetails}</li>
                <button onClick={() => CompletedTask(_id)} className='text-text hover:bg-head btn btn-xs rounded-xl  bg-green  '>+
                </button>
                <button onClick={() => deleteTask(_id)} className='text-text hover:bg-head  btn btn-xs text- bg-red '>Delete
                </button>
            </div>
        </>

    );
};

export default SingleTask;