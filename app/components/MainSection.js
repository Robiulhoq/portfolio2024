import Image from 'next/image'
import rakib from '../../public/robiul_hoque_rakib.png';

function MainSection(props) {
    return (
        <div className='sm:mx-0 my-16 md:flex md:mx-0 md:my-16 justify-between items-center'>
            <div className='md:w-1/2'>
                <h3 className='text-justify text-gray-600'>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the </h3>
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