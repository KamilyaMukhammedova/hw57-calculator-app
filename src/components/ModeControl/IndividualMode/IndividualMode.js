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
            value={parseInt(person.sum)}
            onChange={(e) => props.changePersonData(e, person.id)}
          />
          <button
            type="button"
            onClick={(e) => props.removePerson(e, person.id)}
          >
            -
          </button>
        </div>
      ))}
      <button type="button" onClick={props.addPerson}>+</button>
    </form>
  );
};

export default IndividualMode;