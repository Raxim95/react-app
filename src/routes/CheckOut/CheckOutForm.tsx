import React from "react";
import { useState } from "react";
import { Button, Form, FormGroup } from "react-bootstrap";
import { useAppDispatch } from "../../redux/hooks";
import { reset } from "../../redux/slices/currentOrderSlice";

function CheckOutForm() {
  const [couponChecked, setCouponChecked] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const couponHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCouponChecked(target.checked);
  };

  const submitHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(reset());
    alert("Submitted");
  };

  return (
    <Form
      className="d-flex flex-column gap-4"
      style={{ marginBottom: "100px" }}
      onSubmit={submitHandler}
    >
      <FormGroup className="d-flex gap-5">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text"></Form.Control>
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"></Form.Control>
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label className="w-50">Choose delivery method</Form.Label>
        <Form.Select>
          <option>Delivery</option>
          <option>Local pickup</option>
        </Form.Select>
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label>Additional notes</Form.Label>
        <Form.Control as="textarea" cols={3}></Form.Control>
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label>Are you regular client?</Form.Label>
        <div className="d-flex">
          <Form.Check name="regularClient" id="yesRegular" type="radio" />
          <Form.Label htmlFor="yesRegular">
            <span className="ms-2 me-3">Yes</span>
          </Form.Label>
          <Form.Check name="regularClient" id="noRegular" type="radio" />
          <Form.Label className="ms-2" htmlFor="noRegular">
            No
          </Form.Label>
        </div>
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label>Do yuo have a cupon code?</Form.Label>
        <Form.Check onChange={couponHandler} />
      </FormGroup>
      <FormGroup className="d-flex gap-5">
        <Form.Label>Coupon</Form.Label>
        <Form.Control
          disabled={!couponChecked}
          placeholder="Coupon"
        ></Form.Control>
      </FormGroup>
      <FormGroup className="d-flex gap-3 justify-content-end ">
        <Button variant="secondary" type="reset">
          Reset
        </Button>
        <Button type="submit">Submit</Button>
      </FormGroup>
    </Form>
  );
}

export default CheckOutForm;
