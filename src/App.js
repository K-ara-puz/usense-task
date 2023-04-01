import React from 'react';
import s from './App.module.css';

const App = (props) => {
  let validateAndAddStyles = () => {

    props.validator(inputRef.current.value);

    let passwordStrength = props.state.passwordStrength;

    if (passwordStrength === props.state.easyPass) {
      inputRef.current.className = s.easy;
      labelRef.current.className = `${s.easyLabel} ${s.inpLabel}`;
    }
    if (passwordStrength === props.state.hardPass) {
      inputRef.current.className = s.hard;
      labelRef.current.className = `${s.hardLabel} ${s.inpLabel}`;
    }
    if (passwordStrength === props.state.mediumPass) {
      inputRef.current.className = s.medium;
      labelRef.current.className = `${s.mediumLabel} ${s.inpLabel}`;
    }
    if (passwordStrength === props.state.smallPass) {
      inputRef.current.className = s.small;
      labelRef.current.className = `${s.smallLabel} ${s.inpLabel}`;
    }
    if (passwordStrength === props.state.emptyPass) {
      labelRef.current.className = `${s.inpLabel}`;
    }
  }
  let inputRef = React.createRef();
  let labelRef = React.createRef();
  return (
    <div className={s.appContainer}>
      <p>ENTER YOUR PASSWORD INTO VALIDATOR</p>
      <input ref={inputRef} onChange={validateAndAddStyles} value={props.state.passwordValue} type='text'/>
      <div ref={labelRef} className={s.inpLabel}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
