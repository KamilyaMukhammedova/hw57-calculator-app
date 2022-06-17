const SplitBill = (props) => {
  return (
    <div className="Bill">
      <p><span>Общая сумма:</span> {props.splitData.orderPrice} сом</p>
      <p><span>Количество человек:</span> {props.splitData.personsNumber}</p>
      <p><span>Каждый платит по:</span> {props.splitData.sumPerPerson} сом</p>
    </div>
  );
};

export default SplitBill;