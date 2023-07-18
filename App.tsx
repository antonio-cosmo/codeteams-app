import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto"
import { StatusBar } from "react-native";
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components/native"
import defaultTheme from "./src/themes";
import { Loading } from "@components/Loading";
import { NewGroup } from "@screens/NewGroup";
export default function App() {
    const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
    return (
        <ThemeProvider theme={defaultTheme}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            {/* {fontsLoaded ? <Groups /> : <Loading />} */}
            {fontsLoaded ? <NewGroup /> : <Loading />}
        </ThemeProvider>
    );
}