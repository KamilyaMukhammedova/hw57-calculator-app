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
          />
          <input
            type="number"
            name="sum"
            value={person.sum}
          />
          <button type="button">-</button>
        </div>
      ))}
      <button type="button" onClick={props.addPerson}>+</button>
    </form>
  );
};

export default IndividualMode;