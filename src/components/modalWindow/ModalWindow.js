import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

// import mapDispatchToProps from './action';
import './style.css';

import List from '../list/List';

class ModalWindow extends React.Component {
    render() {
        return (
            <div className='modal-window-background' onClick={
                (e) => {
                    if (e.target.className == 'modal-window-background') {
                        this.props.appearModal(null);
                    }
                }
            }>
            {
                (this.props.data.hasOwnProperty('items')) ?
                <div className='modal-window'>
                    <button onClick={() => {
                        this.props.appearModal(null)
                    }}>Закрыть</button>
                    <List dataFromParent={this.props.data}/>
                </div>
                :
                <div className='modal-window'>
                    <button onClick={() => {
                        this.props.appearModal(null)
                    }}>Закрыть</button>
                    <div className='modal-field-name'>{this.props.data.name}</div>
                    <div className='modal-field-note'>{this.props.data.employer.name}</div>
                    <div className='modal-field-note'>{this.props.data.address ? this.props.data.address.city : 'город не указан'}</div>
                    <div className='modal-field-content'>{this.props.data.snippet.requirement}</div>
                    <div className='modal-field-content'>{this.props.data.snippet.responsibility}</div>
                </div>
            }
                
            </div>
        )
    }
};

ModalWindow.propTypes = {
    data: PropTypes.object,
    // data: function(props, propName, componentName) {
    //     if(typeof(props[propName]) == 'object' && props[propName].length) {
    //         return null
    //     } else if (typeof(props[propName]) == 'object') {
    //         return null
    //     } else {
    //         return new Error(
    //             `Invalid prop ${propName} supplied to ${componentName}. Validation failed`
    //         )
    //     }
    // },
    appearModal: PropTypes.func
}



export default connect(null, null)(ModalWindow);