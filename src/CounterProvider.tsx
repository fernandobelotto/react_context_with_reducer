import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useReducer,
} from "react";

const initialState = {
  counter: 0,
};

type InitialState = typeof initialState;

export const CounterContextDispatch = createContext<any>(
  {} as { dispatch: any }
);

export const CounterContextState = createContext<InitialState>(
  {} as InitialState
);

const reducer = (state = initialState, action: any): InitialState => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };

    case "decrement":
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
};

type CounterProviderProps = PropsWithChildren<{}>;

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContextState.Provider value={state}>
      <CounterContextDispatch.Provider value={dispatch}>
        {children}
      </CounterContextDispatch.Provider>
    </CounterContextState.Provider>
  );
};
