import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table'
import { Container, Button } from 'reactstrap';
import { Provider, connect } from 'react-redux';
import store from '../../storesConfig';
import { addToCart, fetchTeas, changeFilter } from "../../actions/tea";
import FilterBar from '../../components/filter-bar/FilterBar';
import NumberField from '../../components/NumberField';
import { Link } from 'react-router-dom';
import Currency from 'react-currency-formatter';

class PreCashier extends React.Component {
  constructor(props) {
    super(props);
    this.changeTeaCart = this.changeTeaCart.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchTeas();
  }

  handleFilterChange(filter, value) {
    this.props.changeFilter(filter, value);
  }

  changeTeaCart(id, quantity) {
    this.props.addToCart(id, quantity);
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name'
      }, {
        Header: 'Type',
        accessor: 'type',
        Cell: props => <span className='number'>{props.value}</span>
      }, {
        Header: 'Made In',
        accessor: 'made_in'
      },{
        Header: 'Steeping Time',
        accessor: 'steeping_time'
      },{
        id: 'milk',
        Header: 'With Milk?',
        accessor: 'drink_with_milk',
        Cell: props => props.value === 'true' ? 'Yes' : 'No'
      },{
        id: 'stock',
        Header: 'Stock Qtt.',
        accessor: 'stock_quantity'
      },{
        Header: 'Price',
        accessor: 'price',
        Cell: props => <Currency quantity={props.value} />
      },{
        Header: 'Cart',
        Cell: (props) => <NumberField
          quantity={
            this.props.selectedTeas[props.original.id] ? this.props.selectedTeas[props.original.id].quantity : 0
          }
          callback={this.changeTeaCart}
          name={props.original.name}
          price={props.original.price}
          id={props.original.id}
          max={props.original.stock_quantity}
        />
      }
    ];

    const filterTeas = (teas ,filters) => {
      const { night, medicinal, meal, digestion } = filters;
      let nightTeas = [] ;
      let medicinalTeas = [] ;
      let mealTeas = [];
      let digestionTeas = [];
      const filteredTeas = [];

      if (!night && !medicinal && !meal && !digestion) {
        return teas;
      }

      if (night) {
        nightTeas = teas.filter((tea) => tea.type === 'black tea');
      }

      if (medicinal) {
        const whiteTeas = teas.filter((tea) => tea.type === 'white tea');
        const oolongTeas = teas.filter((tea) => tea.type === 'oolong tea');
        medicinalTeas = whiteTeas.concat(oolongTeas);
      }

      if (meal) {
        mealTeas = teas.filter((tea) => tea.type === 'chai');
      }

      if (digestion) {
        digestionTeas = teas.filter((tea) => tea.type === 'green tea');
      }

      return filteredTeas.concat(nightTeas, medicinalTeas, digestionTeas, mealTeas);
    };

    const filteredTeas = filterTeas(this.props.teas, this.props.filters);

    return (
      <Container>
        <FilterBar filterCallBack={this.handleFilterChange}/>
        <ReactTable
          data={filteredTeas}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <Link to='/shop'><Button color="success" className='float-right'>Complete the Purchase</Button></Link>
      </Container>
    );
  }
}

PreCashier.propTypes = {
  addToCart: PropTypes.func,
  fetchTeas: PropTypes.func,
  changeFilter: PropTypes.func,
  teas: PropTypes.array,
  filters: PropTypes.object
};

const mapStateToProps = ({ tea }) => ({
  ...tea.toJS(),
});

const mapDispatchToProps = { addToCart, fetchTeas, changeFilter };

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(PreCashier);

export default props => <Provider store={store}><ConnectedComponent {...props} /></Provider>

