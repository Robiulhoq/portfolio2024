import React from 'react';

function Button(props) {
    return (
        <div>
            <button className='bg-blue-800 ml-0 mr-0 py-3 px-6 text-white font-bold text-lg'>{props.name}</button>
        </div>
    );
}

export default Button;