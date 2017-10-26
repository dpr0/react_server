import React   from 'react';
import Image   from '../ui/Image';
import TextBox from '../ui/TextBox';

const text = [
    { body: 'text 1' },
];

class BlogItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text };
    }
    render() {
        const { text } = this.state;
        return [
            React.createElement(TextBox, { text }),
            React.createElement(Image,   {})
        ]
    }
}

export default BlogItemContainer;
