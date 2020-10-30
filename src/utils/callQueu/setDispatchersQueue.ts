import Data from '../../data.json';

export const setDispatchersQueue = (phone:string, status:boolean) => {
  const data = {
    // @ts-ignore
    name: window.location.host.match(/([a-z]+)./)[1],
    number: phone,
    action: 'deleteDispatcher',
  };
  if (status) {
    data.action = 'addDispatcher';
  }
  return fetch(`${Data.url}/add_delete_dispatcher`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
