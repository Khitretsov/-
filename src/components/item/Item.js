import React from 'react';
import { connect } from 'react-redux';
import mapDispatchToProps from './action';
import './style.css';
 
class Item extends React.Component {
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
                    <button
                        onClick={ (e) => {
                                this.props.selectItem(this.props.data)
                                // console.dir(e.target)
                                e.target.disabled = true
                            }                         
                        }
                    > Добавить </button>
                </div>
            </section>
        );
    }
};

const mapStateToProps = store => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
