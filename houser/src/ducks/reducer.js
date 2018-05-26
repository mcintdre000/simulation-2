const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: null,
    mortgage: null,
    rent: null
}

const UPDATE_NAME = "UPDATE_NAME";

function reducer( state= initialState, action ) {
    console.log('REDUCER HIT: Action ->', action );

    switch( action.type ){
        case UPDATE_NAME: 
            return { ...state, propertyType: action.payload };

        default: return state;
    }
}


export function updateName( name ) {
    return {
        type: UPDATE_NAME,
        payload: name
    };
}

export default reducer;