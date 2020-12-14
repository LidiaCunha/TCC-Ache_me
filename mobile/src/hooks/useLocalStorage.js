import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';

function useLocalStorage( key , initialValue ) {
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
    const alreadyExists = Storage.getItem(key); 
    
    if ( alreadyExists )
      return alreadyExists;

    return typeof initialValue === 'function' && value.length > 0 ? initialValue() : initialValue; 
  })

  React.useEffect(() => {
    Storage.setItem(key , value)
  },[ key, value ] )

  return [value ,setValue];
}

export default useLocalStorage; 