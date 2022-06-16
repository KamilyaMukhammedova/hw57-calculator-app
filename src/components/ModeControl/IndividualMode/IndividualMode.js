import React from 'react';

const IndividualMode = (props) => {
  return (
    <form>
      {props.people.map(person => (
        <div key={person.id}>
          <input
            type="text"
            name="userName"
            value={person.userName}
            onChange={(e) => props.changePersonData(e, person.id)}
          />
          <input
            type="number"
            name="sum"
            min="0"
            value={person.sum}
            onChange={(e) => props.changePersonData(e, person.id)}
          />
          <button type="button">-</button>
        </div>
      ))}
      <button type="button" onClick={props.addPerson}>+</button>
    </form>
  );
};

export default IndividualMode;