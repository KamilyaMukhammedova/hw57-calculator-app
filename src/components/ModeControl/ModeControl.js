import React from 'react';
import SplitMode from "./SplitMode/SplitMode";
import Service from "./Service/Service";
import SplitBill from "./SplitBill/SplitBill";
import IndividualMode from "./IndividualMode/IndividualMode";
import IndividualBill from "./IndividualBill/IndividualBill";

const ModeControl = (props) => {
  return (
    <div>
      <div>
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
      <div>
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

      <div>
        {props.mode === 'split' ?
          (<SplitMode splitData={props.splitData} changeSplitData={props.changeSplitData}/>) :
          (<IndividualMode
            people={props.people}
            addPerson={props.addPerson}
            changePersonData={props.changePersonData}
            removePerson={props.removePerson}
          />)
        }
      </div>

      <div>
        <Service serviceData={props.serviceData} changeServiceData={props.changeServiceData}/>
      </div>

      <div>
        <button
          type="button"
          onClick={props.calculate}
          disabled={props.disabled}
        >
          Рассчитать
        </button>
      </div>

      {props.mode === 'split' ?
        (<SplitBill splitData={props.splitData}/>) :
        (<IndividualBill getTotal={props.getIndTotalSum} people={props.people}/>)
      }

    </div>
  );
};

export default ModeControl;