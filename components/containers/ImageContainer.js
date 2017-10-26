import React from 'react';
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
