import React from 'react';
import { useSelector } from 'react-redux';

import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline, StyledEngineProvider } from '@material-ui/core';
import { Helmet } from "react-helmet";
// routing
import Routes from './routes';

// defaultTheme
import theme from './themes';

// project imports
import Locales from './ui-component/Locales';
import NavigationScroll from './layout/NavigationScroll';
// import RTLLayout from './ui-component/RTLLayout';
import Snackbar from './ui-component/extended/Snackbar';

// auth provider
//import { FirebaseProvider } from './contexts/FirebaseContext';
import {JWTProvider} from './contexts/JWTContext';
// import {Auth0Provider} from '../contexts/Auth0Context';
import { GameProvider } from './contexts/GameContext';


//-----------------------|| APP ||-----------------------//

const App = () => {
    const customization = useSelector((state) => state.customization);

    return (
        <>
        <Helmet>
            <title>Betify.gg - Bet anything</title>
            <meta name="title" content="Betify.gg - Bet anything" />
            <meta name="description" content="Bet and wager for fun about anything with anyone."/>
            <meta name="keywords" content="bet, wager, anything, friends, custom bet, custom"/>
        </Helmet>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme(customization)}>
                <CssBaseline />
                <Locales>
                    <NavigationScroll>
                        <JWTProvider>               
                                <Routes />
                                <Snackbar />
                        </JWTProvider>
                    </NavigationScroll>
                </Locales>
            </ThemeProvider>
        </StyledEngineProvider>
        </>
    );
};

export default App;
