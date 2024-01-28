import React from "react";
import Display from "./Display/Display";
import Buttons from "../Button/Button";
import s from './Counter.module.scss'
import {NavLink} from "react-router-dom";
import {connect, useDispatch, useSelector} from "react-redux";
import {counterReducer, setCounterAC} from "../../state/reducers/counter-reducer";
import {compose, Dispatch} from "redux";
import {counterValueSelector, disabledValueSelector} from "../../state/selectors/counter-selectors";
import {startValueSelector} from "../../state/selectors/settings-selectors";
import {checkLS} from "../../common/localStorage/localStorage";
import PlusOneIcon from '@mui/icons-material/PlusOne';
import SettingsIcon from '@mui/icons-material/Settings';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import HomeIcon from '@mui/icons-material/Home';
import {colorModeSelector} from "../../state/selectors/colorMode-selectors";
import {AppRootStateType} from "../../state/store";

export const _Counter = () => {

    const counterValue: number = useSelector(counterValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const disabledValue: number = useSelector(disabledValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

    const dispatch: Dispatch = useDispatch()

    const isDisabledInc: boolean = counterValue >= disabledValue;
    const isDisabledReset: boolean = counterValue === startValue;

    const addNumberInSetCounter = (): void => {
        dispatch(setCounterAC(counterValue + 1));
    }

    const resetCounter = (): void => {
        dispatch(setCounterAC(startValue));
    }

    const checkLocalStorage: boolean = checkLS('app-state')

    return (
        <div className={colorMode === 'dark' ? `${s.counterDarkMode} ${s.counter}` : s.counter}>
            <div className={s.counterContainer}>
                <div className={s.mainScreen}>
                    <HomeIcon />
                    <span>Main screen</span>
                </div>
                {
                    checkLocalStorage
                        ? <div className={s.message}>You need to set settings</div>
                        : <Display />
                }
                <div className={s.buttonContainer}>
                    <Buttons disabledButton={isDisabledInc || checkLocalStorage}
                             onClick={addNumberInSetCounter}
                    >
                        <PlusOneIcon />
                    </Buttons>
                    <Buttons disabledButton={isDisabledReset}
                             onClick={resetCounter}
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