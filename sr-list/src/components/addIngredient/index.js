import React from 'react';
import DocFrag from '../hoc/docFrag';
import Button from '../UI/button';
import Select from "../UI/form/select";
import Input from "../UI/form/input";


import styles from "./index.module.css";


const AddIngredient = () => {
    return (
      <tr>
        <td className="col-12 col-lg-8">
          <Select name="name" placeholder="Select a product" />
        </td>
        <td className="col-12 col-lg-2">
          <Input type="text" name="quantity" placeholder="Quantity..." />
        </td>
        <td className="col-12 col-lg-2">
          <Select name="unit" placeholder="unit" />
        </td>        
      </tr>
    );
};

export default AddIngredient;