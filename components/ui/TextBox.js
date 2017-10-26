import DOM from 'react-dom-factories';
import _   from 'lodash';

const TextBox = ({ text }) => (
    DOM.span(
        {},
        _.map(
            text,
            (key, value) => (
                DOM.h3({ key }, `${key.body}`)
            )
        )
    )
);

export default TextBox;
