import React from "react";

const FaqItem = ({title, content, dark}) => {
  return (
    <li data-aos="fade-up" data-aos-delay="100" className="font-medium shadow-lg rounded-md py-7 px-8" style={{background:"rgba(255,255,255,0.9)"}}>
      <h4 className={dark ? 'text-red-600 text-xl font-medium mb-2': 'text-gray-100 text-xl font-medium mb-2' }>
        {title}
      </h4>
      <p className={dark ? 'text-lg text-purple-600': 'text-lg text-gray-400' }>
        {content}
      </p>
    </li>
  );
};

FaqItem.defaultProps = {
    dark:true
}

export default FaqItem;
