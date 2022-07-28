import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const Update = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [updateTask, setUpdateTask] = useState([])
    const { taskID } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/tasks/${taskID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUpdateTask(data)
                console.log(data);
            })
    }, [taskID])


    const onSubmit = formInfo => {
        // formInfo.preventDefault();
        const { tasklist } = formInfo;
        const tasks = {
            taskDetails: tasklist
        }
        console.log('tasklist', tasklist);


        const url = `http://localhost:5000/tasks/${taskID}`;


        //put updateOne
        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(tasks),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
        navigate('/')
    }
    return (

        <div>
            <h1>update : {taskID}</h1>
            <p>{updateTask.taskDetails} h</p>

            <div>
                <div className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">Update User</div>

                <div className='flex  justify-center items-center'>
                    <div className="card w-96 bg-primary shadow-xl">
                        <div className="card-body pb-9">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-control w-full max-w-xs">

                                    <input
                                        defaultValue={updateTask?.taskDetails}
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
                                    <input className='btn w-full max-w-xs text-head bg-base' type="submit" value="Update" />
                                    {/* <ToastContainer /> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>

        </div>
    );
};

export default Update;