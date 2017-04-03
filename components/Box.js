import React from 'react';
import { connect } from 'react-redux';

import { List } from './List';
import { getTodo, addTodo, deleteTodo } from '../actions';

class Box extends React.Component {
    render() {
        const tasks = this.props.tasks;
        console.log(tasks);
        return (
            <div>
                <form className="listAddForm" onSubmit={(e) => {
                    e.preventDefault();
                    this.props.addTodo();
                }}>
                    <input type="text" value={this.props.text} onChange={e => this.props.getTodo(e.target.value)} />
                    <input type="submit" value="実行する" />
                </form>
                <hr/>
                <List
                    tasks={tasks}
                    onClick={id => this.props.deleteTodo(id)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.box;
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: e => dispatch(addTodo(e)),
        getTodo: e =>dispatch(getTodo(e)),
        deleteTodo: e => dispatch(deleteTodo(e)),
    };
};

const ContainerBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Box);

export default ContainerBox;
