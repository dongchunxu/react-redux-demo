import React, { Component } from 'react';
import store from './store/index';
import {connect} from 'react-redux';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.props.inputVal} onChange={this.props.changeInputValue}/>
                    <button onClick={this.props.handleClick}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            console.info(e.target.value);
            const action = {
                type: 'change_input_value',
                value: e.target.value
            };
            dispatch(action);
        },
        handleClick() {
            const action = {
                type: 'add_item',
            };
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);