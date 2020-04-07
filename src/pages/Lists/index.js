import React from 'react';
import { MenuItem, TextField, InputAdornment, Button } from '@material-ui/core';

import Header from '../../components/Header';
import './styles.css';

const units = ['kg', 'L', 'un'];

export default function Lists() {
  return (
    <div>
      <Header />
      <div className="page-container">
        <form className="form-container">
          <div className="form-row">
            <TextField
              label="List"
              name="list"
              className=""
              value=""
              onChange={() => {}}
              required
            />
            <Button variant="outlined" color="secondary">Add</Button>
          </div>

          <div className="form-row">
            <TextField
              label="Product"
              name="product"
              className=""
              value=""
              onChange={() => {}}
              required
            />
            <TextField
              label="Quantity"
              name="quantity"
              className=""
              value=""
              onChange={() => {}}
              required
            />
            <TextField
              select
              label="Unity"
              name="unity"
              className=""
              value=""
              onChange={() => {}}
              required
            >
              {units.map((option) => (
                <MenuItem key={option} value={option}>{option}</MenuItem>
              ))}
            </TextField>
            <TextField
              label="Price"
              name="price"
              className=""
              value=""
              onChange={() => {}}
              InputProps={{
                startAdornment: <InputAdornment position="start">R$</InputAdornment>,
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
