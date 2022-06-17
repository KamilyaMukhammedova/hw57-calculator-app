import './IndividualMode.css';

const IndividualMode = (props) => {
  return (
    <div className="IndividualModeContainer">
      <form>
        {props.people.map(person => (
          <div key={person.id} className="IndividualModeDiv">
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
              className="Btn"
              onClick={(e) => props.removePerson(e, person.id)}
            >
              -
            </button>
          </div>
        ))}
        <button type="button" onClick={props.addPerson} className="Btn">+</button>
      </form>
    </div>
  );
};

export default IndividualMode;