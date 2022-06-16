import React from 'react';

const Service = (props) => {
  return (
    <form style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between'}}>
      <label>
        Процент чаевых:
        <input
          type="number"
          name="tips"
          min="0"
          value={props.serviceData.tips}
          onChange={props.changeServiceData}
        />
        <span>%</span>
      </label>
      <label>
        Доставка:
        <input
          type="number"
          name="delivery"
          min="0"
          value={props.serviceData.delivery}
          onChange={props.changeServiceData}
        />
        <span>сом</span>
      </label>
    </form>

  );
};

export default Service;