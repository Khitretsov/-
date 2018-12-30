import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import mapDispatchToProps from './action';
import './style.css';

import ModalWindow from '../modalWindow/ModalWindow';

class Header extends React.Component {
    constructor() {
        super()
        this.state = {
            textFromUser: '',
            modalIsShow: false
        }
        this.appearModal = this.appearModal.bind(this)
    }

    appearModal() {
        this.setState({
            modalIsShow: !this.state.modalIsShow
        })
    }

    render() {
        return (
            <header className='App-header'>
                <input value={this.state.textFromUser} 
                    onChange={
                        (e) => {
                            this.setState(  
                                { textFromUser: e.target.value }
                            )
                        }
                    }
                    onKeyDown={
                        (e) => {
                            if (e.key == 'Enter') {
                                this.props.getData(this.state.textFromUser)
                            }
                        }
                    }
                />

                Отобранные вакансии: { this.props.count.length } 

                <button disabled={this.props.count.length  == 0}
                    onClick={ () => {
                        this.setState({modalIsShow: !this.state.modalIsShow})
                    }}
                >Просмотр</button>
                
                {
                    // this.state.modalIsShow ? <ModalWindow data={this.props.count[0]} appearModal={this.appearModal}/> : null
                    this.state.modalIsShow ? <ModalWindow data={{items: this.props.count}} appearModal={this.appearModal}/> : null
                }
                
            {/* <List doQuery={false}/> */}

            </header>
        )
    }
}

Header.propTypes = {
    count: PropTypes.array,
    getData: PropTypes.func
}

const mapStateToProps = state => {
    return ({
        count: state.header.selectedData
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);