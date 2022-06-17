const IndividualBill = (props) => {
  return (
    <div className="Bill">
      <p><span>Общая сумма:</span> {props.getTotal} сом</p>
      {props.people.map(person => {
        return (
          <p
            key={person.id}
            style={person.userName === '' ? {display: 'none'} : {display: 'block'}}
          >
            <span>
              {person.userName}:
            </span>
            {person.sumForPay} сом
          </p>
        );
      })}
    </div>
  );
};

export default IndividualBill;