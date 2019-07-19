import { ADD_POST, SELECTED_PHOTO } from '../actions/actionTypes';

const initialState = {
    posts: [
        // {
        //     id: Math.random(),
        //     name: 'usuario1',
        //     image: require('../../../assets/images/boat.jpg'),
        //     likes: '900',
        //     liked: false,
        //     comments: [],
        // },
        // {
        //     id: Math.random(),
        //     name: 'usuario3',
        //     image: require('../../../assets/images/boat.jpg'),
        //     likes: '1.400',
        //     liked: false,
        //     comments: [
        //         {
        //             nickname: usuario1',
        //             comment: 'Adorei essa foto',
        //         },
        //         {
        //             nickname: 'usuario2',
        //             comment: 'Otima Foto',
        //         }
        //     ]
        // }
    ],
    selectedPhoto: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload
                })
            }
        case SELECTED_PHOTO:
            return{
            ...state,
            selectedPhoto: action.payload
        }
        default:
            return state
    }
}


export default reducer;