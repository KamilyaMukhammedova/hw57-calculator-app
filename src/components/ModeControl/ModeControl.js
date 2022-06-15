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
          />
          Каждому индивидуально
        </label>
      </div>
    </div>
  );
};

export default ModeControl;