import React from 'react';
import PropTypes from 'prop-types';
import { Container, Button, FormGroup, Label, Input, Table } from 'reactstrap';
import { Provider, connect } from 'react-redux';
import store from '../../storesConfig';
import { Link } from 'react-router-dom';
import Currency from 'react-currency-formatter';
import { onClientDataChange, finishShop } from "../../actions/tea";

class Cashier extends React.Component {
  constructor(props) {
    super(props);
    this.renderTd = this.renderTd.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.buy = this.buy.bind(this);
  }

  renderTd() {
    if(Object.keys(this.props.selectedTeas).length > 0) {
      return (Object.values(this.props.selectedTeas).map(tea => (
        <tr key={tea.name}>
          <td>{tea.name}</td>
          <td>{tea.quantity}</td>
          <td><Currency quantity={tea.price} /></td>
          <td><Currency quantity={tea.price * tea.quantity} /></td>
        </tr>
      )));
    } else {
      return (
        <tr>
          <td colSpan={4}>Nothing was selected</td>
        </tr>
      );
    }
  }

  getTotal() {
    if(Object.keys(this.props.selectedTeas).length > 0) {
      return (Object.values(this.props.selectedTeas).map(tea => (tea.price * tea.quantity)).reduce((acc, val) => (acc + val) ));
    } else {
      return 0
    }
  }

  onChangeData(e) {
    this.props.onClientDataChange(e.target.name, e.target.value);
  }

  buy() {
    this.props.finishShop(this.props.selectedTeas, this.props.client);
  }

  render() {
    return (
      <Container>
        <FormGroup style={{marginTop: 10}}>
          <Label>Name</Label>
          <Input onChange={this.onChangeData} type="text" name="name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input onChange={this.onChangeData} type="email" name="email"  placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Label>Country</Label>
          <Input onChange={this.onChangeData} type="select" name="country">
            <option>Brazil</option>
            <option>Germany</option>
            <option>Uruguay</option>
            <option>Portugal</option>
            <option>Argentina</option>
          </Input>
        </FormGroup>
        <Table striped>
          <thead>
          <tr>
            <th>Tea</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          {this.renderTd()}
          </tbody>
        </Table>
        <h2>Total: <Currency quantity={this.getTotal()} /></h2>
        <Button onClick={this.buy} color="success" className='float-right'>Finish</Button>
        <Link to='/'><Button color="link" className='float-right'>Back</Button></Link>
      </Container>
    );
  }
}

Cashier.propTypes = {
  selectedTeas: PropTypes.object,
  onClientDataChange: PropTypes.func,
  client: PropTypes.object
};

const mapStateToProps = ({ tea }) => ({
  ...tea.toJS(),
});

const mapDispatchToProps = { onClientDataChange, finishShop };

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Cashier);

export default props => <Provider store={store}><ConnectedComponent {...props} /></Provider>
