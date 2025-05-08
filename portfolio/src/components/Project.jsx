import React from "react";
import { Link } from "react-router-dom";
import SVG from "./Allsvg.js";
import Project1 from "../Assets/Project1.png";
import Project2 from "../Assets/Project2.png";
import Project3 from "../Assets/Project3.png";
import Project4 from "../Assets/Project4.png";
import Project5 from "../Assets/project5.png";
import Project6 from "../Assets/project6.png";

const Project = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Personal Project & Freelance Project
          </h2>
        </div>
        
        <div className=" space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
        <div className="flex justify-between flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              Affiliate Marketing Website
            </h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project4}
              alt="Your Image3"
            />

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Next.js</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>CSS3</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Sheetdb.io and google sheet into Api</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Progressive Web App</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span> Vercel</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                to="http://hidentity.xyz/"
                target="_blank"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                LIVE DEMO
              </Link>

              <Link
                to="#"
                target="_blank"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>
        <div className="flex justify-between flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">
            Attendance System
            </h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project5}
              alt="Your Image3"
            />

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Node as backend</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Mongodb for database</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Attendance System with filter and graph Api</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Nginx</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>AWS</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                to="https://github.com/ll00lll00l0l/attendance_system.git"
                target="_blank"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"

              >
                LIVE DEMO
              </Link>

              <Link
                to="https://github.com/ll00lll00l0l/attendance_system.git"
                target="_blank"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>
          <div className="flex flex-col max-w-md p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              Corporate Company Offical Website
            </h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project2}
              alt="Your Image1"
            />

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Backend & Admin Panel in Django</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>React for front-end, Implementing UI/UX designs</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Postgres for Database</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Hosting in AWS & Netlify </span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Satisfied Clients</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                to="https://thara.co.in/"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                LIVE DEMO
              </Link>

              <Link
                target="_blank"
                to="https://github.com/ll00lll00l0l/tharafrontend.git"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-between max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">Ecommerce Website</h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project1}
              alt="Your Image2"
            />
            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>React for front-end</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>UI/UX designs </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <SVG caseValue="case8" name="Loading" /> */}
                <SVG caseValue="case7" name="Tick" />
                <span>Mongodb as Database</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <SVG caseValue="case8" name="Loading" /> */}
                <SVG caseValue="case7" name="Tick" />
                <span>Backend node.js </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <SVG caseValue="case8" name="loading" /> */}
                <SVG caseValue="case7" name="Tick" />
                <span>Hosting in AWS</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                target="_blank"
                to="https://mobile-econ22.vercel.app"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                LIVE DEMO
              </Link>

              <Link
                target="_blank"
                to="https://github.com/ll00lll00l0l/credot.git"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>
          <div className="flex justify-between flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">
              Clouchair OfficeChair
            </h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project6}
              alt="Your Image3"
            />

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Python django</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>CSS3</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>HTML5</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>CSS</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span> AWS</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                to="https://github.com/ll00lll00l0l/clouchair.git"
                target="_blank"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                LIVE DEMO
              </Link>

              <Link
                to="#"
                target="https://github.com/ll00lll00l0l/clouchair.git"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>
          <div className="flex justify-between flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-4 text-2xl font-semibold">
             Tripoo
            </h3>
            <img
              className="w-200 h-200 rounded-lg  hover:shadow-lg pb-5"
              src={Project3}
              alt="Your Image3"
            />

            <ul className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>HTML</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>CSS3</span>
              </li>
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Bootstrap</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span>Progressive Web App</span>
              </li> */}
              <li className="flex items-center space-x-3">
                <SVG caseValue="case7" name="Tick" />
                <span> Netlify</span>
              </li>
            </ul>
            <div className="flex gap-8">
              <Link
                to="https://github.com/ll00lll00l0l/clouchair.git"
                target="_blank"
                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4  focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                LIVE DEMO
              </Link>

              <Link
                to="https://github.com/ll00lll00l0l/clouchair.git"
                target="_blank"
                className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
              >
                GITHUB LINK
              </Link>
            </div>
          </div>

       
         
        </div>
      </div>
    </section>
  );
};

export default Project;
