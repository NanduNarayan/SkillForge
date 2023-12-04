import{ INITIALIZE_STATE, TASK_COMPLETION }from'./actionTypes';

export const initializeDataAction=(data)=>({
    type: INITIALIZE_STATE,
    payload: data
})
export const courseAction=(data)=>({
    type:TASK_COMPLETION,
    payload:data
})