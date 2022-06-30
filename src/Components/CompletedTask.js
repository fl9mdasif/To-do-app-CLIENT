import React, { useEffect, useState } from 'react';

const CompletedTask = () => {
    const [completedTasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/completetasks')
            .then(res => res.json())
            .then(results => setTasks(results))
    }, [])
    return (
        <div>
            <h3>This is  completed task Route</h3>
            {
                completedTasks.map(cTask => <li>{cTask.taskDetails}</li>)
            }
        </div>
    );
};

export default CompletedTask;