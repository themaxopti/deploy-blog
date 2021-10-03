export const required = value => {
    if (value) return undefined;

    return "Field is required";
}

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined


// export const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined

export const minLengthCreator = (minLength) => (value) => {
    if (value < minLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}


export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined