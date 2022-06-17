import './Service.css';

const Service = (props) => {
  return (
    <form className="ServiceForm">
      <div>
        <label className="ServiceLabel">
          <span className="ServiceSpan">Процент чаевых:</span>
          <input
            type="number"
            name="tips"
            min="0"
            value={props.serviceData.tips}
            onChange={props.changeServiceData}
            className="ServiceInput"
          />
          <span>%</span>
        </label>
      </div>
      <div>
        <label className="ServiceLabel">
          <span className="ServiceSpan">Доставка:</span>
          <input
            type="number"
            name="delivery"
            min="0"
            value={props.serviceData.delivery}
            onChange={props.changeServiceData}
            className="ServiceInput"
          />
          <span>сом</span>
        </label>
      </div>
    </form>
  );
};

export default Service;