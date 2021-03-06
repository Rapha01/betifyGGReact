import React, { useContext } from 'react';

// material-ui
import { Typography } from '@material-ui/core';
import { useLocation, useParams } from 'react-router-dom';

// project imports
import NavGroup from './NavGroup';
import NavGameBox from './NavGameBox';
import menuItem from './../../../../menu-items';
import useAuth from '../../../../hooks/useAuth';

//-----------------------|| SIDEBAR MENU LIST ||-----------------------//

const MenuList = () => {
    const location = useLocation();
    const { user } = useAuth();
    const { gameId } = useParams();

    const navItems = menuItem.items.map((item) => {
        if (item.id == 'game') {
            if (!gameId) {
                return;
            } else {
                item.title = '';//'Game: ' + game.title;
                for (let child of item.children)
                    child.url = '/game/' + gameId + '/' + child.id 
                
                return <React.Fragment key={item.id}><NavGameBox /><NavGroup item={item} /></React.Fragment>
            }  
        }

        if (item.requiresAuth && !user)
            return;

        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    return navItems;
};

export default MenuList;
