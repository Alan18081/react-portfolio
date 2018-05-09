import {
  FETCH_EMAILS,
  FETCH_EMAILS_SUCCESS,
  SEND_EMAIL,
  SEND_EMAIL_START,
  SEND_EMAIL_SUCCESS,
  REMOVE_EMAIL,
  REMOVE_EMAIL_SUCCESS
} from './types';

export const fetchEmails = () => ({
  type: FETCH_EMAILS
});

export const fetchEmailsSuccess = (emails) => ({
  type: FETCH_EMAILS_SUCCESS,
  payload: emails
});

export const sendEmail = (email) => ({
  type: SEND_EMAIL,
  payload: email
});

export const sendEmailStart = () => ({
  type: SEND_EMAIL_START
});

export const sendEmailSuccess = (email) => ({
  type: SEND_EMAIL_SUCCESS,
  payload: email
});

export const removeEmail = (id) => ({
  type: REMOVE_EMAIL,
  payload: id
});

export const removeEmailSuccess = (id) => ({
  type: REMOVE_EMAIL_SUCCESS,
  payload: id
});
