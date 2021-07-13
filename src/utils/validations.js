import * as Yup from "yup";

const Validations = {
  email: Yup.string().email("Invalid email").required("You miss email"),
};

export default Validations;
