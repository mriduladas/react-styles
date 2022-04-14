import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValidInput, setValidInput ] = useState(true);
  let message;

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length ===0){
      setValidInput(false);
     
    }else{
      setValidInput(true);
    }
    
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length ===0){
      setValidInput(false);
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValidInput? 'red': 'black' }}>Course Goal</label>
        <input 
        style={{backgroundColor: !isValidInput? 'red': '#ccc',
                background:   !isValidInput? 'salmon': 'transparent'
      }}
        type="text" onChange={goalInputChangeHandler} />
        
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
