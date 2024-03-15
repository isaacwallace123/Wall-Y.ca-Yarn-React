import { useState, createContext, ReactNode } from "react";
import { enqueueSnackbar } from "notistack";
import { ThemeContextEnum } from "./ThemeEnum";

interface Props {
    children?: ReactNode
}

export interface ThemeInterface {
    Theme: ThemeContextEnum,
    Swap(): void
}

const DefaultTheme = ThemeContextEnum.Light

export const ThemeContext = createContext<ThemeInterface>({Theme: DefaultTheme, Swap: function(){}});

const ThemeMode = ({ children }: Props) => {
    const [pageTheme, setTheme] = useState<ThemeContextEnum>(DefaultTheme);

    const swapTheme = () => {
        let ChosenTheme = pageTheme == ThemeContextEnum.Dark ? ThemeContextEnum.Light : ThemeContextEnum.Dark;

        enqueueSnackbar(`${ThemeContextEnum[ChosenTheme]} Mode has been applied.`, { variant: 'info' });
        setTheme(ChosenTheme);
    }

    return (
        <ThemeContext.Provider value={{Theme: pageTheme, Swap: swapTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeMode;