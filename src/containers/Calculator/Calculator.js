import React, {useState} from 'react';
import ModeControl from "../../components/ModeControl/ModeControl";

const Calculator = () => {
  const [mode, setMode] = useState('split');

  return (
    <div className="Container">
      <h2>Сумма заказа считается:</h2>
      <ModeControl/>
    </div>
  );
};

export default Calculator;