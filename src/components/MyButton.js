import React, {Component} from 'react';

export class MyButton extends Component {
    constructor (props) {
        super();
        this.props = props;
    }

    render () {
        var itemHtml = this.props.items.map((listItem, i) => {
            return <li key={i}>{listItem}</li>
        });
        return <div>
            <button onClick={this.props.onClick}>Add New Item</button>
            <ul>{itemHtml}</ul>
        </div>;
    }
}
