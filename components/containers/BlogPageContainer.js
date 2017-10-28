import React    from 'react';
import BlogList from '../ui/BlogList';
import BlogItem from '../ui/BlogItem';

class BlogPageContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(BlogList, {
            array: [React.createElement(BlogItem), React.createElement(BlogItem), React.createElement(BlogItem)]
        })
    }
}

export default BlogPageContainer;
