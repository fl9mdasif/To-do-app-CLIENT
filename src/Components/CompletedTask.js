import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completedTasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/completetasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, [])
    return (
        <div className='text-center'>
            <h3>This is  completed task Route</h3>
            <div className='list-none'>
                {
                    completedTasks.map((cTask, index) => <li className="list none">{index + 1}. {cTask.taskDetails}</li>)
                }
            </div>
        </div>
    );
};

export default CompletedTask;