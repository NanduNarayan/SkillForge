import{ INITIALIZE_STATE }from'./actionTypes';

export const initializeDataAction=(data)=>({
    type: INITIALIZE_STATE,
    payload: data
})