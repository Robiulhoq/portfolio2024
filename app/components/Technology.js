import javascriptIcon from '../../public/assests/javascript.svg';

function Technology(props) {
    
    const technology = [{
        id: '1',
        tech: 'JavaScript',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: 
        <svg className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.29289 1.29289C9.48043 1.10536 9.73478 1 10 1H18C19.6569 1 21 2.34315 21 4V9C21 9.55228 20.5523 10 20 10C19.4477 10 19 9.55228 19 9V4C19 3.44772 18.5523 3 18 3H11V8C11 8.55228 10.5523 9 10 9H5V20C5 20.5523 5.44772 21 6 21H7C7.55228 21 8 21.4477 8 22C8 22.5523 7.55228 23 7 23H6C4.34315 23 3 21.6569 3 20V8C3 7.73478 3.10536 7.48043 3.29289 7.29289L9.29289 1.29289ZM6.41421 7H9V4.41421L6.41421 7ZM16 14.75C16 13.2312 17.2312 12 18.75 12H21C21.5523 12 22 12.4477 22 13C22 13.5523 21.5523 14 21 14H18.75C18.3358 14 18 14.3358 18 14.75C18 15.1642 18.3358 15.5 18.75 15.5H19.25C20.7688 15.5 22 16.7312 22 18.25C22 19.7688 20.7688 21 19.25 21H17C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19H19.25C19.6642 19 20 18.6642 20 18.25C20 17.8358 19.6642 17.5 19.25 17.5H18.75C17.2312 17.5 16 16.2688 16 14.75ZM15 13C15 12.4477 14.5523 12 14 12C13.4477 12 13 12.4477 13 13V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V17.6667C11 17.1144 10.5523 16.6667 10 16.6667C9.44772 16.6667 9 17.1144 9 17.6667V18C9 19.6569 10.3431 21 12 21C13.6569 21 15 19.6569 15 18V13Z" fill="#000000"/>
        </svg>
    },{
        id: '2',
        tech: 'React',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: <svg  className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        
        <path d="M29.7,16c0-1.9-2.2-3.5-5.7-4.5C24.9,8,24.6,5.3,23,4.3C22.6,4.1,22.2,4,21.7,4c-1.5,0-3.5,1.1-5.5,3c-2-1.9-3.9-3-5.5-3   c-0.5,0-0.9,0.1-1.3,0.3C7.9,5.3,7.6,8,8.4,11.5c-3.4,1-5.7,2.7-5.7,4.5c0,1.9,2.2,3.5,5.7,4.5c-0.8,3.5-0.5,6.3,1.1,7.2   c0.4,0.2,0.8,0.3,1.3,0.3c1.5,0,3.5-1.1,5.5-3c2,1.9,3.9,3,5.5,3c0.5,0,0.9-0.1,1.3-0.3c1.6-0.9,1.9-3.7,1.1-7.2   C27.5,19.5,29.7,17.8,29.7,16z M21.7,5.3c0.3,0,0.5,0,0.6,0.2c0.8,0.4,1.1,2,0.8,4.1c-0.1,0.5-0.2,1.1-0.3,1.6   c-1.1-0.3-2.2-0.4-3.5-0.6c-0.7-1-1.4-1.9-2.2-2.7C18.9,6.2,20.6,5.3,21.7,5.3z M19.9,18.1c-0.4,0.7-0.8,1.4-1.3,2   c-0.8,0.1-1.6,0.1-2.4,0.1c-0.8,0-1.6,0-2.4-0.1c-0.4-0.6-0.8-1.3-1.3-2c-0.4-0.7-0.8-1.4-1.1-2.1c0.3-0.7,0.7-1.4,1.1-2.1   c0.4-0.7,0.9-1.4,1.3-2.1c0.8-0.1,1.6-0.1,2.4-0.1c0.8,0,1.6,0,2.4,0.1c0.4,0.6,0.9,1.3,1.3,2.1c0.4,0.7,0.8,1.4,1.1,2.1   C20.7,16.7,20.3,17.4,19.9,18.1z M21.7,17.5c0.3,0.7,0.5,1.4,0.7,2c-0.7,0.2-1.4,0.3-2.1,0.4c0.2-0.4,0.5-0.8,0.7-1.2   C21.3,18.4,21.5,17.9,21.7,17.5L21.7,17.5z M16.2,23.2c-0.5-0.5-1-1.1-1.4-1.7c0.5,0,1,0,1.4,0c0.5,0,1,0,1.4,0   C17.2,22.1,16.7,22.7,16.2,23.2z M12.1,20c-0.7-0.1-1.4-0.2-2.1-0.4c0.2-0.7,0.5-1.4,0.7-2c0.2,0.4,0.4,0.8,0.7,1.2   C11.7,19.2,11.9,19.6,12.1,20L12.1,20z M10.7,14.5c-0.3-0.7-0.5-1.4-0.8-2.1c0.7-0.2,1.4-0.3,2.2-0.4c-0.3,0.4-0.5,0.8-0.8,1.2   C11.2,13.7,11,14.1,10.7,14.5z M16.2,8.8c0.5,0.5,0.9,1.1,1.4,1.6c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0   C15.3,9.9,15.8,9.3,16.2,8.8z M21,13.2c-0.3-0.4-0.5-0.8-0.8-1.2c0.8,0.1,1.5,0.2,2.2,0.4c-0.2,0.7-0.5,1.4-0.8,2.1   C21.5,14.1,21.3,13.7,21,13.2z M9.4,9.5c-0.3-2.1,0-3.6,0.8-4.1c0.2-0.1,0.4-0.2,0.6-0.2c1.1,0,2.7,0.9,4.5,2.6   c-0.7,0.8-1.5,1.7-2.2,2.7c-1.2,0.1-2.4,0.3-3.5,0.6C9.5,10.6,9.4,10,9.4,9.5z M7.2,18.7C5.3,17.9,4,16.8,4,16   c0-0.9,1.2-1.9,3.1-2.7c0.5-0.2,1-0.4,1.6-0.5c0.3,1.1,0.7,2.2,1.3,3.3c-0.5,1.1-0.9,2.2-1.2,3.2C8.2,19.1,7.7,18.9,7.2,18.7   L7.2,18.7z M10.1,26.6c-0.8-0.4-1.1-2-0.8-4.1c0.1-0.5,0.2-1.1,0.3-1.7c1.1,0.2,2.2,0.4,3.4,0.5c0.7,1,1.5,1.9,2.2,2.7   c-1.8,1.7-3.4,2.6-4.5,2.6C10.5,26.7,10.3,26.6,10.1,26.6L10.1,26.6z M23.1,22.5c0.3,2.1,0,3.6-0.8,4.1c-0.2,0.1-0.4,0.2-0.6,0.2   c-1.1,0-2.7-0.9-4.5-2.6c0.8-0.8,1.5-1.7,2.2-2.7c1.2-0.1,2.4-0.3,3.4-0.5C22.9,21.4,23,21.9,23.1,22.5L23.1,22.5z M25.3,18.7   c-0.5,0.2-1,0.4-1.6,0.5c-0.3-1-0.7-2.1-1.2-3.2c0.5-1.1,0.9-2.2,1.3-3.3c0.5,0.2,1.1,0.3,1.6,0.5c1.9,0.8,3.1,1.8,3.1,2.7   C28.4,16.8,27.2,17.9,25.3,18.7L25.3,18.7z"/>
        <path d="M16.3,18.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S14.9,18.5,16.3,18.5z"/>
        
        </svg>
    },{
        id: '8',
        tech: 'Next Js',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: <svg  className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        
        <path d="M29.7,16c0-1.9-2.2-3.5-5.7-4.5C24.9,8,24.6,5.3,23,4.3C22.6,4.1,22.2,4,21.7,4c-1.5,0-3.5,1.1-5.5,3c-2-1.9-3.9-3-5.5-3   c-0.5,0-0.9,0.1-1.3,0.3C7.9,5.3,7.6,8,8.4,11.5c-3.4,1-5.7,2.7-5.7,4.5c0,1.9,2.2,3.5,5.7,4.5c-0.8,3.5-0.5,6.3,1.1,7.2   c0.4,0.2,0.8,0.3,1.3,0.3c1.5,0,3.5-1.1,5.5-3c2,1.9,3.9,3,5.5,3c0.5,0,0.9-0.1,1.3-0.3c1.6-0.9,1.9-3.7,1.1-7.2   C27.5,19.5,29.7,17.8,29.7,16z M21.7,5.3c0.3,0,0.5,0,0.6,0.2c0.8,0.4,1.1,2,0.8,4.1c-0.1,0.5-0.2,1.1-0.3,1.6   c-1.1-0.3-2.2-0.4-3.5-0.6c-0.7-1-1.4-1.9-2.2-2.7C18.9,6.2,20.6,5.3,21.7,5.3z M19.9,18.1c-0.4,0.7-0.8,1.4-1.3,2   c-0.8,0.1-1.6,0.1-2.4,0.1c-0.8,0-1.6,0-2.4-0.1c-0.4-0.6-0.8-1.3-1.3-2c-0.4-0.7-0.8-1.4-1.1-2.1c0.3-0.7,0.7-1.4,1.1-2.1   c0.4-0.7,0.9-1.4,1.3-2.1c0.8-0.1,1.6-0.1,2.4-0.1c0.8,0,1.6,0,2.4,0.1c0.4,0.6,0.9,1.3,1.3,2.1c0.4,0.7,0.8,1.4,1.1,2.1   C20.7,16.7,20.3,17.4,19.9,18.1z M21.7,17.5c0.3,0.7,0.5,1.4,0.7,2c-0.7,0.2-1.4,0.3-2.1,0.4c0.2-0.4,0.5-0.8,0.7-1.2   C21.3,18.4,21.5,17.9,21.7,17.5L21.7,17.5z M16.2,23.2c-0.5-0.5-1-1.1-1.4-1.7c0.5,0,1,0,1.4,0c0.5,0,1,0,1.4,0   C17.2,22.1,16.7,22.7,16.2,23.2z M12.1,20c-0.7-0.1-1.4-0.2-2.1-0.4c0.2-0.7,0.5-1.4,0.7-2c0.2,0.4,0.4,0.8,0.7,1.2   C11.7,19.2,11.9,19.6,12.1,20L12.1,20z M10.7,14.5c-0.3-0.7-0.5-1.4-0.8-2.1c0.7-0.2,1.4-0.3,2.2-0.4c-0.3,0.4-0.5,0.8-0.8,1.2   C11.2,13.7,11,14.1,10.7,14.5z M16.2,8.8c0.5,0.5,0.9,1.1,1.4,1.6c-0.5,0-0.9,0-1.4,0c-0.5,0-0.9,0-1.4,0   C15.3,9.9,15.8,9.3,16.2,8.8z M21,13.2c-0.3-0.4-0.5-0.8-0.8-1.2c0.8,0.1,1.5,0.2,2.2,0.4c-0.2,0.7-0.5,1.4-0.8,2.1   C21.5,14.1,21.3,13.7,21,13.2z M9.4,9.5c-0.3-2.1,0-3.6,0.8-4.1c0.2-0.1,0.4-0.2,0.6-0.2c1.1,0,2.7,0.9,4.5,2.6   c-0.7,0.8-1.5,1.7-2.2,2.7c-1.2,0.1-2.4,0.3-3.5,0.6C9.5,10.6,9.4,10,9.4,9.5z M7.2,18.7C5.3,17.9,4,16.8,4,16   c0-0.9,1.2-1.9,3.1-2.7c0.5-0.2,1-0.4,1.6-0.5c0.3,1.1,0.7,2.2,1.3,3.3c-0.5,1.1-0.9,2.2-1.2,3.2C8.2,19.1,7.7,18.9,7.2,18.7   L7.2,18.7z M10.1,26.6c-0.8-0.4-1.1-2-0.8-4.1c0.1-0.5,0.2-1.1,0.3-1.7c1.1,0.2,2.2,0.4,3.4,0.5c0.7,1,1.5,1.9,2.2,2.7   c-1.8,1.7-3.4,2.6-4.5,2.6C10.5,26.7,10.3,26.6,10.1,26.6L10.1,26.6z M23.1,22.5c0.3,2.1,0,3.6-0.8,4.1c-0.2,0.1-0.4,0.2-0.6,0.2   c-1.1,0-2.7-0.9-4.5-2.6c0.8-0.8,1.5-1.7,2.2-2.7c1.2-0.1,2.4-0.3,3.4-0.5C22.9,21.4,23,21.9,23.1,22.5L23.1,22.5z M25.3,18.7   c-0.5,0.2-1,0.4-1.6,0.5c-0.3-1-0.7-2.1-1.2-3.2c0.5-1.1,0.9-2.2,1.3-3.3c0.5,0.2,1.1,0.3,1.6,0.5c1.9,0.8,3.1,1.8,3.1,2.7   C28.4,16.8,27.2,17.9,25.3,18.7L25.3,18.7z"/>
        <path d="M16.3,18.5c1.4,0,2.5-1.1,2.5-2.5s-1.1-2.5-2.5-2.5s-2.5,1.1-2.5,2.5S14.9,18.5,16.3,18.5z"/>
        
        </svg>
    },{
        id: '3',
        tech: 'Node Js',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: <svg className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5393 7.1653C13.0395 7.00341 13.4411 6.62246 13.631 6.13559L17.8644 10.369C17.3775 10.5589 16.9965 10.9605 16.8347 11.4606L12.5393 7.1653Z" fill="#000000"/>
        <path d="M16.8347 12.5394L12.5394 16.8347C13.0395 16.9966 13.4411 17.3776 13.631 17.8644L17.8644 13.631C17.3775 13.4411 16.9965 13.0396 16.8347 12.5394Z" fill="#000000"/>
        <path d="M11.4607 16.8347L7.16529 12.5393C7.00344 13.0394 6.62252 13.4411 6.13567 13.631L10.369 17.8643C10.5589 17.3774 10.9605 16.9965 11.4607 16.8347Z" fill="#000000"/>
        <path d="M11.4607 7.16535L7.16529 11.4608C7.00344 10.9606 6.62252 10.559 6.13567 10.3691L10.369 6.13572C10.5589 6.62258 10.9605 7.0035 11.4607 7.16535Z" fill="#000000"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C11.4477 4.5 11 4.94772 11 5.5C11 6.05228 11.4477 6.5 12 6.5C12.5523 6.5 13 6.05228 13 5.5C13 4.94772 12.5523 4.5 12 4.5ZM9.5 5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5C14.5 6.88071 13.3807 8 12 8C10.6193 8 9.5 6.88071 9.5 5.5Z" fill="#000000"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.5C11.4477 17.5 11 17.9477 11 18.5C11 19.0523 11.4477 19.5 12 19.5C12.5523 19.5 13 19.0523 13 18.5C13 17.9477 12.5523 17.5 12 17.5ZM9.5 18.5C9.5 17.1193 10.6193 16 12 16C13.3807 16 14.5 17.1193 14.5 18.5C14.5 19.8807 13.3807 21 12 21C10.6193 21 9.5 19.8807 9.5 18.5Z" fill="#000000"/>
        <circle cx="5.5" cy="12" r="2.5" fill="#000000"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 11C17.9477 11 17.5 11.4477 17.5 12C17.5 12.5523 17.9477 13 18.5 13C19.0523 13 19.5 12.5523 19.5 12C19.5 11.4477 19.0523 11 18.5 11ZM16 12C16 10.6193 17.1193 9.5 18.5 9.5C19.8807 9.5 21 10.6193 21 12C21 13.3807 19.8807 14.5 18.5 14.5C17.1193 14.5 16 13.3807 16 12Z" fill="#000000"/>
        </svg>
    },{
        id: '1',
        tech: 'Express Js',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: <svg fill="#000000" className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M24 18.588a1.529 1.529 0 0 1-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 0 1-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 0 1 1.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 0 1 1.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 0 0 0 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 0 0 2.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 0 1-2.589 3.957 6.272 6.272 0 0 1-7.306-.933 6.575 6.575 0 0 1-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 0 1 0 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"/></svg>
    },{
        id: '1',
        tech: 'Mongodb',
        drescription: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book It has survived not only five centuries but also the',
        icon: <svg className="w-8 h-8 mx-auto my-5 font-bold" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.49998 0.5L7.86855 0.162138C7.77385 0.0588232 7.64013 0 7.49998 0C7.35982 0 7.2261 0.0588232 7.1314 0.162138L7.49998 0.5ZM7.49998 13.5L7.10682 13.8089C7.20161 13.9296 7.34654 14 7.49998 14C7.65341 14 7.79834 13.9296 7.89313 13.8089L7.49998 13.5ZM4.62287 9.83822L4.22971 10.1471H4.22971L4.62287 9.83822ZM4.86869 3.3705L4.50011 3.03263H4.50011L4.86869 3.3705ZM10.1313 3.37049L10.4998 3.03263L10.1313 3.37049ZM10.3771 9.83823L10.7702 10.1471H10.7702L10.3771 9.83823ZM7.99998 15V0.5H6.99998V15H7.99998ZM7.89313 13.1911L5.01602 9.52931L4.22971 10.1471L7.10682 13.8089L7.89313 13.1911ZM5.23726 3.70836L7.86855 0.837862L7.1314 0.162138L4.50011 3.03263L5.23726 3.70836ZM7.1314 0.837862L9.76268 3.70836L10.4998 3.03263L7.86855 0.162138L7.1314 0.837862ZM9.98392 9.52932L7.10682 13.1911L7.89313 13.8089L10.7702 10.1471L9.98392 9.52932ZM9.76268 3.70836C11.2517 5.33278 11.3454 7.79655 9.98392 9.52932L10.7702 10.1471C12.4342 8.02932 12.3198 5.01803 10.4998 3.03263L9.76268 3.70836ZM5.01602 9.52931C3.65457 7.79655 3.74821 5.33278 5.23726 3.70836L4.50011 3.03263C2.68016 5.01804 2.56571 8.02932 4.22971 10.1471L5.01602 9.52931Z" fill="#000000"/>
        </svg>
    },]

    return (
       
        <div className='my-20'>
            <h1 className='text-center font-bold'>TECH STACK THAT I AM IN LOVE WITH</h1>
            <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20">
                {
                    technology.map(item => <div className='bg-gray-100 h-72 text-center p-2'>
                    <i>
                  {item.icon}
                    </i>
                    <h2 className='font-bold'>{item.tech}</h2>
                    <p className=' text-gray-600 pt-3'>{item.drescription}</p>
                </div>)
                }
        </div>
        </div>
    );
}

export default Technology;