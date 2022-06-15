import React, {useState} from 'react';
import ModeControl from "../../components/ModeControl/ModeControl";

const Calculator = () => {
  const [mode, setMode] = useState('split');

  const onModeChange = value => {
    setMode(value);
  };

  return (
    <div className="Container">
      <h2>Сумма заказа считается:</h2>
      <ModeControl mode={mode} changeMode={(e) => onModeChange(e.target.value)}/>
    </div>
  );
};

export default Calculator;