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

  const onChangePersonData = (name, value, id) => {
    setPeople(() => {
      return people.map(person => {
        if (person.id === id) {
          return {
            ...person,
            [name]: value,
          }
        }

        return person;
      });
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
    } else {
      const peopleCopy = [...people];
      const deliveryPerPerson = serviceData.delivery / peopleCopy.length;
      return setPeople(() => {
        return peopleCopy.map(person => {
          return {
            ...person,
            sumForPay: (parseInt(person.sum) + ((parseInt(person.sum) / 100) * serviceData.tips) + deliveryPerPerson),
          };
        });
      });
    }
  };

  const getTotalSumOfIndMode = () => {
    let total = 0;

    for(let i = 0; i < people.length; i++) {
      total += people[i].sumForPay;
    }

    return total;
  };

  const onAddPerson = () => {
    return setPeople(prev => ([
      ...prev,
      {userName: '', sum: 0, sumForPay: 0, id: nanoid()},
    ]));
  };

  const getPeopleInInd = () => {
    return people.map(person => {
      return (
        <div>
          <p>{person.userName}: {person.sumForPay} сом</p>
        </div>
      )
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
        people={people}
        changeSplitData={(e) => onChangeSplitData(e.target.name, e.target.value)}
        changeServiceData={(e) => onChangeServiceData(e.target.name, e.target.value)}
        changePersonData={(e, id) => onChangePersonData(e.target.name, e.target.value, id)}
        calculate={() => onCalculate()}
        addPerson={() => onAddPerson()}
        getIndTotalSum={getTotalSumOfIndMode()}
      />
    </div>
  );
};

export default Calculator;