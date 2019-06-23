import React, { Component } from "react";
import AdminLayout from "../../../Hoc/AdminLayout";
import FormField from "../../ui/FormFields";
import { validate } from "../../ui/misc";

import { firebase, firebasePlayers, firebaseDb } from "../../../firebase";
import FileUploader from "../../ui/FileUploader";

class PlayerForm extends Component {
  state = {
    playerId: "",
    formType: "",
    formError: false,
    formSuccess: "",
    defaultImg: "",
    formdata: {
      name: {
        element: "input",
        value: "",
        config: {
          label: "Player Name",
          name: "name_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      lastname: {
        element: "input",
        value: "",
        config: {
          label: "Player Last Name",
          name: "lastname_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      number: {
        element: "input",
        value: "",
        config: {
          label: "Player Number",
          name: "number_input",
          type: "text"
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      position: {
        element: "select",
        value: "",
        config: {
          label: "Select a Position",
          name: "select_position",
          type: "select",
          options: [
            { key: "Keeper", value: "Keeper" },
            { key: "Defence", value: "Defence" },
            { key: "Midfield", value: "Midfield" },
            { key: "Striker", value: "Striker" }
          ]
        },
        validation: {
          required: true
        },
        valid: false,
        validationMessage: "",
        showLabel: true
      },
      image: {
        element: "image",
        value: "",
        validation: {
          required: true
        },
        valid: true
      }
    }
  };

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (playerId) {
      this.setState({
        formType: "Add Player"
      });
    } else {
      // Edit player
    }
  }

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormdata[element.id] = newElement;

    this.setState({
      formError: false,
      formdata: newFormdata
    });
  }

  submitForm(event) {
    event.preventDefault();

    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formdata) {
      dataToSubmit[key] = this.state.formdata[key].value;
      formIsValid = this.state.formdata[key].valid && formIsValid;
    }

    if (formIsValid) {
      // Submit form
    } else {
      this.setState({
        formError: true
      });
    }
  }

  resetImage = () => {};

  storeFilename = () => {};

  render() {
    const {
      formType,
      formdata,
      formError,
      formSuccess,
      defaultImg
    } = this.state;

    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>{formType}</h2>
          <div className="">
            <form onSubmit={e => this.submitForm(e)}>
              <FileUploader
                dir="players"
                tag={"Player Image"}
                defaultImg={defaultImg}
                defaultImgName={formdata.image.value}
                resetImage={() => this.resetImage()}
                filename={filename => this.storeFilename(filename)}
              />
              <FormField
                id={"name"}
                formdata={formdata.name}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={"lastname"}
                formdata={formdata.lastname}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={"number"}
                formdata={formdata.number}
                change={element => this.updateForm(element)}
              />
              <FormField
                id={"position"}
                formdata={formdata.position}
                change={element => this.updateForm(element)}
              />
              <div className="success_label">{formSuccess}</div>
              {formError ? (
                <div className="error_label">Something went wrong!</div>
              ) : null}
              <div className="admin_submit">
                <button onClick={e => this.submitForm(e)}>{formType}</button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default PlayerForm;
