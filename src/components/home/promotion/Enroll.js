import React, { Component } from "react";
import Fade from "react-reveal/Reveal";
import FormField from "../../ui/FormFields";
import {validate} from '../../ui/misc';

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

  updateForm(element) {
    const newFormData = {...this.state.formData};
    const newElement = {...newFormData[element.id]};
    newElement.value = element.event.target.value;


    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;
    this.setState({
      formData: newFormData
    });
  }

  submitForm() {}

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={e => this.submitForm(e)}>
            <div className="enroll_title">Enter Your Email</div>
            <div className="enroll_input">
              <FormField id="email" change={element => this.updateForm(element)} formdata={this.state.formData.email} />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
