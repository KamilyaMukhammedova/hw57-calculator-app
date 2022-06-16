import React from 'react';

const SplitMode = (props) => {
  return (
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between'}}>
      <label>
        Человек:
        <input
          type="number"
          name="personsNumber"
          min="0"
          value={props.splitData.personsNumber}
          onChange={props.changeSplitData}
        />
        <span>чел</span>
      </label>
      <label>
        Сумма заказа:
        <input
          type="number"
          name="orderPrice"
          min="0"
          value={props.splitData.orderPrice}
          onChange={props.changeSplitData}
        />
        <span>сом</span>
      </label>
    </form>
  );
};

export default SplitMode;