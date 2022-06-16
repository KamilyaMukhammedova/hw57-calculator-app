import React, {useState} from 'react';
import {nanoid} from "nanoid";
import ModeControl from "../../components/ModeControl/ModeControl";

const Calculator = () => {
  const [mode, setMode] = useState('split');
  const [splitData, setSplitData] = useState({
    personsNumber: 0,
    orderPrice: 0,
    sumPerPerson: 0,
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
      if (data === name) {
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
      if (data === name) {
        return setServiceData(prev => ({
          ...prev,
          [data]: value,
        }));
      }

      return data;
    });
  };

  const onCalculate = () => {
    if (mode === 'split') {
      const totalSum =
        parseInt(splitData.orderPrice) +
        ((parseInt(splitData.orderPrice) / 100) * parseInt(serviceData.tips)) +
        parseInt(serviceData.delivery);
      const sumPerPerson = Math.ceil(totalSum / parseInt(splitData.personsNumber));


      return setSplitData(prev => ({
        ...prev,
        sumPerPerson: sumPerPerson,
      }));
    }

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
        calculate={() => onCalculate()}
      />
    </div>
  );
};

export default Calculator;