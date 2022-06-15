import React from 'react';

const SplitMode = (props) => {
  return (
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between'}}>
      <label>
        Человек:
        <input
          type="number"
          name="personsNumber"
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
          value={props.splitData.orderPrice}
          onChange={props.changeSplitData}
        />
        <span>сом</span>
      </label>
    </form>
  );
};

export default SplitMode;