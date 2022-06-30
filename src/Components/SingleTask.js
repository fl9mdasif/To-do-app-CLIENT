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
            <div className='flex justify-center'>
                {/* <input onChange={() => CompletedTask(_id)} type="checkbox" name="checkbox" id="" /> */}

                <li className='pl-2 list-none'>{index + 1}. {task.taskDetails}</li>
                <button onClick={() => CompletedTask(_id)} className='btn btn-xs rounded-xl  bg-green-800  '>+
                </button>
                <button onClick={() => deleteTask(_id)} className='btn btn-xs text- bg-red-800 '>Delete
                </button>
            </div>
        </>

    );
};

export default SingleTask;