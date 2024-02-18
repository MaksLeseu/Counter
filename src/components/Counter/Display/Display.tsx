import React from "react";
import s from './Display.module.scss'
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootStateType} from "../../../state/store";

type StateCounterType = {
    counterValue: number
    disabledValue: number
}

type StateColorModeType = {
    mode: string
}

type Props = {
    stateCounter: StateCounterType
    stateColorMode: StateColorModeType
}

class Display extends React.Component<Props> {
    render() {
        const displayStyleMode: string = this.props.stateColorMode.mode === 'dark' ? `${s.displayDarkMode} ${s.display}` : s.display
        const errorStyle: string = +this.props.stateCounter.counterValue >= this.props.stateCounter.disabledValue ? `${displayStyleMode} ${s.lastValueStyle}` : `${displayStyleMode}`;

        return (
            <div className={errorStyle}>{this.props.stateCounter.counterValue}</div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        stateCounter: state.counter,
        stateColorMode: state.colorMode
    }
}

export default compose(
    connect(mapStateToProps)
)(Display)