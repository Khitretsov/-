import React from 'react';
import { connect } from 'react-redux';
// import mapDispatchToProps from './action';
import './style.css';

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
                <div className='modal-window'>
                    <div className='modal-field-name'>{this.props.data.name}</div>
                    <div className='modal-field-note'>{this.props.data.employer.name}</div>
                    <div className='modal-field-note'>{this.props.data.address ? this.props.data.address.city : 'город не указан'}</div>
                    <div className='modal-field-content'>{this.props.data.snippet.requirement}</div>
                    <div className='modal-field-content'>{this.props.data.snippet.responsibility}</div>
                </div>
            </div>
        )
    }
};

export default connect()(ModalWindow);