import Data from '../../data.json';
import {getCompanyName} from "../getCompanyName";

export const setDispatchersQueue = (phone:string, status:boolean) => {
  const data = {
    // @ts-ignore
    name: getCompanyName(),
    number: phone,
    action: 'deleteDispatcher',
  };
  if (status) {
    data.action = 'addDispatcher';
  }
  return fetch(`${Data.url}/set_dispatchers_list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};
