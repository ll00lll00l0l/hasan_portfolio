import React from 'react'
import SVG  from './Allsvg.js'; 


function Skill() {
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
            <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
                <SVG  caseValue='case1' name="python" data-aos="zoom-out-up"
          data-aos-delay="300"/>
                <SVG  caseValue='case2' name="react"data-aos="zoom-out-up"
          data-aos-delay="400"  />
                <SVG  caseValue='case4'name="postgres"  data-aos="zoom-out-up"
          data-aos-delay="500"/>
                <SVG  caseValue='case3'name="node.js" data-aos="zoom-out-up"
          data-aos-delay="600" />
                <SVG  caseValue='case5'name="aws" data-aos="zoom-out-up"
          data-aos-delay="700" />
                <SVG  caseValue='case6' name="nginx" data-aos="zoom-out-up"
          data-aos-delay="800"/>
            </div>
        </div>
    </section>
  )
}
export default Skill