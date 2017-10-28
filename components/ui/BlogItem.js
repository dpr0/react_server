import React   from 'react';
import Image   from './Image';
import TextBox from './TextBox';
import DOM     from 'react-dom-factories';

const BlogItem = ({img, text}) => (
    DOM.div( {},
        React.createElement(TextBox, { text:   '123123' }),
        React.createElement(Image,
            {
                src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
                height: '230',
                width:  '150',
                alt:    'qwerty'
            }
        )
    )
);

export default BlogItem;
