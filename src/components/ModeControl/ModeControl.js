import React from 'react';

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
    </div>
  );
};

export default ModeControl;