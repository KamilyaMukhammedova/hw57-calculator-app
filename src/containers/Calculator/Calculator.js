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
  const [people, setPeople] = useState([]);


  const onModeChange = value => {
    setMode(value);
  };

  const onChangeSplitData = (name, value) => {
    Object.keys(splitData).map(data => {
      if (data === name) {
        if (!isNaN(value) && value !== '') {
          return setSplitData(prev => ({
            ...prev,
            [data]: parseInt(value),
          }));
        }
      }

      return data;
    });
  };

  const onChangeServiceData = (name, value) => {
    Object.keys(serviceData).map(data => {
      if (data === name) {
        if (!isNaN(value) && value !== '') {
          return setServiceData(prev => ({
            ...prev,
            [data]: parseInt(value),
          }));
        }
      }

      return data;
    });
  };

  const onCalculate = () => {
    if (mode === 'split') {
      const totalSum =
        splitData.orderPrice +
        ((splitData.orderPrice / 100) * serviceData.tips) +
        parseInt(serviceData.delivery)
      ;
      const sumPerPerson = Math.ceil(totalSum / splitData.personsNumber);

      return setSplitData(prev => ({
        ...prev,
        sumPerPerson: sumPerPerson,
      }));
    }
  };

  const onAddPerson = () => {
    return setPeople(prev => ([
      ...prev,
      {userName: '', sum: 0, id: nanoid()},
    ]));
  };

  return (
    <div className="Container">
      <h2>Сумма заказа считается:</h2>
      <ModeControl
        mode={mode}
        changeMode={(e) => onModeChange(e.target.value)}
        splitData={splitData}
        serviceData={serviceData}
        people={people}
        changeSplitData={(e) => onChangeSplitData(e.target.name, e.target.value)}
        changeServiceData={(e) => onChangeServiceData(e.target.name, e.target.value)}
        calculate={() => onCalculate()}
        addPerson={() => onAddPerson()}
      />
    </div>
  );
};

export default Calculator;