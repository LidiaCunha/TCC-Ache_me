import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

function DataProvider({children}) {
  
    const [ features , setFeatures ] = useState([]);
    const [ problems , setProblems ] = useState([]);
    const [ location , setLocation ] = useState({
        cep:"", state:"", bairro:"", street:"" , city:"" , reference_point:""
    });

    const addFeature = ( feature ) => {
        setFeatures( [...features, feature] );
    }

    const addFeatures = ( Afeatures ) => {
        setFeatures(Afeatures)
    }

    const addProblem = ( problem ) => {
        setProblems([ ...problems, problem]);
    } 

    const addProblems = ( Aproblems ) => {
        setProblems(Aproblems);
    }

    const addLocation = ({ cep, state, bairro, street , city , reference_point }) => {
        setLocation({ cep, state, bairro, street , city , reference_point });
    }


    const methods = {
        addFeature,
        addLocation,
        addProblem,
        features, 
        problems, 
        location,
        addFeatures,
        addProblems,
        setProblems,
        setFeatures,
    }

    return (
      <DataContext.Provider value={methods} >
          {children}
      </DataContext.Provider>
  );
}

export default DataProvider;