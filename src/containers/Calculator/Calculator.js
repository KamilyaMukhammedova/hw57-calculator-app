import {useState} from 'react';
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
    setServiceData(prev => ({
      ...prev,
      tips: 0,
      delivery: 0
    }));
    if (value === 'split') {
      setPeople([]);
    } else {
      setSplitData(prev => ({
        ...prev,
        personsNumber: 0,
        orderPrice: 0,
        sumPerPerson: 0,
      }));
    }
  };

  const onChangeSplitData = (name, value) => {
    if (!isNaN(value) && value !== '') {
      return setSplitData(prev => ({
        ...prev,
        [name]: parseInt(value),
      }));
    }
  };

  const onChangeServiceData = (name, value) => {
    if (!isNaN(value) && value !== '') {
      return setServiceData(prev => ({
        ...prev,
        [name]: parseInt(value),
      }));
    }
  };

  const onChangePersonData = (name, value, id) => {
    setPeople(() => {
      return people.map(person => {
        if (person.id === id) {
          if (name === 'sum' && value !== '') {
            return {
              ...person,
              [name]: parseInt(value),
            }
          } else if (name === 'sum' && value === '') {
            return {
              ...person,
              [name]: 0,
            }
          } else if (name === 'userName') {
            return {
              ...person,
              [name]: value,
            }
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
        parseInt(serviceData.delivery);

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
            sumForPay: Math.ceil((person.sum + ((person.sum / 100) * serviceData.tips) + deliveryPerPerson)),
          };
        });
      });
    }
  };

  const getTotalSumOfIndMode = () => {
    let total = 0;
    for (let i = 0; i < people.length; i++) {
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

  const onRemovePerson = (personId) => {
    const peopleCopy = [...people];
    const personData = peopleCopy.filter(person => person.id === personId);
    const personDataIndex = peopleCopy.indexOf(personData[0]);
    if (personDataIndex !== -1) {
      peopleCopy.splice(personDataIndex, 1);
      return setPeople(peopleCopy);
    }
  };

  const checkDisabled = () => {
    if (mode === 'split') {
      if (splitData.orderPrice === 0 || splitData.personsNumber === 0) {
        return true;
      }
    } else {
      const checkArray = [];
      for (let i = 0; i < people.length; i++) {
        if (people[i].sum === '' || people[i].userName === '' || people[i].sum === 0) {
          checkArray.push(people[i]);
        }
      }

      return checkArray.length !== 0;
    }
  };

  return (
    <div className="Container">
      <div className="ContainerInner">
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
          removePerson={(e, id) => onRemovePerson(id)}
          disabled={checkDisabled()}
        />
      </div>
    </div>
  );
};

export default Calculator;