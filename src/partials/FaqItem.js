import React from "react";

const FaqItem = ({title, content, dark}) => {
  return (
    <li className="font-medium bg-white shadow-lg rounded-md p-6">
      <h4 className={dark ? 'text-red-500 text-xl font-medium mb-2': 'text-gray-100 text-xl font-medium mb-2' }>
        {title}
      </h4>
      <p className={dark ? 'text-lg text-purple-900': 'text-lg text-gray-400' }>
        {content}
      </p>
    </li>
  );
};

FaqItem.defaultProps = {
    dark:true
}

export default FaqItem;
