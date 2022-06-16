import React from 'react';

const IndividualBill = (props) => {
  return (
    <div>
      <p>Общая сумма: {props.getTotal} сом</p>
      {props.people.map(person => {
        return (
          <div key={person.id} style={person.userName === '' ? {display: 'none'}: {display: 'block'}}>
            <p>{person.userName}: {person.sumForPay} сом</p>
          </div>
        )
      })}
    </div>
  );
};

export default IndividualBill;