import React, {useState} from 'react';
import {nanoid} from "nanoid";
import ModeControl from "../../components/ModeControl/ModeControl";

const Calculator = () => {
  const [mode, setMode] = useState('split');
  const [splitData, setSplitData] = useState({
    personsNumber: 0,
    orderPrice: 0,
  });
  const [serviceData, setServiceData] = useState({
    tips: 0,
    delivery: 0,
  });

  const onModeChange = value => {
    setMode(value);
  };

  const onChangeSplitData = (name, value) => {
    Object.keys(splitData).map(data => {
      if(data === name) {
        return setSplitData(prev => ({
          ...prev,
          [data]: value,
        }));
      }

      return data;
    });
  };

  const onChangeServiceData = (name, value) => {
    Object.keys(serviceData).map(data => {
      if(data === name) {
        return setServiceData(prev => ({
          ...prev,
          [data]: value,
        }));
      }

      return data;
    });
  };

  return (
    <div className="Container">
      <h2>Сумма заказа считается:</h2>
      <ModeControl
        mode={mode}
        changeMode={(e) => onModeChange(e.target.value)}
        splitData={splitData}
        serviceData={serviceData}
        changeSplitData={(e) => onChangeSplitData(e.target.name, e.target.value)}
        changeServiceData={(e) => onChangeServiceData(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default Calculator;