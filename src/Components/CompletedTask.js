import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completedTasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('https://thawing-beach-59024.herokuapp.com/completetasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, [])
    return (
        <div className='text- text-center'>
            <h3 className='text-2xl font-bold text-text  text-center p-5'>All my completed task </h3>
            <div className='list-none'>
                {
                    completedTasks.map((cTask, index) => <li className="text-text"><span className='text-green'>{index + 1}.</span> {cTask.taskDetails}</li>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;