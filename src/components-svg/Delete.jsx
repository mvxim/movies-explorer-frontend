import * as React from 'react';

const Delete = (props) => (
    <svg width={ 24 }
        height={ 24 }
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        { ...props }
    >
        <rect width={ 24 }
            height={ 24 }
            rx={ 12 }
            fill="#F9F9F9"
        />
        <path fillRule="evenodd"
            clipRule="evenodd"
            d="m12 13.06 2.652 2.652 1.06-1.06L13.061 12l2.651-2.652-1.06-1.06L12 10.939 9.348 8.287l-1.06 1.061L10.939 12l-2.652 2.652 1.061 1.06L12 13.06Z"
            fill="#000"
        />
    </svg>
);

export default Delete;
