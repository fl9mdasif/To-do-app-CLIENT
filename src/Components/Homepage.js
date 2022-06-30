import React from 'react';
// import Calender from './Calender';
// import CompletedTask from './CompletedTask';
import ToDoApps from './ToDoApps';


const Homepage = () => {
    return (
        <div>
            <h2>This is Homepage</h2>
            <ToDoApps />
            {/* <Calender></Calender>
            <CompletedTask></CompletedTask> */}
        </div>
    );
};

export default Homepage;