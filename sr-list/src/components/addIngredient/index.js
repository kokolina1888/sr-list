import React, { Component } from "react";
import { connect } from 'react-redux'
import * as actions from '../../store/actions'
import Select from "../UI/form/select";
import Input from "../UI/form/input";
import Spinner from '../UI/spinner'
import { render } from "react-dom";




class AddIngredient extends Component {

 componentDidMount(){   
    this.props.onFetchUnits();
    this.props.onFetchProducts();
  }

  render(){
  let productSelect = <Spinner/>
  if(this.props.products){
       productSelect = (
         <Select
           ops={this.props.products}
           place="add-recipe"
           changed={this.props.productChanged}
           placeholder="Select a product"
         />
       );
     
  }
  let unitSelect = <Spinner/>
  if(this.props.units){
       unitSelect = (
         <Select
           ops={this.props.units}
           place="add-recipe"
           changed={this.props.productUnitChanged}
           placeholder="Select unit"
         />
       );
     
  }
    return (
      <tr>
        <td className="col-12 col-lg-7">{productSelect}</td>
        <td className="col-12 col-lg-2">
          <Input
            type="text"
            placeholder="Quantity..."
            changed={this.props.productQuantChanged}
          />
        </td>
        <td className="col-12 col-lg-3">{unitSelect}</td>
      </tr>
    );
  }
};

const mapsStateToProps = (state) => {
  return {
    units: state.units.units,
    products: state.products.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUnits: () => dispatch(actions.fetchUnits()),
    onFetchProducts: () => dispatch(actions.fetchProducts()),
  };
};
export default connect(mapsStateToProps, mapDispatchToProps)(AddIngredient);