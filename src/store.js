export const store = {
    _state: {
        passwordValue: '',
        passwordStrength: '',
        easyPass: 'easy',
        mediumPass: 'medium',
        hardPass: 'hard',
        emptyPass: 'empty',
        smallPass: 'smallSize',
        regexLetters: /[a-zA-Z]/g,
        regexNumbers: /[0-9]/g,
        regexSymbols: /\W+/g,
    },
    getState() {
        let state = {}
        state = this._state
        return state
    },
    subscribe(observer) {
        this.rerenderTree = observer;
    },
    rerenderTree() {
        console.log("render -")
    },
    ifMedium(value) {
        if ((value.match(this._state.regexLetters) && value.match(this._state.regexNumbers) && !value.match(this._state.regexSymbols))
        || (value.match(this._state.regexLetters) && value.match(this._state.regexSymbols) && !value.match(this._state.regexNumbers))
        || (value.match(this._state.regexNumbers) && value.match(this._state.regexSymbols) && !value.match(this._state.regexLetters))) {
            return true
        }
        return false
    },
    checkPasswordStrength(value) {
        if (this.ifMedium(value) === true) {
            return this._state.mediumPass;
        }
        if (value.match(this._state.regexLetters) && value.match(this._state.regexNumbers) && value.match(this._state.regexSymbols)) {
            return this._state.hardPass;
        }
        if (value === '') {
            return this._state.emptyPass;
        }
        if (value.length > 0 && value.length < 8) {
            return this._state.smallPass;
        }
        return this._state.easyPass;
    },
    validator(value) {
        this._state.passwordValue = value;
        this._state.passwordStrength =  this.checkPasswordStrength(value);
        this.rerenderTree();
    }
}