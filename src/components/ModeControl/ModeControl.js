import React from 'react';
import SplitMode from "./SplitMode/SplitMode";
import Service from "./Service/Service";
import SplitBill from "./SplitBill/SplitBill";

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
        <SplitMode splitData={props.splitData} changeSplitData={props.changeSplitData}/>
      </div>

      <div>
        <Service serviceData={props.serviceData} changeServiceData={props.changeServiceData}/>
      </div>

      <div>
        <button type="button" onClick={props.calculate}>Рассчитать</button>
      </div>
      <SplitBill splitData={props.splitData}/>
    </div>
  );
};

export default ModeControl;