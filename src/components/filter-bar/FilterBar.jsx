import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, Row, Col } from 'reactstrap';
import './filter-bar.css'


export default class FilterBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        night: false,
        meal: false,
        medicinal: false,
        digestion: false
      };

      this.onChangeFilter = this.onChangeFilter.bind(this);
  }

  onChangeFilter(filter) {
    this.props.filterCallBack(filter, !this.state[filter]);
    this.setState({[filter]: !this.state[filter]})
  }

  render() {
    return (
      <div className="filter-bar">
        <Row>
          <Col>
            <CustomInput onClick={() => this.onChangeFilter('night')} type="checkbox" id="1" label="Drink at night"/>
          </Col>
          <Col>
            <CustomInput onClick={() => this.onChangeFilter('digestion')} type="checkbox" id="2" label="For Digestion"/>
          </Col>
          <Col>
            <CustomInput onClick={() => this.onChangeFilter('medicinal')} type="checkbox" id="3" label="Medicinal"/>
          </Col>
          <Col>
            <CustomInput onClick={() => this.onChangeFilter('meal')} type="checkbox" id="4" label="Drink with meal"/>
          </Col>
        </Row>
      </div>
    );
  }
}

FilterBar.propTypes = {
  filterCallBack: PropTypes.func,
};

