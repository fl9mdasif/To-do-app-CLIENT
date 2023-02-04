// import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const SingleTask = ({ task, index, refetch }) => {
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

        //for completed task 
        const url = `https://to-do-server-gva2.onrender.com/completetasks`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('tasks completed successfully')
                deleteTask(id)
                refetch()
            })
        navigate('/completed-task')
    };

    const deleteTask = (id) => {
        const proceed = window.confirm('Are you sure to delete product');
        if (proceed) {
            const url = `https://to-do-server-gva2.onrender.com/tasks/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('tasks deleted successfully')

                    // console.log(data)
                    // window.location.reload();
                    refetch()
                })
        }
    };


    //update tasks details
    const updateTask = (id) => {
        const proceed = window.confirm('Are you sure to update product');
        if (proceed) {

            refetch()
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