import React             from 'react';
import ReactDOMServer    from 'react-dom/server';
import PhonesContainer   from './components/containers/PhonesContainer';
import ImageContainer    from './components/containers/ImageContainer';
import TextBoxContainer  from './components/containers/TextBoxContainer';
import BlogItemContainer from './components/containers/BlogItemContainer';

// const result = ReactDOMServer.renderToString(
const result1 = ReactDOMServer.renderToStaticMarkup(
    React.createElement(PhonesContainer)
);

const result2 = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ImageContainer)
);

const result3 = ReactDOMServer.renderToStaticMarkup(
    React.createElement(TextBoxContainer)
);

const result4 = ReactDOMServer.renderToStaticMarkup(
    [React.createElement(BlogItemContainer), React.createElement(BlogItemContainer), React.createElement(BlogItemContainer)]
);

export default (result4);