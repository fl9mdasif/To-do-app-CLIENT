import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';


const ToDoApps = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = event => {
        // event.preventDefault();

        const tasklist = event.tasklist;

        console.log(tasklist);





        // console.log('update done',);
        // navigate('/home');
        // console.log(data);
        toast('check your mail and verify your email')
        reset();
    }
    return (

        <div className='my-2 py-2 flex h-auto justify-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold">Add your Important Task</h2>
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
                            <input className='btn w-full max-w-xs text-white' type="submit" value="Add Task" />
                            <ToastContainer />
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ToDoApps;