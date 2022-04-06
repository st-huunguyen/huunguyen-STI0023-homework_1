import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import style from './style.module.scss';
import Option from '../../shared/partials/option';
import data from '../../data.json';
import { selectSize, selectTopping } from '../../store/actions/ordered';

const Home = () => {
  const size = useSelector((state) => state.orderReducer.size);
  const toppings = useSelector((state) => state.orderReducer.listTopping);
  const orderValue = useSelector((state) => state.orderReducer.orderValue);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectSize = (size) => {
    dispatch(selectSize(size));
  };

  const handleSelectTopping = (topping) => {
    dispatch(selectTopping(topping));
  };

  const directToPayment = () => {
    if (toppings.length > 0 && Object.keys(size).length > 0) {
      history.push('/payment');
    } else {
      alert('Valid order must have both topping and size of pizza ');
    }
  };

  const [listSize, setListSize] = useState([]);
  const [listTopping, setListTopping] = useState([]);

  useEffect(() => {
    setListSize(data.size);
    setListTopping(data.topping);
  }, []);

  return (
    <div className={style.homePage}>
      <img
        src='./images/banner-logo.png'
        className={style.image}
        alt='banner-pizza'
      />
      <div className={style.orderOption}>
        <div>
          <h2 className={style.optionTitle}>Size:</h2>
          <ul className={style.listOption}>
            {listSize.map((item) => (
              <Option
                key={item.id}
                option={item}
                onChange={handleSelectSize}
                selected={size === item}
              />
            ))}
          </ul>
        </div>
        <div>
          <h2 className={style.optionTitle}>Topping:</h2>
          <ul className={style.listOption}>
            {listTopping.map((item) => (
              <Option
                key={item.id}
                option={item}
                onChange={handleSelectTopping}
                selected={toppings?.includes(item)}
              />
            ))}
          </ul>
        </div>
        <div className={style.orderInfo}>
          <button className={style.btnPrimary} onClick={directToPayment}>
            order
          </button>
          <span className={style.totalPrice}>{orderValue}$</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
