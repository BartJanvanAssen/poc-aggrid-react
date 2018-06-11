import React, {Fragment} from 'react'
import { connect } from 'react-redux';

// Components
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

// Misc
import './style.css'

const DesktopSideScreen = (props) => {
    return (
        <div className='desktop-side-screen'>
            <AppBar 
                title={<span className='app-bar-title'>Edit123</span>}
                iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            />
            {props.children}
        </div>
    )
};

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(DesktopSideScreen)
