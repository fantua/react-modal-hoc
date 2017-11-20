import React from 'react';
import PropTypes from 'prop-types';
import getDisplayName from 'react-display-name';
import hoistStatics from 'hoist-non-react-statics';

const wrapModal = WrappedComponent => {
    const Component = ({ isOpen, wrappedRef, ...props }) => {
        if (isOpen) {
            return <WrappedComponent {...props} ref={wrappedRef} />;
        }

        return null;
    };

    Component.displayName = `WrapModal(${getDisplayName(WrappedComponent)})`;
    Component.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        wrappedRef: PropTypes.func,
    };

    return hoistStatics(Component, WrappedComponent);
};

export default wrapModal;
