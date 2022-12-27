import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";

const initialState = {
  counter: 0,
};

type Action = {
  type: "increment" | "decrement";
};

type InitialState = typeof initialState;

export const CounterContextDispatch = createContext<Dispatch<Action>>(
  {} as Dispatch<Action>
);

export const CounterContextState = createContext<InitialState>(
  {} as InitialState
);

const reducer = (state = initialState, action: Action): InitialState => {
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
