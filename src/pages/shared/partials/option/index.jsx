import React from 'react';
import style from './style.module.scss';

const Option = ({ option, selected, onChange }) => {
  return (
    <li
      className={`${style.option} 
        ${selected ? style.selected : ''}
      `}
      onClick={() => onChange(option)}
    >
      <span className={style.optionText}>{option.text}</span>
      <span className={style.price}>{option.price}$</span>
    </li>
  );
};

export default Option;
