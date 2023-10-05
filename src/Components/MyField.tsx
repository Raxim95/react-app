import { ErrorMessage, Field } from "formik";
import { Col, Form, Row } from "react-bootstrap";

type MyFieldProps = {
  name: string;
  label: string;
  as?: string;
  disabled?: boolean;
};

function MyField({ name, label, as = "", disabled = false }: MyFieldProps) {
  return (
    <Row>
      <Col md="auto" className="me-5">
        <Form.Label htmlFor={name}>{label}</Form.Label>
      </Col>
      <Col>
        <Field
          type="text"
          id={name}
          name={name}
          disabled={disabled}
          className="form-control "
          as={as}
        ></Field>
        <Form.Text className="text-danger" style={{ height: "20px" }}>
          <ErrorMessage name={name} component="div"></ErrorMessage>
        </Form.Text>
      </Col>
    </Row>
  );
}

export default MyField;
