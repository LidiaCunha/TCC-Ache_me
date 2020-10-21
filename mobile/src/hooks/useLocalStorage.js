import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';

const PREFIX = 'acheme'

function useLocalStorage( key , initialValue ) {
  const addKeyToPrefix = `${PREFIX}-${key}`;
  const Storage = {
    getItem : async( prefix ) =>{
      const res = await AsyncStorage.getItem( prefix );
      return res;
    },
    setItem : async( prefix, value ) => {
      const res = await AsyncStorage.setItem(prefix , JSON.stringify(value));
      return res;
    },
    keys: async ( ) => {
      const res = await AsyncStorage.getAllKeys();
      return res
    },
    clear:async () => {
      await AsyncStorage.clear();
    }
  };
  const [ value, setValue ] = React.useState(() => {
    // VENDO SE JA EXISTEM DADOS NA CHAVE QUE FOI ENTREGADA
    const alreadyExists = Storage.getItem(addKeyToPrefix); 
    
    if ( alreadyExists )
      return alreadyExists;

    return typeof initialValue === 'function' ? initialValue() : initialValue; 
  })

  React.useEffect(() => {
    // TODA VEZ QUE MUDAR VALOR A SER COLOCADO NO LOCALSTORAGE OU SUA 
    // CHAVE SERÁ ADICIONADO UM NOVO ITEM NO LOCALSTORAGE
    Storage.setItem(addKeyToPrefix , value)
  },[ addKeyToPrefix, value ] )

  return [value ,setValue];
}

export default useLocalStorage; 