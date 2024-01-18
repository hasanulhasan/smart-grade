import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import StudentTable from "./StudentTable";

const Home = () => {
  return (
    <div className="bg-[#172227] font-[Inter] text-white">
        <Navbar/>
        <Hero/>
        <StudentTable/>
        <Footer/>
    </div>
  );
};

export default Home;