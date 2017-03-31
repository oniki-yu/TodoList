import ReactDom from 'react-dom';
import React from 'react';
import { List } from './List';

class Box extends React.Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            text: ''
        };
    }

    handleChange(e) {
        this.setState({text: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        const text = this.state.text;
        const tasks = this.state.tasks;
        this.setState({
            tasks: tasks.concat([text]),
            text: ''
        });
    }

    render() {
        const tasks = this.state.tasks;
        return (
            <div>
                <form className="listAddForm" onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
                    <input type="submit" value="実行する" />
                </form>
                <hr/>
                <List tasks={tasks} />
            </div>
        );
    }
}

ReactDom.render((
    <Box />
), document.getElementById('root'));