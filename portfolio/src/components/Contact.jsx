import React from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faSquareTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-800">
    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight pb-10 text-gray-900 dark:text-white">Contact.</h2>
            <div className='flex justify-evenly'>
            <Link to="https://www.linkedin.com/in/nabeel-hassan-475a0424a">
            <FontAwesomeIcon className="w-6 h-6"   icon={faLinkedin} />

            </Link>
            <Link to="https://github.com/ll00lll00l0l">
            <FontAwesomeIcon className="w-6 h-6"  icon={faGithub} />
            </Link>
            <Link to="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Download CV</Link>
            <Link to="">
            <FontAwesomeIcon className="w-6 h-6"  icon={faSquareTwitter} />

            </Link>
            <Link to="whatsapp://send?phone=9207641067&text=Hello hasan">
            <FontAwesomeIcon className="w-6 h-6"  icon={faWhatsapp} />

            </Link>
            </div>

        </div>
    </div>
</section>
  )
}

export default Contact