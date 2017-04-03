import React from 'react';
import { connect } from 'react-redux';

import { List } from './List';
import { getTodo, addTodo, deleteTodo, favoriteTodo} from '../actions';

class Box extends React.Component {
    render() {
        const { tasks, text, getTodo, addTodo, deleteTodo, favoriteTodo } = this.props;
        console.log(tasks);
        return (
            <div>
                <form className="listAddForm" onSubmit={(e) => {
                    e.preventDefault();
                    addTodo();
                }}>
                    <input type="text" value={text} onChange={e => getTodo(e.target.value)} />
                    <input type="submit" value="実行する" />
                </form>
                <hr/>
                <List
                    tasks={tasks}
                    onClick={id => deleteTodo(id)}
                    favoritesFunction={id => favoriteTodo(id)}
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
        getTodo: e =>　dispatch(getTodo(e)),
        deleteTodo: e => dispatch(deleteTodo(e)),
        favoriteTodo: e => dispatch(favoriteTodo(e)),
    };
};

const ContainerBox = connect(
    mapStateToProps,
    mapDispatchToProps
)(Box);

export default ContainerBox;
