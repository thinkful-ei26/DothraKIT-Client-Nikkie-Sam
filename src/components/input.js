import React from 'react';
import FormWarning from './styled-components/FormWarning';
import FormError from './styled-components/FormError';
import FormInputWrapper from './styled-components/FormInputWrapper';
import Label from './styled-components/Label';
import FormInput from './styled-components/FormInput';

export default class Input extends React.Component {
    componentDidUpdate(prevProps) {
        if (!prevProps.meta.active && this.props.meta.active) {
            this.input.focus();
        }
    }

    render() {
        let error;
        if (this.props.meta.touched && this.props.meta.error) {
            error = <FormError>{this.props.meta.error}</FormError>;
        }

        let warning;
        if (this.props.meta.touched && this.props.meta.warning) {
            warning = <FormWarning>{this.props.meta.warning}</FormWarning>;
        }

        return (
            <FormInputWrapper>
                <Label htmlFor={this.props.input.name}>
                    {this.props.label}
                    {error}
                    {warning}
                </Label>
                
                <FormInput
                    {...this.props.input}
                    id={this.props.input.name}
                    type={this.props.type}
                    ref={input => (this.input = input)}
                />
            </FormInputWrapper>
        );
    }
}
