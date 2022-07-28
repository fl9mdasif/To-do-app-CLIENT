// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';


const SingleTask = ({ task, index }) => {
    const navigate = useNavigate()
    const [user] = useAuthState(auth);
    const userEmail = user.reloadUserInfo.email;
    const { _id, taskDetails } = task;

    const d = new Date();
    const date = d.getDate();
    const month = d.getMonth();
    const year = d.getFullYear()
    const dateTime = `${date}/${month}/${year}`

    const CompletedTask = (id) => {
        // console.log('id', _id)
        const task = {
            taskDetails: taskDetails,
            email: userEmail,
            time: dateTime
        }
        console.log(task)


        const url = `https://thawing-beach-59024.herokuapp.com/completetasks`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                deleteTask(id)

                // toast('Product added to Dashboard Page')

            })
        navigate('/completed-task')
    };






    const deleteTask = (id) => {
        // const proceed = window.confirm('Are you sure to delete product');
        // if (proceed) {
        const url = `https://thawing-beach-59024.herokuapp.com/tasks/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                window.location.reload();

                // allTasks(data)
                // toast('product deleted from my order');
            })
        // }
    };

    const updateTask = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://thawing-beach-59024.herokuapp.com/tasks${id}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    // console.log(data)

                })

            navigate(`/to-do-task/${id}`)
        }
    };


    return (
        <tr className="">
            <td className=""> {index + 1}</td>
            <td className=''>{task.taskDetails}</td>
            <td>{task.taskDate}</td>
            <td className=" flex flex-wrap">
                <button onClick={() => updateTask(_id)} className='text-text hover:bg-head rounded-xl pl-1  b-green  '><box-icon color='blue' type='solid' size='' name='pencil'></box-icon></button>
                <button onClick={() => CompletedTask(_id)} className='text-text hover:bg-head  rounded-xl pl-1  b-green  '><box-icon type='solid' color='green' name='check-circle'></box-icon>
                </button>
                <button onClick={() => deleteTask(_id)} className='text-text hover:bg-head  pl-1 text- bred '><box-icon color='red' name='trash-alt'></box-icon>
                </button>
            </td>

        </tr>

    );
};

export default SingleTask;