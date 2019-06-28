import React from 'react';
import './style.scss';
import { forOwn, isEmpty } from 'lodash-es';

import LogoSpinner from '../../LogoSpinner';

const Form = ({
    children,
    onSuccess = () => {},
    onError = () => {},
    fields,
    msgDuration = 3000,
    loading = false,
    success = false,
    successTitle = '',
    successMessage = '',
    error = false,
    errorTitle = '',
    errorMessage = ''
}) => {
    function handleSubmit(e) {
        e.preventDefault();

        let errors = {};
        let formData = {};

        forOwn(fields, (field, name) => {
            const errorMsg = field.validate(field.value);

            if (errorMsg) {
                field.setError(errorMsg);
                errors[name] = errorMsg;
            } else {
                field.setError(null);
                formData[name] = field.value;
            }
        });

        if (!isEmpty(errors)) {
            onError(errors);
        } else {
            onSuccess(formData);
        }
    }

    let className = 'Form';

    if (loading) className += ' Form-loading';
    if (error) className += ' Form-error';
    if (success) className += ' Form-success';

    return (
        <form className={className} onSubmit={handleSubmit}>
            <div className="Form--loading-overlay">
                <LogoSpinner />
            </div>
            <div className="Form--success">
                <span className="Form--success__title">{successTitle}</span>
                <span className="Form--success__message">{successMessage}</span>
            </div>
            <div className="Form--Inner">{children}</div>
            <div className="Form--error-banner">
                <span className="Form--error-banner__title">{errorTitle}</span>
                <span className="Form--error-banner__message">{errorMessage}</span>
            </div>
        </form>
    );
};

export default Form;
