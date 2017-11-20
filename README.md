# react-modal-hoc
React [higher-order component (HOC)](https://reactjs.org/docs/higher-order-components.html) that allows to wrap your component with modal `isOpen` API. Also can be used as a [decorator](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841).  
Inspired by [react-modal](https://github.com/reactjs/react-modal). 

[![npm version](https://img.shields.io/npm/v/react-modal-hoc.svg?style=flat-square)](https://www.npmjs.com/package/react-modal-hoc)

## Installation

```sh
yarn add react-modal-hoc
```

## Api

### Properties

```js
Component.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    wrappedRef: PropTypes.func,
};
```

## Example

```js
// components/modal.js:
import React from 'react';
import withModal from 'react-modal-hoc';

const Modal = () => <div className="modal">{/* Some modal body here */}</div>;

export default withModal(Modal);

// components/index.js:
import React, { Component } from 'react';
import Modal from './modal';

export default class App extends Component {
    
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpenModal: false,
        };
    }
    
    componentDidMount() {
        window.setInterval(this.toggle, 2000);
    }
    
    toggle(e) {
        this.setState(({ isOpenModal }) => ({ isOpenModal: !isOpenModal }));
    }
    
    render() {
        return (
            <div className="app">
                <Modal isOpen={this.state.isOpenModal} />
            </div>
        );
    }
}
``` 

## License

MIT

