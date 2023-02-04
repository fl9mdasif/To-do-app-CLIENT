import React from 'react';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from '@tanstack/react-query'


const CompletedTask = () => {
    // const [completedTasks, setTasks] = useState([]);
    const [user] = useAuthState(auth);
    const userEmail = user.reloadUserInfo.email;
    const myTasks = [];

    const { isLoading, error, data: completedTasks, refetch } = useQuery(['usersData'], () =>
        fetch('https://to-do-server-gva2.onrender.com/completetasks').then(res =>
            res.json())
    )
    if (isLoading) return 'Loading...'
    if (error) return 'An error has occurred: ' + error.message

    // single user task list
    // eslint-disable-next-line array-callback-return
    completedTasks.map(task => {
        // console.log(task.email,)
        if (task.email === userEmail) {
            myTasks.push(task)
        }
        else {
            // eslint-disable-next-line array-callback-return
            return;
        }
    });

    //delete completed tasks
    const deleteUser = (id) => {
        const proceed = window.confirm('Are you sure to delete user');
        if (proceed) {
            const url = `https://to-do-server-gva2.onrender.com/completetasks/${id}`;
            console.log(url)
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // alert('Delete')
                    // toast('deleted')
                    refetch()
                })
        }
    };

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
                            <th>Manage</th>
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
                                    <td>
                                        <button onClick={() => deleteUser(cTask._id)} className=' px-3 py-1 bg-white btn-xs '><box-icon color='red' name='trash-alt'></box-icon></button>

                                    </td>

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