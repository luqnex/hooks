export const initialState = {
    cart: [],
    user: null,
    products: [],
    // foco
    number: 0,
}

export function reducer(state, action) {
    switch(action.type) {
        case 'number_add2':
            return {...state, number: state.number + 2}
        case 'login': 
            return {...state, user: { name: action.payload }}
        case 'multiplicarPor7':
            return { ...state, number: state.number * 7 }
        case 'dividirPor25': 
            return { ...state, number: state.number / 25 }
        case 'inteiro': 
            return { ...state, number: parseInt(state.number) }
        case 'addNum': 
            return { ...state, number: state.number + action.payload }
        case 'addNum': 
            return { ...state, number: state.number - action.payload }
        default:  
            return state   
    }
}