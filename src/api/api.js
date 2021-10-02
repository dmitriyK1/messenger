import { contactsMock } from '../mocks/contactsMock';
import { messagesMock } from '../mocks/messagesMock';

export const getContacts = async () => {
  let data;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    data = await response.json();
  } catch (error) {
    console.error('Error fetching contacts');

    return contactsMock;
  }

  return data;
};

export const getMessages = async () => {
  let data;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
  } catch (error) {
    console.error('Error fetching messages');

    return messagesMock;
  }

  return data;
};
