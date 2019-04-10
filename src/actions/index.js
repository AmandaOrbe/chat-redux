// TODO: add and export your own actions

export const FETCH_MESSAGES = 'FETCH_MESSAGES';
export const MESSAGE_POSTED = 'MESSAGE_POSTED';
export const CHANNEL_SELECTED = 'CHANNEL_SELECTED';

export function fetchMessages(channel) {
  // TODO: Api call! For now, simulate a DB
  const promise = fetch('https://wagon-chat.herokuapp.com/general/messages')
    .then(response => response.json());
  return {
    type: 'FETCH_MESSAGES',
    payload: promise
  }
}




export function createMessage(channel, author, content) {
  event.preventDefault();
  const url = 'https://wagon-chat.herokuapp.com/general/messages';
  const body = { author, content }; // ES6 destructuring
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());

  return {
    type: MESSAGE_POSTED,
    payload: promise // Will be resolved by redux-promise
  };
}
