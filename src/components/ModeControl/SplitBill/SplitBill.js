import React from 'react';

const SplitBill = (props) => {
  return (
    <div>
      <p>Общая сумма: {props.splitData.orderPrice} сом</p>
      <p>Количество человек: {props.splitData.personsNumber}</p>
      <p>Каждый платит по: {props.splitData.sumPerPerson} сом</p>
    </div>
  );
};

export default SplitBill;