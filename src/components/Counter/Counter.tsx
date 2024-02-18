import React from "react";
import s from './Counter.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setCounterAC} from "../../state/reducers/counter-reducer";
import {compose, Dispatch} from "redux";
import {checkLS} from "../../common/localStorage/localStorage";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SettingsIcon from '@mui/icons-material/Settings';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HomeIcon from '@mui/icons-material/Home';
import {AppRootStateType} from "../../state/store";
import Buttons from "../Button/Button";
import Display from "./Display/Display";

type StateCounterType = {
    counterValue: number
    disabledValue: number
}

type StateSettingsType = {
    maxValue: number
    startValue: number
}

type StateColorModeType = {
    mode: string
}

type StateType = {
    stateCounter: StateCounterType
    stateSettings: StateSettingsType
    stateColorMode: StateColorModeType
}

type MapStateToPropsType = {
    state: StateType
}

type MapDispatchToPropsType = {
    setCounterCallback: (counterValue: number) => void
}

type Props = MapStateToPropsType & MapDispatchToPropsType

class Counter extends React.Component<Props> {
    checkLocalStorage = (): boolean => {
        return checkLS('app-state')
    }

    addNumberInSetCounter = (): void => {
        this.props.setCounterCallback(this.props.state.stateCounter.counterValue + 1);
    }

    resetCounter = (): void => {
        this.props.setCounterCallback(this.props.state.stateSettings.startValue);
    }

    render() {
        const isDisabledInc: boolean = this.props.state.stateCounter.counterValue >= this.props.state.stateCounter.disabledValue;
        const isDisabledReset: boolean = this.props.state.stateCounter.counterValue === this.props.state.stateSettings.startValue;

        return (
            <div className={this.props.state.stateColorMode.mode === 'dark' ? `${s.counterDarkMode} ${s.counter}` : s.counter}>
                <div className={s.counterContainer}>
                    <div className={s.mainScreen}>
                        <HomeIcon />
                        <span>Main screen</span>
                    </div>
                    {
                        this.checkLocalStorage()
                            ? <div className={s.message}>You need to set settings</div>
                            : <Display />
                    }
                    <div className={s.buttonContainer}>
                        <Buttons disabledButton={isDisabledInc || this.checkLocalStorage()}
                                 onClick={this.addNumberInSetCounter}
                        >
                            <PlusOneIcon />
                        </Buttons>
                        <Buttons disabledButton={isDisabledReset}
                                 onClick={this.resetCounter}
                        >
                            <RestartAltIcon />
                        </Buttons>
                        <NavLink to={'/counter/settings'}>
                            <Buttons
                            >
                                <SettingsIcon />
                            </Buttons>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        state: {
            stateCounter: state.counter,
            stateSettings: state.settings,
            stateColorMode: state.colorMode
        }
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setCounterCallback: (counterValue: number) => {
            dispatch(setCounterAC(counterValue))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps)
)(Counter);