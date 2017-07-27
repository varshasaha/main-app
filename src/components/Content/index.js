import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './content.css';
import * as actions from '../../actions';

class Content extends Component {
  constructor () {
    super();
    this.onSneeze = this.onSneeze.bind(this);
    this.onBurp = this.onBurp.bind(this);
  }

  onSneeze () {
    const { dispatch } = this.props;
    dispatch(actions.fetchMedicine('sneeze'));
  }

  onBurp () {
    const { dispatch } = this.props;
    dispatch(actions.fetchMedicine('burp'));
  }

  render () {
    const { medicine } = this.props;
    return (
      <div className="content">
        <button onClick={this.onSneeze}> Click to Sneeze </button>
        <button onClick={this.onLoosies}> Click to Burp </button>
        {medicine
          ? <div>
              Father needs to take {medicine}
          </div>
          : null}
      </div>
    );
  }
}

Content.propTypes = {
  dispatch: PropTypes.func.isRequired,
  medicine: PropTypes.string.isRequired,
};

function mapStateToProps (state) {
  return {
    medicine: state.medicineStore.medicine,
  };
}

export default connect(mapStateToProps)(Content);
