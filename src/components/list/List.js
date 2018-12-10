import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './action';
import Item from '../item/Item';
import './style.css';

import ModalWindow from '../modalWindow/ModalWindow';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            paramOfModal: {
                isModalShow: false,
                dataForModal: null
            }
        };
        this.appearModal = this.appearModal.bind(this);
    }
    static getDerivedStateFromProps(props, state) {
        if (props.doQuery) return state;
        if (props.data == null) {
            props.getData(); 
        }
        return state;
    }

    appearModal(data) {
        this.setState(state => {
            return { paramOfModal: {
                isModalShow: !state.paramOfModal.isModalShow,
                dataForModal: data
            }}
        });
    }

    render() {
        return (
            <article>
                {
                    !this.state.paramOfModal.isModalShow ? null : <ModalWindow data={this.state.paramOfModal.dataForModal} appearModal={this.appearModal}/>
                }
                {
                    !this.props.data ? null : this.props.data.items.map(
                        (item) => {
                            return (
                                <Item data={item} key={Math.random()} appearModal={this.appearModal}/>
                            )
                        }
                    )
                }
                {
                    // console.log('render', this.props.data)
                }
            </article>
        );
    }
}

const mapStateToProps = store => {
    return {
        data: store.list.data
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
