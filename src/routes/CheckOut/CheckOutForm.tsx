import React from "react";
import { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

import { useAppDispatch } from "../../redux/hooks";

import { reset } from "../../redux/slices/currentOrderSlice";
import { reset as tokenReset } from "../../redux/slices/ConfigOrderSlice";

import { Formik } from "formik";
import * as yup from "yup";
import MyField from "../../Components/MyField";

function CheckOutForm() {
  const [couponChecked, setCouponChecked] = useState<boolean>(false);

  const couponHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setCouponChecked(target.checked);
  };

  const dispatch = useAppDispatch();

  // VALIDATION
  const schema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().required("Required").email(),
    comment: yup.string().notRequired().max(256, "Max = 256"),
    coupon: yup.string().max(30, "Max = 30").min(5, "Min = 5"),
  });

  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={schema}
      onSubmit={function () {
        dispatch(reset());
        dispatch(tokenReset());
        alert("Submitted");
      }}
    >
      {(props) => (
        <Form
          onSubmit={props.handleSubmit}
          className={
            "d-flex flex-column gap-4 p-4 rounded m-2 p-3 " +
            (!props.isValid && "border border-danger")
          }
          style={{ marginBottom: "100px" }}
        >
          <MyField name="name" label="Name"></MyField>
          <MyField name="email" label="Email"></MyField>

          <Row>
            <Col md="auto" className="me-4">
              <Form.Label htmlFor="deliveryMethod">
                Choose delivery method
              </Form.Label>
            </Col>
            <Col>
              <Form.Select id="deliveryMethod" name="deliveryMethod">
                <option>Delivery</option>
                <option>Local pickup</option>
              </Form.Select>
            </Col>
          </Row>

          <MyField
            name="comment"
            label="Additional notes"
            as="textarea"
          ></MyField>

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

          {/* COUPON */}
          <MyField name="coupon" label="Coupon" disabled={!couponChecked} />

          {/* RESET, SUBMIT */}
          <FormGroup className="d-flex gap-3 justify-content-end ">
            <Button variant="secondary" onClick={() => props.resetForm()}>
              Reset
            </Button>
            <Button disabled={!props.isValid || !props.dirty} type="submit">
              Submit
            </Button>
          </FormGroup>
        </Form>
      )}
    </Formik>
  );
}

export default CheckOutForm;
