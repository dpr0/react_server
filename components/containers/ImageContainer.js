import React from 'react';
// import DOM from 'react-dom-factories';
// import PropTypes from 'prop-types';

import Image from '../ui/Image';

class ImageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(Image, {})
    }
}

export default ImageContainer;
