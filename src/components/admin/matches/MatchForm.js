import React, { Component } from 'react';
import AdminLayout from '../../../Hoc/AdminLayout';
import FormField from '../../ui/FormFields';
import { validate } from '../../ui/misc';

class MatchForm extends Component {

    state = {
        matchId: '',
        formType: '',
        formError: false,
        formSuccess: '',
        teams: [],
        formdata: {
            date: {
                element: "input",
                value: "",
                config: {
                    label: 'Event date',
                    name: "date_input",
                    type: "date",
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: true
            },
            local: {
                element: "select",
                value: "",
                config: {
                    label: 'Select a local team',
                    name: "select_local",
                    type: "select",
                    options: []
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: false
            },
            resultLocal: {
                element: "input",
                value: "",
                config: {
                    label: 'Result Local',
                    name: "result_local",
                    type: "text",
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: false
            },
            away: {
                element: "select",
                value: "",
                config: {
                    label: 'Select the away team',
                    name: "select_away",
                    type: "select",
                    options: []
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: false
            },
            resultAway: {
                element: "input",
                value: "",
                config: {
                    label: 'Result Away',
                    name: "result_away",
                    type: "text",
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: false
            },
            referee: {
                element: "input",
                value: "",
                config: {
                    label: 'Referee',
                    name: "referee_input",
                    type: "text",
                    placeholder: 'Referee'
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: true
            },
            stadium: {
                element: "input",
                value: "",
                config: {
                    label: 'Stadium',
                    name: "stadium_input",
                    type: "text",
                    placeholder: 'Stadium'

                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: true
            },
            result: {
                element: "select",
                value: "",
                config: {
                    label: 'Team Result',
                    name: "select_result",
                    type: "select",
                    options: [{key: 'W', value: 'W'},{key: 'L', value: 'L'},{key: 'D', value: 'D'},{key: 'n/a', value: 'n/a'},]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: true
            },
            final: {
                element: "select",
                value: "",
                config: {
                    label: 'Game Played?',
                    name: "select_played",
                    type: "select",
                    options: [{key: 'Yes', value: 'Yes'},{key: 'No', value: 'No'}]
                },
                validation: {
                    required: true,
                },
                valid: false,
                validationMessage: "",
                showLabel: true
            },
        }
    }




    render() {
        const { formdata, formType, formSuccess, formError } = this.state;
        return (
            <AdminLayout>
                <div className="editmatch_dialog_wrapper">
                    <h2>{formType}</h2>
                    <div className="">
                        <form onSubmit={(e) => this.submitForm(e)}>
                            <FormField
                                id={"date"}
                                formdata={formdata.date}
                                change={element => this.updateForm(element)}
                            />

                            <div className="select_team_layout">
                                <div className="label_inputs">Local</div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={"local"}
                                            formdata={formdata.local}
                                            change={element => this.updateForm(element)}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            id={"resultLocal"}
                                            formdata={formdata.resultLocal}
                                            change={element => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="select_team_layout">
                                <div className="label_inputs">Away</div>
                                <div className="wrapper">
                                    <div className="left">
                                        <FormField
                                            id={"away"}
                                            formdata={formdata.away}
                                            change={element => this.updateForm(element)}
                                        />
                                    </div>
                                    <div>
                                        <FormField
                                            id={"resultAway"}
                                            formdata={formdata.resultAway}
                                            change={element => this.updateForm(element)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="split_fields">
                                <FormField
                                    id={"referee"}
                                    formdata={formdata.referee}
                                    change={element => this.updateForm(element)}
                                />
                                <FormField
                                    id={"stadium"}
                                    formdata={formdata.stadium}
                                    change={element => this.updateForm(element)}
                                />
                            </div>
                            <div className="split_fields last">
                                <FormField
                                    id={"result"}
                                    formdata={formdata.result}
                                    change={element => this.updateForm(element)}
                                />
                                <FormField
                                    id={"final"}
                                    formdata={formdata.final}
                                    change={element => this.updateForm(element)}
                                />
                            </div>
                            <div className="success_label">{formSuccess}</div>
                            {formError ? 
                                <div className="error_label">Something went wrong!</div>
                                : null
                            }
                            <div className="admin_submit">
                                <button onClick={(e) => this.submitForm(e)}>
                                    {formType}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </AdminLayout>
        );
    }
}

export default MatchForm;