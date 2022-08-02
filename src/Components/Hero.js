import React from 'react';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
    const onClick = (e) => {
        navigate('/to-do-task')
    }
    return (
        <div>
            <div class="hero min-h-screen" style={{
                backgroundImage: "url(https://toggl.com/blog/wp-content/uploads/2020/11/trello-vs-meistertask-940x563.jpg)"
            }}>
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 sm:text-xl text-white md:text-2xl lg:text-5xl font-bold">Welcome to TO-DO </h1>
                        <p class="text-white mb-5">You can simply add your tasks by putting your data into the text field below.</p>
                        <button onClick={onClick} class=" rounded-md bg-base px-5 py-3 text-text">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;