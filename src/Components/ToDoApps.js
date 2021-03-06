import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import SingleTask from './SingleTask';


const ToDoApps = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    // const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://thawing-beach-59024.herokuapp.com/tasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, [])

    const onSubmit = event => {

        const tasklist = event.tasklist;
        console.log(tasklist);
        reset();

        const task = {
            taskDetails: tasklist
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
                // toast('Product added to Dashboard Page')

            })
    }

    return (
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
                                <input className='btn w-full max-w-xs text-head bg-base' type="submit" value="Add To Task" />
                                <ToastContainer />
                            </div>
                        </form>
                    </div>
                </div>

            </div>
            <h2 className='text-2xl font-bold text-head  text-center p-5'> Added Tasks</h2>
            <div className="p-4">
                {
                    tasks.map((task, index) =>
                        <SingleTask
                            index={index}
                            task={task}
                            key={task._id}>
                        </SingleTask>)
                }
            </div>

        </div>

    );
};

export default ToDoApps;