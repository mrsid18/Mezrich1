import React from 'react'

const TimelineItem = ({time, title, content}) => {
    return (
        <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
              <div className="pl-2">
                {/* <div className="font-architects-daughter text-xl text-purple-600 mb-2">Pivoting</div> */}
                <div className="flex items-center mb-3">
                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-white bg-red-600 rounded-full">{time}</div>
                  <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                  <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                    <h4 className="h4 text-white">{title }</h4>
                </div>
                <p className="text-lg text-gray-200">{ content }</p>
              </div>
            </div>

    )
}

export default TimelineItem
