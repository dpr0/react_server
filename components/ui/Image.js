import DOM from 'react-dom-factories';

const Image = ( props ) => (
    DOM.img(
        {
            src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
            height: '230',
            width:  '150',
            alt:    'qwerty'
        },
        props.children
    )
);

export default Image;
