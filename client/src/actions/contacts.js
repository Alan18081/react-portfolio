import {
  FETCH_CONTACTS,
  FETCH_CONTACTS_SUCCESS,
  EDIT_CONTACTS,
  EDIT_CONTACTS_START
} from './types';

export const fetchContacts = () => ({
  type: FETCH_CONTACTS
});

export const fetchContactsSuccess = (contacts) => ({
  type: FETCH_CONTACTS_SUCCESS,
  payload: contacts
});

export const editContacts = (contacts) => ({
  type: EDIT_CONTACTS,
  payload: contacts
});

export const editContactsStart = () => ({
  type: EDIT_CONTACTS_START
});