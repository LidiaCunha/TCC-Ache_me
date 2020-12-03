import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Teste1 from './src/pages/teste1/index';
import Teste2 from './src/pages/teste2/index';
import menu from './src/pages/menu/index';

import Menu from './src/components/menu/index';

const Routes = createAppContainer(
    createDrawerNavigator({
        Teste1,
        Teste2,
        menu,
    }, {
        initialRouteName: 'Teste1',
        contentComponent: Menu
    })
);

export default Routes;