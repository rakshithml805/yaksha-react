
import * as Yup from 'yup';

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const regExp = /\b\d{6}\b/;
const shortCodeRegex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{6,}$/g;
export const pinYup = Yup.string().matches(regExp, { message: 'Must be 6 digit pin number', excludeEmptyString: true }).required('Pincode is required')
export const emailR = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const nameR = /^[A-Za-z]+$/;
export const shortCode = Yup.string().matches(shortCodeRegex, { message: 'Short code should not contain any special characters or space.', excludeEmptyString: true }).required('Asset Short Code is required');