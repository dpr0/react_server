import DOM       from 'react-dom-factories';
import PropTypes from 'prop-types';
import _         from 'lodash';

const Image = ( props ) => (
    DOM.img(
        {
            src:    'http://fishki.net/picsw/092011/20/bonus/foto/049.jpg',
            height: '700',
            width:  '465',
            alt:    'qwerty'
        },
        props.children
    )
);

export default Image;
