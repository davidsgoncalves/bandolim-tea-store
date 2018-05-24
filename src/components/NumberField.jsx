import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Input,
  InputGroup,
  InputGroupAddon,

} from 'reactstrap';

export default class NumberField extends React.Component {
  constructor(props) {
    super(props);

    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mountObject = this.mountObject.bind(this);
  }

  add() {
    if (this.props.quantity < this.props.max) {
      this.props.callback(this.props.id, this.mountObject(this.props.quantity + 1));
    }
  }

  sub() {
    if (this.props.quantity > 0) {
      this.props.callback(this.props.id, this.mountObject(this.props.quantity - 1));
    }
  }

  mountObject(quantity) {
    return {
      name: this.props.name,
      quantity: quantity,
      price: this.props.price,
      id: this.props.id
    }
  }

  render() {
    return (
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Button onClick={this.sub} color="danger">-</Button>
        </InputGroupAddon>
        <Input readOnly value={this.props.quantity} type="number"/>
        <InputGroupAddon addonType="append">
          <Button onClick={this.add} color="success">+</Button>
        </InputGroupAddon>
      </InputGroup>
    );
  }
}

NumberField.propTypes = {
  max: PropTypes.string,
  stock_quantity: PropTypes.string,
  callback: PropTypes.func,
};