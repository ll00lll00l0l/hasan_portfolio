import React from 'react'
import {Link} from 'react-router-dom'
import SVG  from './Allsvg.js'; 
import Project1 from '../Assets/Project1.png';
import Project2 from '../Assets/Project2.png';
import Project3 from '../Assets/Project3.png';

const Project = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
            <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Personal  Project</h2>
            </div>
            <div className=" space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                <div className="flex flex-col max-w-md p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Ecommerce Offical Website</h3>
                    <img className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5" src={Project2}alt="Your Image1"/>
                    
                    <ul  className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Backend & Admin Panel in Django</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>React for front-end, implementing UI/UX designs</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Postgres for Database</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Hosting in AWS & Netlify </span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Satisfied Clients</span>
                        </li>
                    </ul>
                    <div className='flex gap-8'>
                    <Link to="https://tharacart.netlify.app/" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">LIVE DEMO</Link>

                    <Link to="https://github.com/ll00lll00l0l/tharafrontend.git" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">GITHUB LINK</Link>
                    </div>

                </div>
                <div className="flex flex-col justify-between max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Personal Portfolio</h3>
                    <img className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5" src={Project1}alt="Your Image2" />
                    <ul  className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>React for front-end</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Tailwind for css</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case8' name="Loading" />
                            <span> Adding  animations</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case8' name="Loading" />
                            <span>Service section</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case8' name="loading" />
                            <span>Adding backend node.js </span>
                        </li>
                    </ul>
                    <div className='flex gap-8'>
                    <Link to="https://hasanportfolio1.netlify.app/" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">LIVE DEMO</Link>

                    <Link to="https://github.com/ll00lll00l0l/hasan_portfolio.git" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">GITHUB LINK</Link>
                    </div>                
                    </div>
                <div className="flex justify-between flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                    <h3 className="mb-4 text-2xl font-semibold">Travel Agency Website</h3>
                    <img className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"src={Project3} alt="Your Image3" />                    
                
                    <ul  className="mb-8 space-y-4 text-left">
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Using HTML5</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Bootstrap</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>Jquery</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span>JavaScript</span>
                        </li>
                        <li className="flex items-center space-x-3">
                <SVG  caseValue='case7' name="Tick" />
                            <span> CSS</span>
                        </li>
                    </ul>
                    <div className='flex gap-8'>
                    <Link to="#" className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">LIVE DEMO</Link>

                    <Link to="#" className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">GITHUB LINK</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Project