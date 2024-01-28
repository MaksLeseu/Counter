import React from "react";
import s from './Settings.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {setCounterAC, setDisabledValueAC} from "../../state/reducers/counter-reducer";
import {compose} from "redux";
import {setMaxValueAC, setStartValueAC} from "../../state/reducers/settings-reducer";
import InputSettingsDisplay from "./InputSettingsDisplay/InputSettingsDisplay";
import Buttons from "../Button/Button";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import {AppRootStateType} from "../../state/store";

/*export const _Settings = () => {

    const maxValue: number = useSelector(maxValueSelector)
    const startValue: number = useSelector(startValueSelector)
    const colorMode: string = useSelector(colorModeSelector)

    const dispatch: Dispatch = useDispatch()

    const startValueEqualsZero: boolean = startValue === 0;
    const startValuePlusOneEqualsMaxValue: boolean = startValue + 1 === maxValue;
    const maxValueMinusOneEqualsStartValue: boolean = maxValue - 1 === startValue;


    const setSettingsValue = (): void => {
        dispatch(setDisabledValueAC(maxValue))
        dispatch(setCounterAC(startValue))
    }

    const setInputMaxValue = useCallback((maxValue: number): void => {
        dispatch(setMaxValueAC(maxValue))
    }, [dispatch])

    const setInputStartValue = useCallback((startValue: number): void => {
        dispatch(setStartValueAC(startValue))
    }, [dispatch])

    const maxValueInputButton = (valueMax: string): void => {
        valueMax === 'increment' ? setInputMaxValue(maxValue + 1) : setInputMaxValue(maxValue - 1)
    }

    const startValueInputButton = (valueStart: string): void => {
        valueStart === 'increment' ? setInputStartValue(startValue + 1) : setInputStartValue(startValue - 1)
    }

    return (
        <div className={colorMode === 'dark' ? `${s.settingsDarkMode} ${s.settings}` : s.settings}>
            <div className={s.settingsContainer}>
                <div className={s.display}>
                    <div className={s.settingsText}>
                        <SettingsIcon />
                        <span>Settings</span>
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            value={maxValue}
                            label={'max value:'}
                            disabledDecrement={maxValueMinusOneEqualsStartValue}
                            onClick={maxValueInputButton}
                            onChange={setInputMaxValue}
                        />
                    </div>
                    <div className={s.containerValue}>
                        <InputSettingsDisplay
                            value={startValue}
                            label={'start value:'}
                            disabledIncrement={startValuePlusOneEqualsMaxValue}
                            disabledDecrement={startValueEqualsZero}
                            onClick={startValueInputButton}
                            onChange={setInputStartValue}
                        />
                    </div>
                </div>
                <div className={s.buttonContainer}>
                    <NavLink to={'/counter'} className={s.navLink} >
                        <Buttons
                            style={true}
                            onClick={setSettingsValue}
                        >
                            <SaveAltIcon />
                        </Buttons>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}*/

type StateSettingsType = {
    maxValue: number
    startValue: number
}

type StateColorModeType = {
    mode: string
}

type Props = {
    stateSettings: StateSettingsType
    stateColorMode: StateColorModeType
    setDisabledValueAC: any
    setCounterAC: any
    setMaxValueAC: any
    setStartValueAC: any
}

class Settings extends React.Component<Props> {
    setSettingsValue = (): void => {
        this.props.setDisabledValueAC(this.props.stateSettings.maxValue)
        this.props.setCounterAC(this.props.stateSettings.startValue)
    }

    setInputMaxValue = (maxValue: number): void => {
        this.props.setMaxValueAC(maxValue)
    }

    setInputStartValue = (startValue: number): void => {
        this.props.setStartValueAC(startValue)
    }

    maxValueInputButton = (valueMax: string): void => {
        valueMax === 'increment' ? this.setInputMaxValue(this.props.stateSettings.maxValue + 1) : this.setInputMaxValue(this.props.stateSettings.maxValue - 1)
    }

    startValueInputButton = (valueStart: string): void => {
        valueStart === 'increment' ? this.setInputStartValue(this.props.stateSettings.startValue + 1) : this.setInputStartValue(this.props.stateSettings.startValue - 1)
    }

    render() {
        return (
            <div className={this.props.stateColorMode.mode === 'dark' ? `${s.settingsDarkMode} ${s.settings}` : s.settings}>
                <div className={s.settingsContainer}>
                    <div className={s.display}>
                        <div className={s.settingsText}>
                            <SettingsIcon />
                            <span>Settings</span>
                        </div>
                        <div className={s.containerValue}>
                            <InputSettingsDisplay
                                value={this.props.stateSettings.maxValue}
                                label={'max value:'}
                                disabledDecrement={this.props.stateSettings.maxValue - 1 === this.props.stateSettings.startValue}
                                onClick={this.maxValueInputButton}
                                onChange={this.setInputMaxValue}
                            />
                        </div>
                        <div className={s.containerValue}>
                            <InputSettingsDisplay
                                value={this.props.stateSettings.startValue}
                                label={'start value:'}
                                disabledIncrement={this.props.stateSettings.startValue + 1 === this.props.stateSettings.maxValue}
                                disabledDecrement={this.props.stateSettings.startValue === 0}
                                onClick={this.startValueInputButton}
                                onChange={this.setInputStartValue}
                            />
                        </div>
                    </div>
                    <div className={s.buttonContainer}>
                        <NavLink to={'/counter'} className={s.navLink} >
                            <Buttons
                                style={true}
                                onClick={this.setSettingsValue}
                            >
                                <SaveAltIcon />
                            </Buttons>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state: AppRootStateType) => {
    return {
        stateSettings: state.settings,
        stateColorMode: state.colorMode
    }
}

export default compose(
    connect(mapStateToProps, {setDisabledValueAC, setCounterAC, setMaxValueAC, setStartValueAC})
)(Settings);