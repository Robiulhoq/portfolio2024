import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Technology from "./components/Technology";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <div className='md:mx-10 lg:mx-[7rem] sm:mx-12 mx-6'>
        <MainSection />
        <br />
        <div className="my-10">
          <h1 className="text-center font-bold mb-5">WHY THIS SITE?</h1>
          <h3 className="text-center text-gray-500 md:font-semibold lg:font-semibold">This space is my "digital knowledge garden". This is my attempt to document my learning and findings. Bonus Point
            - Someone in the internet may find my space useful!</h3>
        </div>
        <Technology />
        <Project />
      </div>


      <Footer />
    </main>
  )
}
