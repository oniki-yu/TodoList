import React from 'react';
import { connect } from 'react-redux'
import { deleteTodo } from '../actions';

export const ListItems = (props) => {
    console.log(props.favorite);

    return (
        <li id={props.id}>
            {(props.favorite) ? <span style={{color: '#ff0000'}}>{props.value}</span> : <span>{props.value}</span>}
            <button className="square" onClick={() => props.onClick(props.id)}>
                削除
            </button>
            <button className="square" onClick={() => props.favoritesFunction(props.id)}>
                {(props.favorite) ? "お気に入り解除" : "お気に入り"}

            </button>
        </li>
    )
};

ListItems.defaultProps = { value: null, key: null };

// const mapStateToProps = (state) => {
//     return state.box
// };
//
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteTodo: e => dispatch(deleteTodo(e)),
//     };
// };
//
// const ContainerListItems = connect(
//     mapStateToProps,
//     mapDispatchToProps,
// )(ListItems);
//
// export default ContainerListItems;