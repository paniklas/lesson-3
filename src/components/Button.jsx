import { useState } from 'react';

const Button = () => {
    const [buttonText, setButtonText] = useState('Click Me');
    
    return (
        <button
            className="bg-zinc-900 text-white font-bold py-2 px-4 rounded-md hover:bg-zinc-950 w-32 border border-zinc-300"
            onMouseEnter={() => setButtonText('SuperHeroes!')}
            onMouseLeave={() => setButtonText('Click Me')}
        >
            {buttonText}
        </button>
    )
}

export default Button
