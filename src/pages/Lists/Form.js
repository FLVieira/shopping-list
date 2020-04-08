import React, { useState } from 'react';
import { MenuItem, TextField, InputAdornment, Button } from '@material-ui/core';

const units = ['Kilogram(s)', 'Liter(s)', 'Un(s)'];

export default function Form(props) {
  const [list, setList] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState(false);

  function handleChange(event) {
    switch (event.target.name) {
      case 'list': {
        setList(event.target.value);
        break;
      }
      case 'product': {
        setProduct(event.target.value);
        break;
      }
      case 'quantity': {
        setQuantity(event.target.value);
        break;
      }
      case 'unit': {
        setUnit(event.target.value);
        break;
      }
      case 'price': {
        setPrice(event.target.value);
        break;
      }
      default: {
        break;
      }
    }
  }

  function handleSubmit(event) {
    const productData = { name: product, quantity, unit, price };
    if (!list || !product || !quantity || !unit) {
      setErrors(true);
    } else {
      props.addProduct(productData, list);
      setProduct('');
      setQuantity('');
      setUnit('');
      setPrice('');
    }
  }

  return (
    <form className="form-container">
      <div className="form-row">
        <TextField
          label="List"
          name="list"
          className=""
          value={list}
          onChange={(e) => handleChange(e)}
          required
          error={!list && errors}
        />
        <Button variant="outlined" color="secondary" onClick={handleSubmit}>Add</Button>
      </div>

      <div className="form-row">
        <TextField
          label="Product"
          name="product"
          className=""
          value={product}
          onChange={(e) => handleChange(e)}
          required
          error={!product && errors}
        />
        <TextField
          label="Quantity"
          name="quantity"
          className=""
          value={quantity}
          onChange={(e) => handleChange(e)}
          required
          error={!quantity && errors}
        />
        <TextField
          select
          label="Unit"
          name="unit"
          className=""
          value={unit}
          onChange={(e) => handleChange(e)}
          required
          error={!unit && errors}
        >
          {units.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Price"
          name="price"
          className=""
          value={price}
          onChange={(e) => handleChange(e)}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>,
          }}
        />
      </div>
    </form>
  );
}
