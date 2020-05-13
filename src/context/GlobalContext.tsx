import React, { useReducer, useContext, createContext } from 'react';

type IProps = {
  children: any;
};

type IContext = {
  lang: string;
  setLang: any;
};

const initialState = {
  lang: 'en',
  setLang: (): any => {},
};

const GlobalContext = createContext<IContext>(initialState);

const reducer = (state: IContext, action: any) => {
  switch (action.type) {
    case 'SET_LANGUAGE': {
      return {
        ...state,
        lang: action.payload,
      };
    }
    default:
      return state;
  }
};

const GlobalProvider = ({ children }: IProps) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const handleChangeLang = (lang: string) => {
    dispatcher({
      type: 'SET_LANGUAGE',
      payload: lang,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setLang: handleChangeLang,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => useContext(GlobalContext);

export { GlobalContext, GlobalProvider, useGlobalContext };
