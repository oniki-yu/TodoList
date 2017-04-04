import React , { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import { deleteTodo } from '../actions';

export const ListItems = (props) => {
    return (
        <li id={props.id}>
            {(props.favorite) ? <span style={{color: '#ff0000'}}>{props.value}</span> : <span>{props.value}</span>}
            <button className="square" onClick={() => props.deleteTodo(props.id)}>
                削除
            </button>
            <button className="square" onClick={() => props.favoritesFunction(props.id)}>
                {(props.favorite) ? "お気に入り解除" : "お気に入り"}

            </button>
        </li>
    )
};

ListItems.defaultProps = { value: null, key: null };

const mapStateToProps = (state) => {
    return state.box
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: e => dispatch(deleteTodo(e)),
    };
};
const ContainerListItems = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListItems);
//Reduxと繋ぐことにより、classが変わる（だからList.jsではimportするclassを変える必要がある）
export default ContainerListItems;