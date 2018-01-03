export const GET_PEOPLE_START = 'GET_PEOPLE_START';
export const GET_PEOPLE_ERROR = 'GET_PEOPLE_ERROR';
export const GET_PEOPLE_SUCCESS = 'GET_PEOPLE_SUCCESS';


export function getPeople() {
  return {
    type: GET_PEOPLE_START,
  };
}
