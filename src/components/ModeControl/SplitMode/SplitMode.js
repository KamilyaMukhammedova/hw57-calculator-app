import './SplitMode.css';

const SplitMode = (props) => {
  return (
    <div>
      <form className="SplitModeForm">
        <div>
          <label className="SplitModeLabel">
            <span className="SplitModeSpan">Человек:</span>
            <span>
            <input
              type="number"
              name="personsNumber"
              min="0"
              value={props.splitData.personsNumber}
              onChange={props.changeSplitData}
              className="SplitModeInput"
            />
           <span>чел</span>
          </span>
          </label>
        </div>
        <div>
          <label className="SplitModeLabel">
            <span className="SplitModeSpan">Сумма заказа:</span>
            <span>
            <input
              type="number"
              name="orderPrice"
              min="0"
              value={props.splitData.orderPrice}
              onChange={props.changeSplitData}
              className="SplitModeInput"
            />
            <span>сом</span>
          </span>
          </label>
        </div>
      </form>
    </div>
  );
};

export default SplitMode;