import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Button from './styled-components/Button';
import Label from './styled-components/Label';
import Form from './styled-components/Form';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <Form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <Label htmlFor="firstName">First name</Label>
                <Field component={Input} type="text" name="firstName" />
                <Label htmlFor="lastName">Last name</Label>
                <Field component={Input} type="text" name="lastName" />
                <Label htmlFor="username">Username</Label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    validate={[required, nonEmpty, isTrimmed]}
                />
                <Label htmlFor="password">Password</Label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    validate={[required, passwordLength, isTrimmed]}
                />
                <Label htmlFor="passwordConfirm">Confirm password</Label>
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                <Button signIn
                    type="submit"
                    disabled={this.props.pristine || this.props.submitting}>
                    Register
                </Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
