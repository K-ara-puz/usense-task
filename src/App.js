import React from 'react';
import s from './App.module.css';
import { rerenderTree } from './state';

const App = (props) => {
  let onInputValueChange = () => {
    props.validator(inputRef.current.value);
    if (props.state.passwordStrength === 'easy') {
      inputRef.current.className = s.easy;
      labelRef.current.className = `${s.easyLabel} ${s.inpLabel}`;
    }
    if (props.state.passwordStrength === 'hard') {
      inputRef.current.className = s.hard;
      labelRef.current.className = `${s.hardLabel} ${s.inpLabel}`;
    }
    if (props.state.passwordStrength === 'medium') {
      inputRef.current.className = s.medium;
      labelRef.current.className = `${s.mediumLabel} ${s.inpLabel}`;
    }
    if (props.state.passwordStrength === 'smallSize') {
      inputRef.current.className = s.small;
      labelRef.current.className = `${s.smallLabel} ${s.inpLabel}`;
    }
    if (props.state.passwordStrength === 'empty') {
      labelRef.current.className = `${s.inpLabel}`;
    }
    rerenderTree();
  }
  let inputRef = React.createRef();
  let labelRef = React.createRef();
  return (
    <div className={s.appContainer}>
      <p>ENTER YOUR PASSWORD INTO PASSWORD VALIDATOR</p>
      <input ref={inputRef} onChange={onInputValueChange} value={props.state.passwordValue} type='text'/>
      <div ref={labelRef} className={s.inpLabel}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
