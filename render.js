import React           from 'react';
import ReactDOMServer  from 'react-dom/server';
import PhonesContainer from './components/containers/PhonesContainer';
import ImageContainer  from './components/containers/ImageContainer';
import DOM             from 'react-dom-factories';

// const result = ReactDOMServer.renderToString(
const result = ReactDOMServer.renderToStaticMarkup(
    React.createElement(PhonesContainer)
);

const result2 = ReactDOMServer.renderToStaticMarkup(
    React.createElement(ImageContainer)
);

const Segment = (props) => (
    DOM.div(
        {
            style: {border: '1px solid red'}
        },
        props.children
    )
);

const Hello = ({ name }) => (
    React.createElement(
        Segment,
        {},
        DOM.div(null, `Hello, ${name}!`)
    )
);

const result3 = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Hello, { name: 'Thinknetica' })
);


export default result2;