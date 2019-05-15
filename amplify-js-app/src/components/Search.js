import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import TequilioActions from '../actions/TequilioActions';

import Botella from './Botella';

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

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sku: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        var newState = { ...this.state };
        switch (event.target.name) {
            case 'sku':
                newState.sku = event.target.value;
                break;
            default:
                alert('Stop this');
        }
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        TequilioActions.getSkuBotella(this.state.sku);
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.content}>
                <div className={classes.toolbar}>
                    <Typography variant="h5" color="inherit" className={classes.title}>
                        Buscar botella por SKU
                    </Typography>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                        <TextField
                            id="search"
                            label="Search field"
                            type="search"
                            value={this.state.sku}
                            onChange={this.handleChange}
                            className={classes.textField}
                            name="sku"
                            inputProps={{ maxLength: 10 }}
                        />
                        <Button type="submit" variant="contained" color="secondary" className={classes.submit}>
                            Search
                        </Button>
                    </form>
                    <Botella />
                </div>
            </main>
        );
    }
}

Search.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Search));