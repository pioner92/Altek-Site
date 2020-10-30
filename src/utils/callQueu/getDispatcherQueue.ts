import Data from '../../data.json';

export type dispatcherNumbersType = {
    data: Array<string>
};

export const getDispatcherQueue = (company_name: string): Promise<Array<string>> => fetch(`${Data.url}/get_dispatchers/${company_name}`)
    .then((response) => response.json())
    .then((data: dispatcherNumbersType) => data.data)
    .catch((e) => {
        console.log(`Error get Numbers from server ${e}`);
        return [];
    });
