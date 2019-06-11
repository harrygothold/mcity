import React, { Component } from "react";
import Fade from "react-reveal/Reveal";
import FormField from "../../ui/FormFields";

class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formData: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter your email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,
        validationMessage: ""
      }
    }
  };

  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter Your Email</div>
            <div className="enroll_input">
              <FormField id="email" formdata={this.state.formData.email} />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
