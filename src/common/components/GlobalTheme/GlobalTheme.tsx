import {ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";
import {connect, useSelector} from "react-redux";
import {colorModeSelector} from "../../../state/selectors/colorMode-selectors";
import {darkCustomTheme} from "../../themes/dark.theme";
import {lightCustomTheme} from "../../themes/light.theme";
import {compose} from "redux";
import {AppRootStateType} from "../../../state/store";

type StateType = {
    colorMode: string
}

type ThemeType = {
    children: ReactNode
}


export const GlobalTheme: React.FC<ThemeType> = ({children}) => {
    const colorMode: string = useSelector(colorModeSelector)


    const mode = colorMode === 'light'
        ? lightCustomTheme : darkCustomTheme

    return (
        <ThemeProvider theme={mode}>
            {children}
        </ThemeProvider>
    )
}

/*class GlobalTheme extends React.Component<any> {
    render() {
        const mode = this.props.state.colorMode === 'light' ? lightCustomTheme : darkCustomTheme

        return (
            <ThemeProvider theme={mode}>
                {this.props.children}
            </ThemeProvider>
        )
    }
}*/

let mapStateToProps = (state: AppRootStateType) => {
    return {
        state: state.colorMode.mode
    }
}

export const LIGHT_MODE: string = 'Light mode';
export const DARK_MODE: string = 'Dark mode';

/*export default compose<React.ComponentType>(
    connect(mapStateToProps)
)(GlobalTheme)*/
