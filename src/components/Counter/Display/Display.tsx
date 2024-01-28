import React from "react";
import s from './Display.module.scss'
import {connect, useSelector} from "react-redux";
import {counterValueSelector, disabledValueSelector} from "../../../state/selectors/counter-selectors";
import {colorModeSelector} from "../../../state/selectors/colorMode-selectors";
import {compose} from "redux";
import {AppRootStateType} from "../../../state/store";


/*export const _Display = () => {
    const counterValue: number = useSelector(counterValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

    const displayStyleMode: string = colorMode === 'dark' ? `${s.displayDarkMode} ${s.display}` : s.display
    const errorStyle: string = +counterValue >= disabledValue ? `${displayStyleMode} ${s.lastValueStyle}` : `${displayStyleMode}`;

    return (
        <div className={errorStyle}>{counterValue}</div>
    )
}*/

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