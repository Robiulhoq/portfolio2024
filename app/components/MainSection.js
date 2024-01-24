import Image from 'next/image'
import rakib from '../../public/robiul_hoque_rakib.png';

function MainSection(props) {
    return (
        <div className='sm:mx-0 my-16 md:flex md:mx-0 md:my-16 justify-between items-center'>
            <div className='md:w-1/2'>
                <h3 className='text-gray-600'>I am a seasoned Web Developer with a strong background in building 
                scalable and efficient web applications. <br/> <br/> I specialize in a wide array of technologies, including React.js, Node.js,
                 MongoDB, Express.js, and more. My expertise extends to creating dynamic user interfaces, 
                handling server-side logic, and optimizing API performance.</h3>
            </div>
            <div className='md:w-1/2 mt-6'>
                <Image className='rounded-full w-2/3 md:ml-auto md:mr-0 m-auto'
                    src={rakib}
                    alt="Picture of the author"
                />
            </div>
        </div>
    );
}

export default MainSection;