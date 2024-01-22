import ImgSlider from "./ImgSlider";
import hospital1 from '../../public/slider_img/hospital1.png';
import vacation_rentel from '../../public/slider_img/vacation_rentel.png';
import pomodoro from '../../public/slider_img/pomodoro.png';
import Image from "next/image";
import Button from "./Button";
function Project(props) {

    return (
        <>
        <div className="md:flex h-auto justify-between w-full md:mb-5">
            <div className="md:w-3/4">
                <Image src={hospital1} />
            </div>
            <div className="mt-10 md:w-1/2 h-50 justify-center">
                <h2 className="font-bold text-center ">HOSPITAL MANGAMENT SYSTEM</h2>
                <p className="text-gray-500 text-center mt-8 p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen book. It has survived not only five centuries, but also the</p>
                    <div className='flex justify-center mt-4'><Button  name="Case Study" /></div>
            </div>
        </div>
        <div className="md:flex h-auto justify-between w-full md:mb-5">
        <div className="md:w-3/4">
            <Image src={vacation_rentel} />
        </div>
        <div className="mt-10 md:w-1/2 h-50">
            <h2 className="font-bold text-center ">VACATION RENTAL</h2>
            <p className="text-gray-500 text-center mt-8 p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it 
                to make a type specimen book. It has survived not only five centuries, but also the</p>
                <div className='flex justify-center mt-4'><Button  name="Case Study" /></div>
        </div>
    </div>
    <div className="md:flex h-auto justify-between w-full md:mb-5">
        <div className="md:w-3/4">
            <Image src={pomodoro} />
        </div>
        <div className="mt-10 md:w-1/2 h-50">
            <h2 className="font-bold text-center ">POMODORO, TASK MANGAMENT</h2>
            <p className="text-gray-500 text-center mt-8 p-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it 
                to make a type specimen book. It has survived not only five centuries, but also the</p>
                <div className='flex justify-center mt-4'><Button  name="Case Study" /></div>
        </div>
    </div>
    </>
    );
}

export default Project;