import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import TequilioActions from '../actions/TequilioActions';

import HistorialDisplay from './HistorialDisplay';

import { Auth } from 'aws-amplify';

const drawerWidth = 240;

const styles = theme => ({
    title: {
        textAlign: 'center',
        padding: theme.spacing.unit * 2,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        marginTop: theme.spacing.unit * 8,
        alignItems: 'center',
        alignText: 'center',
        marginLeft: `${drawerWidth}px`,
    },
    textField: {
        display: 'flex',
        width: '50%',
        margin: 'auto',
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
        alignItems: 'center',
    },
    submit: {
        marginTop: 20,
        padding: theme.spacing.unit * 1.5,
        maxWidth: 200,
        display: 'flex',
        margin: 'auto',
    },
});

class MiHistorial extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        };
    }

    componentDidMount = async () => {
        this.setState({ user: await Auth.currentAuthenticatedUser() })
        TequilioActions.getHistorial(this.state.user.attributes.email);
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.content}>
                <div id="prueba" className={classes.toolbar}>
                    <Typography variant="h5" color="inherit" className={classes.title}>
                        Ver tu historial de botellas
                    </Typography>
                    <HistorialDisplay />
                </div>
            </main>
        );
    }
}

MiHistorial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(MiHistorial));