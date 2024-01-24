import ImgSlider from "./ImgSlider";
import hospital1 from '../../public/slider_img/hospital1.png';
import vacation_rentel from '../../public/slider_img/vacation_rentel.png';
import pomodoro from '../../public/slider_img/pomodoro.png';
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
function Project(props) {

    return (
        <div className="my-5">
            <h1 className="text-center font-bold">My project</h1>
            <svg class="animate-bounce w-6 h-6 ...">

            </svg>
            <div className="md:flex h-auto justify-between w-full md:mb-5">
                <div className="md:w-3/4">
                    <Image src={hospital1} />
                </div>
                <div className="mt-10 md:w-1/2 h-50 justify-center">
                    <h2 className="font-bold text-center ">HOSPITAL MANGAMENT SYSTEM</h2>

                    <ul className="list-disc text-gray-600  mt-8 p-5 italic">
                        <li>Developed a financial module for real-time income and expense tracking, complete with interactive charts for data analysis.</li>
                        <li>Implemented secure user authentication and role-based access, ensuring data privacy and efficient user management.</li>
                        <li>Integrated bed management, invoice generation, and HR solutions for enhanced operational efficiency and patient care.</li>
                        <li>Designed a secure API with user authentication and authorization to safeguard data integrity and confidentiality.
                        </li>
                    </ul>

                    <div className='flex justify-around mt-4'><Link href='https://hospital-mangment.vercel.app' target="blank"><Button style='hover:underline text-white  bg-green-600 ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Live" /></Link>
                      <Link href='https://github.com/Robiulhoq/hospital_mangment'  target="blank"><Button style='hover:underline bg-black ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Github" /></Link>  </div>
                </div>
            </div>
            <div className="md:flex h-auto justify-between w-full md:mb-5">
                <div className="md:w-3/4">
                    <Image src={vacation_rentel} />
                </div>
                <div className="mt-10 md:w-1/2 h-50">
                    <h2 className="font-bold text-center ">VACATION RENTAL</h2>
                    <ul className="list-disc text-gray-600  mt-8 p-5 italic">
                        <li>Designed and developed a user-friendly website facilitating hotel room bookings, simplifying the reservation process for guests and enhancing their overall experience.</li>
                        <li>Implemented features such as a customer review slider, room price visibility, and detailed room facilities, allowing prospective customers to make informed decisions and fostering engagement, resulting in increased bookings.</li>
                        <li>Ensured the website's responsiveness across various devices, guaranteeing seamless access for users, whether they are browsing on desktops, tablets, or mobile phones, ultimately improving accessibility and user satisfaction.</li>
                        
                    </ul>
                    <div className='flex justify-around mt-4'><Link href='https://robiulhoq.github.io/Vacation-Rental/index.html' target="blank"><Button style='hover:underline text-white  bg-green-600 ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Live" /></Link>
                      <Link href='https://github.com/Robiulhoq/Vacation-Rental'  target="blank"><Button style='hover:underline bg-black ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Github" /></Link>  </div>
                </div>
            </div>
            <div className="md:flex h-auto justify-between w-full md:mb-5">
                <div className="md:w-3/4">
                    <Image src={pomodoro} />
                </div>
                <div className="mt-10 md:w-1/2 h-50">
                    <h2 className="font-bold text-center ">POMODORO, TASK MANGAMENT</h2>
                    <ul className="list-disc text-gray-600  mt-8 p-5 italic">
                        <li>Enhanced productivity with 25-minute work cycles and task management.</li>
                        <li>Personalised distractions-free work environment.</li>
                        <li>Secure access for progress tracking.</li>
                        <li>Streamlined organisation for improved productivity.</li>
                    </ul>
                    <div className='flex justify-around mt-4'><Link href='https://pomodoroapps.netlify.app/' target="blank"><Button style='hover:underline text-white  bg-green-600 ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Live" /></Link>
                      <Link href='https://github.com/Robiulhoq/Pomodoro'  target="blank"><Button style='hover:underline bg-black ml-0 mr-0 py-3 px-6 text-white font-bold text-lg' name="Github" /></Link>  </div>
                </div>
            </div>
        </div>
    );
}

export default Project;