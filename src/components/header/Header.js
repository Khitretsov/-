import React from 'react';
import { connect } from 'react-redux';
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
                {/* {
                    this.props.children
                } */}
                Отобранные вакансии: { this.props.count.length } 

                <button disabled={this.props.count.length  == 0}
                    onClick={ () => {
                        this.setState({modalIsShow: !this.state.modalIsShow})
                    }}
                >Просмотр</button>
                
                {
                    this.state.modalIsShow ? <ModalWindow/> : null
                }
                
            {/* <List doQuery={false}/> */}

            </header>
        )
    }
}

const mapStateToProps = state => {
    return ({
        count: state.header.selectedData
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);