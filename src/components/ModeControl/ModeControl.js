import './ModeControl.css';
import SplitMode from "./SplitMode/SplitMode";
import Service from "./Service/Service";
import SplitBill from "./SplitBill/SplitBill";
import IndividualMode from "./IndividualMode/IndividualMode";
import IndividualBill from "./IndividualBill/IndividualBill";

const ModeControl = (props) => {
  return (
    <>
      <div className="Mode">
        <label>
          <input
            type="radio"
            name="mode"
            value="split"
            checked={props.mode === 'split'}
            onChange={props.changeMode}
          />
          Поровну между всеми участниками
        </label>
      </div>
      <div className="Mode">
        <label>
          <input
            type="radio"
            name="mode"
            value="individual"
            checked={props.mode === 'individual'}
            onChange={props.changeMode}
          />
          Каждому индивидуально
        </label>
      </div>
      <div className="ModeForms">
        {
          props.mode === 'split' ?
            (<SplitMode splitData={props.splitData} changeSplitData={props.changeSplitData}/>) :
            (<IndividualMode
              people={props.people}
              addPerson={props.addPerson}
              changePersonData={props.changePersonData}
              removePerson={props.removePerson}
            />)
        }
        <Service serviceData={props.serviceData} changeServiceData={props.changeServiceData}/>
      </div>
      <div>
        <button
          type="button"
          onClick={props.calculate}
          disabled={props.disabled}
          className="Btn"
        >
          Рассчитать
        </button>
      </div>
      {props.mode === 'split' ?
        (<SplitBill splitData={props.splitData}/>) :
        (<IndividualBill getTotal={props.getIndTotalSum} people={props.people}/>)
      }
    </>
  );
};

export default ModeControl;