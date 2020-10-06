import React from "react";
import { Select, InputNumber } from "antd";
import { Breadcrumb, BreadcrumbItem,
   Form, FormGroup, Button, Input, Col } from 'reactstrap';

const toInputUppercase = (e) => {
  e.target.value = ("" + e.target.value).toUpperCase();
};



class AddNewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posType: '',
      symbolInput: '',
      numShares: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSumbit = this.handleSumbit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  handleSumbit(event) {
    event.preventDefault();
    console.log(`Position Type: ${this.posType.value} Symbol: ${this.symbolInput.value} Number of Shares: ${this.numShares.value}`);
    alert(`Position Type: ${this.posType.value} Symbol: ${this.symbolInput.value} Number of Shares: ${this.numShares.value}`);
    
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.handleSumbit}>
          <h5 htmlFor="posType">Position Type</h5>
          <Input
          type="select"
          name="posType"
          value={this.state.posType}
          onChange={this.handleInputChange}
            defaultValue="Select One"
            className="form-field-dropdown"
          >
            <option>Stock</option>
            <option>ETF</option>
            <option>Mutual Fund</option>
            <option>Other Asset</option>
          </Input>

          <h5 htmlFor="symbolInput">Ticker/Symbol</h5>
          <Input
            type="text"
            id="symbolInput"
            name="symbolInput"
            value={this.state.symbolInput}
            onChange={this.handleInputChange}
            onInput={toInputUppercase}
            className="form-field"
            maxLength={5}
            spellCheck="false"
            placeholder="AAPL"
          />

          <h5 htmlFor="numShares">Number of Shares</h5>
          <Input
          type="text"
          id="numShares"
          name="numShares"
          value={this.state.numShares}
          onChange={this.handleInputChange}
          className="form-field"
          placeholder="5"
          min={1}
          max={1000}
          />
          <h3>Estimated Value</h3>
          <h2>$0.00</h2>

          <Button className="form-button" type="submit" onSubmit={this.handleSumbit}>
            Add
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default AddNewForm;
