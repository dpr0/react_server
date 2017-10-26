import React   from 'react';
import TextBox from '../ui/TextBox';

const text = [{ body: '1234564 563543'}];

class TextBoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text };
    }
    render() {
        const { text } = this.state;
        return React.createElement(TextBox, { text })
    }
}

export default TextBoxContainer;
