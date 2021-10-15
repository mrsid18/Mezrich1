import React from "react";

const FaqItem = ({title, content, dark}) => {
  return (
    <li className="font-medium">
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
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    dark:true
}

export default FaqItem;
