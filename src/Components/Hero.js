import React from 'react';

const Hero = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{ backgroundImage: "url(https://image.shutterstock.com/image-vector/big-task-word-small-people-260nw-1429801826.jpg)" }}>
                <div class="hero-overlay bg-opacity-70"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-white text-5xl font-bold">Hello there</h1>
                        <p class="text-white mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;