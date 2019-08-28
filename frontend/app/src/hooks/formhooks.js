import { useState } from 'react';

export const useFormField = (initialValue, validate = () => null, initialError = null) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState(initialError);

    return {
        value,
        onChange: value => {
            setValue(value);
            if (error) {
                const newError = validate(value);

                if (newError) {
                    setError(newError);
                } else {
                    setError(null);
                }
            }
        },
        error,
        setError,
        validate
    };
};
