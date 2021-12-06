import { ThemeProvider } from "@material-ui/core";
import { ResortApp } from "./ResortApp";
import { theme } from "./themeConfig";

export const App = () => {

    return (
        <ThemeProvider theme={theme}>
            <ResortApp />
        </ThemeProvider>
    )
}
