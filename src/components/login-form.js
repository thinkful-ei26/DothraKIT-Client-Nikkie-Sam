import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import Form from './styled-components/Form';
import Button from './styled-components/Button';
import Wrapper from './styled-components/Wrapper';
import Label from './styled-components/Label';

export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <Wrapper
                  className="form-error" aria-live="polite">
                    {this.props.error}
                </Wrapper>
            );
        }
        return (
            <Form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <Label htmlFor="username">Username</Label>
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty]}
                />
                <Label htmlFor="password">Password</Label>
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, nonEmpty]}
                />
                <Button signIn logIn disabled={this.props.pristine || this.props.submitting}>
                    Log in
                </Button>
            </Form>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(LoginForm);
