import React, {Component} from "react";
import {ListStore} from '../stores/ListStore';
import {ButtonActions} from '../actions/ButtonActions';
import {MyButton} from './MyButton';

export default class MyButtonController extends Component {
    constructor (props) {
        super(props);
        this.items = ListStore.getAll();
        this.createNewItem = this.createNewItem.bind(this);
        this.state = {
            items: []
        };
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount () {
        ListStore.addChangeListener(this._onChange);
    }

    componentWillUnMount () {
        ListStore.removeChangeListener(this._onChange);
    }

    _onChange () {
        this.setState({
            items: ListStore.getAll()
        });
    }

    createNewItem (event) {
        ButtonActions.addNewItem("new item");
    }

    render () {
        return <MyButton
            items={this.state.items}
            onClick={this.createNewItem}
        />;
    }
}