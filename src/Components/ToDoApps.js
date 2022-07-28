import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { ToastContainer } from 'react-toastify';
import SingleTask from './SingleTask';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import auth from '../firebase.config';
import { useAuthState } from 'react-firebase-hooks/auth';


const ToDoApps = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://thawing-beach-59024.herokuapp.com/tasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, []);

    const [user] = useAuthState(auth);
    const userEmail = user.reloadUserInfo.email;
    // console.log(userEmail)

    const myTasks = [];

    // eslint-disable-next-line array-callback-return
    tasks.map(task => {
        // console.log(task.email,)
        if (task.email === userEmail) {
            myTasks.push(task)
        }
        else {
            // eslint-disable-next-line array-callback-return
            return;
        }
    });
    // console.log('my tasks:', myTasks)

    const onSubmit = event => {

        const { tasklist, taskDate } = event;
        console.log(event)
        reset();

        const task = {
            taskDetails: tasklist,
            taskDate: taskDate,
            email: userEmail

        }
        const url = `https://thawing-beach-59024.herokuapp.com/tasks`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(task)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                window.location.reload();
            })
    }

    const [selected, setSelected] = useState(new Date());
    let footer = <p>Please pick a day.</p>;
    let date = format(selected, 'PP')
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <div className="flex justify-evenly flex-wrap">

            <div className=" ">
                <h3 className="text-2xl font-bold text-head  text-center p-5">This is Calender </h3>
                <div className="flex justify-center text-text">
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}
                        footer={footer}
                    />
                </div>

            </div>
            <div>
                <div className='my-2 py-2 flex h-auto justify-center '>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">

                            <h2 className="text-center text-head mb-5 text-2xl font-bold">Add your Important Task</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">

                                    <input
                                        type="text"
                                        placeholder="Add a single task"
                                        className="input input-bordered w-full max-w-lg"
                                        {...register("tasklist", {
                                            required: {
                                                value: true,
                                                message: 'Task is required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue={date}
                                        placeholder="Select a date from calender"
                                        className="input input-bordered w-full max-w-lg"
                                        {...register("taskDate", {
                                            required: {
                                                value: true,
                                                message: 'taskDate is required'
                                            }
                                        })}
                                    />
                                    <label className="label">
                                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                    </label>
                                    <input className='btn w-full max-w-xs text-head bg-base' type="submit" value="Add To Task" />
                                    <ToastContainer />
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
                <h2 className='text-2xl font-bold text-head  text-center p-5'> Added Tasks</h2>
                <div className="p-4">
                    <table class="table border w-full">
                        <thead>
                            <tr className='' >
                                <th>No.</th>
                                <th>Tasks</th>
                                <th>Schedule</th>
                                <th>Manage</th>
                            </tr>

                        </thead>
                        <tbody >

                            {
                                myTasks.map((task, index) =>
                                    <SingleTask
                                        index={index}
                                        task={task}
                                        key={task._id}>
                                    </SingleTask>

                                )

                            }

                        </tbody >
                    </table>
                </div>
            </div>


        </div>

    );
};

export default ToDoApps;