import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

import mapDispatchToProps from './action';
import './style.css';
 
class Item extends React.Component {
    constructor() {
        super();
        this.state = {
            isAdded: false
        }
    }

    render() {
        return(
            <section onClick={
                (e) => {
                    if (e.target.nodeName == 'BUTTON') {
                        return
                    }
                    this.props.appearModal(this.props.data)
                }
            }>
                <div>
                    <span>{this.props.data.name}</span>
                    <span className='employer'>{this.props.data.employer.name}</span>
                </div>
                <div className='rightContainer'>
                    <span>{!this.props.data.salary ? 'н/у' : this.props.data.salary == '' ? 'н/у' : this.props.data.salary.from}</span>
                    {
                        console.log('mkmkmkmmkmkmkmkmkmkmk', this.state.isAdded)
                    }
                    <button
                        onClick={ () => {
                                this.setState((state) => {
                                    return {isAdded: !state.isAdded}
                                }, this.props.selectItem(this.props.data, this.state.isAdded))
                            }                         
                        }
                    > {this.state.isAdded ? 'Убрать' : 'Добавить'} </button>
                </div>
            </section>
        );
    }
};

Item.propTypes = {
    appearModal: PropTypes.func,
    data: PropTypes.object,
    selectItem: PropTypes.func
}

const mapStateToProps = store => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
