let state = {
    passwordValue: '',
    passwordStrength: '',

}
export let rerenderTree = () => {
    console.log("render -")
}
export const validator =  (value)  => {
    let regexLetters = /[a-zA-Z]/g;
    let regexNumbers = /[0-9]/g;
    let regexSymbols = /\W+/g;

    state.passwordValue = value;
    if ((value.match(regexLetters) && value.match(regexNumbers) && !value.match(regexSymbols)) || (value.match(regexLetters) && value.match(regexSymbols) && !value.match(regexNumbers)) || (value.match(regexNumbers) && value.match(regexSymbols) && !value.match(regexLetters))) {
        state.passwordStrength = 'medium';
    } else if (value.match(regexLetters) && value.match(regexNumbers) && value.match(regexSymbols)) {
        state.passwordStrength = 'hard';
    } else if (value === '') {
        state.passwordStrength = 'empty';
    } else {
        state.passwordStrength = 'easy';
    }
    if (value.length > 0 && value.length < 8) {
        state.passwordStrength = 'smallSize';
    }
}
export const observer = (observer) => {
    rerenderTree = observer;
}
export default state;