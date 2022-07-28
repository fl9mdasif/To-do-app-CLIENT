import React, { useEffect, useState } from 'react';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
const CompletedTask = () => {
    const [completedTasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);

    const userEmail = user.reloadUserInfo.email;
    // console.log(userEmail);

    const myTasks = [];

    // eslint-disable-next-line array-callback-return
    completedTasks.map(task => {
        console.log(task.email,)
        if (task.email === userEmail) {
            myTasks.push(task)
        }
        else {
            // eslint-disable-next-line array-callback-return
            return;
        }
    });
    // console.log('my tasks:', myTasks)
    useEffect(() => {
        fetch('https://thawing-beach-59024.herokuapp.com/completetasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, [])
    return (
        <div className='text- text-center'>
            <h3 className='text-2xl font-bold text-text  text-center p-5'>All my completed task </h3>
            <div className='list-none flex justify-center'>
                <table class="table border w-auto">
                    <thead>
                        <tr className='' >
                            <th>No.</th>
                            <th>Tasks Name</th>
                            <th>Schedule</th>
                            {/* <th>Manage</th> */}
                        </tr>

                    </thead>
                    <tbody >
                        {
                            myTasks.map((cTask, index) =>
                                <tr>
                                    <td>{index + 1} </td>
                                    <td>{cTask.taskDetails} ✅  </td>
                                    <td>{cTask.time}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompletedTask;