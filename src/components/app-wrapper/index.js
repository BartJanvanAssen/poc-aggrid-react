import React, {Fragment} from 'react'
import { connect } from 'react-redux';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

// Misc
import './app-wrapper.css'

const AppWrapper = (props) => {
    return (
        <Fragment>
            <AppBar 
                title={<span className='app-bar-title'>Menu</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />
            {props.children}
        </Fragment>
    )
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppWrapper)
