import { Theme, createTheme } from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
type Mode = "light" | "dark";
interface MyContextValue {
  mode: Mode;
  darkTheme: Theme;
  setMode: Dispatch<SetStateAction<Mode>>;
}
const MyContext = createContext<MyContextValue>({} as MyContextValue);

export const MyContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<Mode>("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <MyContext.Provider value={{ mode, setMode, darkTheme }}>
      {children}
    </MyContext.Provider>
  );
};
export const useMyContext = (): MyContextValue => useContext(MyContext);
