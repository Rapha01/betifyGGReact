import React, { useEffect } from 'react';
import fct from '../../utils/fct.js';
import GameContext from '../../contexts/GameContext';

// material-ui
import {
    Grid,
    Typography,
    makeStyles
} from '@material-ui/core';

import useColors from '../../hooks/useColors.js';
import BetStatusTab from '../../ui-component/game/BetStatusTab';
// material-ui

//-----------------------|| CUSTOM DATETIME ||-----------------------//

const useStyles = makeStyles((theme) => ({
    successBadge: {
        color: theme.palette.success.dark,
        width: '14px',
        height: '14px'
    },
    tableSubContent: {
        whiteSpace: 'break-spaces'
    },
}));


const BetInfo = (props) => {
    const { bet } = props;
    const { game } = React.useContext(GameContext);
    const classes = useStyles();

    useEffect(() => {
       
    }, []);

    return (
        <>
        
            <Grid container spacing={1}>
                <Grid item xs={12} textAlign="center">
                    <BetStatusTab bet={bet} />
                </Grid>

                <Grid item xs={12}>
                    <Typography align="left" variant="body2" style={{paddingLeft:'10px'}} className={classes.tableSubContent}>
                        {bet.desc}
                    </Typography>
                </Grid>
            </Grid>
               
        </>
    );
};

export default BetInfo;
