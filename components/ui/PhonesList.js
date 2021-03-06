import DOM       from 'react-dom-factories';
import PropTypes from 'prop-types';
import _         from 'lodash';

const PhonesList = ({ phones }) => (
    DOM.ul(
        null,
        _.map(
            phones,
            (phone, key) => (
                DOM.li({ key }, `${phone.phone} ${phone.name}`)
            )
        )
    )
);

export default PhonesList;
