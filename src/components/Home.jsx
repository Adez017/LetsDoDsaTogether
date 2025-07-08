
import CompartmentButton from './CompartmentButton';
import './Home.css';

const Home = ({ setView }) => (

  <div className='containerBgImg'><div className=" h-screen w-screen  rounded-xl bg-white shadow-md p-10 text-center space-y-6 "id ="home-container"> 
  <div className="navbar fixed top-0 left-0 w-full z-50 bg-white shadow-md">
  <div><h1>HOME</h1></div>
  <div><button> Beginner</button></div>
  <div><button> Advance</button></div>
  </div>
  <div className="herosection">
   <div className='headText'> <h1 className="text-2xl font-bold tracking-tight">LET'S DO DSA TOGETHER</h1></div>
    <div><img src='public\images\heroSecImg.jpg' alt="" srcset="" /></div>
    </div>
  <div className="description">
  <span>DSA🧠🐦‍🔥</span>
    <p className="text-sm text-slate-600"> Mastering DSA is like unlocking cheat codes for problem-solving. It's the core of writing clean, efficient, and optimized code—stuff that actually performs under pressure. Whether you're trying to ace coding interviews or build scalable systems, DSA is the ultimate skill flex.</p>
  </div>

  <div className="sections">
    <div className="grid grid-rows-3 gap-4 mt-4" id="buttons">
    <CompartmentButton label="Beginner's" onClick={() => setView('beginner')} />
    <CompartmentButton label="Advance" onClick={() => setView('advanced')} />
    <CompartmentButton label="Both" onClick={() => setView('beginner')} />
    </div>
  </div>
  
  <footer className="  bg-gray-900 text-white text-center p-6 mt-10">
<h2 className="text-lg font-semibold mb-2">Let's Do DSA 🚀</h2>
<p className="text-sm mb-2">Your one-stop guide to mastering Data Structures and Algorithms.</p>

<div className="flex justify-center gap-6 mb-2">
  <a href="#home" className="hover:underline">Home</a>
  <a href="#about" className="hover:underline">About</a>
  <a href="#contact" className="hover:underline">Contact</a>
  <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
</div>

<p className="text-xs text-gray-400">© 2025 Let's Do DSA. All rights reserved.</p>
</footer>

</div></div>
);

export default Home;