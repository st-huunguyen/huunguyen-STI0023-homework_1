import React, { useEffect } from 'react';
import style from './style.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import * as CardValidator from 'card-validator';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { clearState } from '../../store/actions/ordered';

const schema = yup
  .object({
    name: yup.string().required('Name is required'),
    phoneNumber: yup
      .string()
      .required('Phone number is required')
      .matches(
        /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/,
        'Is not in correct format'
      ),
    houseNumber: yup.string().required("House's number is required"),
    street: yup.string().required('Street is required'),
    city: yup.string().required('City is required'),
    postalCode: yup
      .string()
      .required('Postal code is required')
      .test(
        'errorPostalCode',
        'error postal code',
        (val) => CardValidator.postalCode(val).isValid === true
      ),
    cardNumber: yup
      .string()
      .required('Card number is required')
      .test(
        'errorCode',
        'error card number',
        (val) => CardValidator.number(val).isValid === true
      ),
    expireDate: yup
      .string()
      .required('Expire date is required')
      .test(
        'errorExpireDate',
        'error expire date',
        (val) => CardValidator.expirationDate(val).isValid === true
      ),
    CVVCode: yup
      .string()
      .required('CVV code is required')
      .test(
        'errorCVVCode',
        'error CVV code',
        (val) => CardValidator.cvv(val).isValid === true
      ),
  })
  .required();

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const size = useSelector((state) => state.orderReducer.size);
  const toppings = useSelector((state) => state.orderReducer.listTopping);

  useEffect(() => {
    if (toppings.length === 0 || Object.keys(size).length === 0) {
      directToHomepage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const directToHomepage = () => {
    history.push('/');
  };

  const onSubmit = (data) => {
    const info = {
      ...data,
      size: size.id,
      toppings: toppings.map((item) => item.id),
    };
    dispatch(clearState());
    alert('Order successful !');
    console.log(JSON.stringify(info));
    directToHomepage();
  };

  return (
    <div className={style.formInfo}>
      <img
        src='./images/banner.png'
        className={style.image}
        alt='banner-pizza'
      />
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <h2 className={style.formTitle}>Customer Info</h2>
        <div className={style.formDouble}>
          <label>
            <span className={style.labelText}>Name :</span>
            <input
              className={style.formInput}
              placeholder='Your name or nickname...'
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className={style.error}>{errors.name.message}</span>
            )}
          </label>
          <label>
            <span className={style.labelText}>Phone number :</span>
            <input
              className={style.formInput}
              placeholder='Your telephone number...'
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && (
              <span className={style.error}>{errors.phoneNumber.message}</span>
            )}
          </label>
        </div>

        <div className={style.formDouble}>
          <label>
            <span className={style.labelText}>House's number</span>
            <input
              className={style.formInput}
              {...register('houseNumber', { required: true })}
              placeholder="Your house's number..."
            />
            {errors.houseNumber && (
              <span className={style.error}>{errors.houseNumber.message}</span>
            )}
          </label>
          <label>
            <span className={style.labelText}>Street :</span>
            <input
              className={style.formInput}
              placeholder="Street's name..."
              {...register('street', { required: true })}
            />
            {errors.street && (
              <span className={style.error}>{errors.street.message}</span>
            )}
          </label>
        </div>

        <div className={style.formDouble}>
          <label>
            <span className={style.labelText}>City</span>
            <input
              className={style.formInput}
              {...register('city', { required: true })}
              placeholder="Your city..."
            />
            {errors.city && (
              <span className={style.error}>{errors.city.message}</span>
            )}
          </label>
          <label>
            <span className={style.labelText}>Postal code</span>
            <input
              className={style.formInput}
              {...register('postalCode', { required: true })}
              placeholder='postal code...'
            />
            {errors.postalCode && (
              <span className={style.error}>{errors.postalCode.message}</span>
            )}
          </label>
        </div>

        <label>
          <span className={style.labelText}>Credit card :</span>
          <input
            className={style.formInput}
            placeholder='Card number...'
            {...register('cardNumber', { required: true })}
          />
          {errors.cardNumber && (
            <span className={style.error}>{errors.cardNumber.message}</span>
          )}
        </label>
        <div className={style.formDouble}>
          <label>
            <span className={style.labelText}>Expiration date :</span>
            <input
              className={style.formInput}
              placeholder='Expire date...'
              {...register('expireDate', { required: true })}
            />
            {errors.expireDate && (
              <span className={style.error}>{errors.expireDate.message}</span>
            )}
          </label>
          <label>
            <span className={style.labelText}>CVV Code :</span>
            <input
              className={style.formInput}
              placeholder='CVV code...'
              {...register('CVVCode', { required: true })}
            />
            {errors.CVVCode && (
              <span className={style.error}>{errors.CVVCode.message}</span>
            )}
          </label>
        </div>
        <div className={style.formDouble}>
          <button
            type='button'
            className={style.btnPrimary}
            onClick={directToHomepage}
          >
            back
          </button>
          <button className={style.btnPrimary}>submit</button>
        </div>
      </form>
      <div className={style.order}></div>
    </div>
  );
};

export default Payment;
