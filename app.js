import ReactDom from 'react-dom';
import React from 'react';

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
        const taskList = tasks.map((value, key) => {
            return (
                <li key={key}>
                    {value}
                </li>
            );
        });
        return (
            <div>
                <form className="listAddForm" onSubmit={e => this.handleSubmit(e)}>
                    <input type="text" value={this.state.text} onChange={e => this.handleChange(e)} />
                    <input type="submit" value="実行する" />
                </form>
                <hr/>
                <ul>
                    <li>"test"</li>
                </ul>
                <ul>
                    {taskList}
                </ul>
            </div>
        );
    }
}

ReactDom.render((
    <Box />
), document.getElementById('root'));