import React, { useState } from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  // const [selct, setselct] = useState("")
  // const [selcts, setselcts] = useState(true)
  return (
    <Form className="form">
      {/* {JSON.stringify(selct)}
      {JSON.stringify(selcts)} */}
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Pickup piont" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Destination" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Journey date" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input
            className="journey__time"
            type="time"
            placeholder="Journey time"
            required
          />
        </FormGroup>
        <FormGroup className="select__group">
          {/* <input type="checkbox" name="" id="" value={selcts} checked={() => setselcts(!selcts)}/> */}
          {/* <select onChange={(e) => setselct(e.target.value)}> */}
          <select>
            <option value="ac">AC Car</option>
            <option value="non-ac">Non AC Car</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Find Car</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
