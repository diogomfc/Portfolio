import { createContext } from "react";

interface IProfile {
  conditions?: boolean;
  onClickButton?: () => void;
}

const defaultState = {
  conditions: false,
};

export const GlobalContext = createContext([]);

export const ProfileContext = createContext(false);
