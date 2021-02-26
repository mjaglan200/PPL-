const show_image='show_image'
const initialState={
    Flags:false
}

const reducer=(state=initialState,action)=>{
    console.log('reducer=====',action.payload)
    switch(action.type){
        case show_image :return{
            ...state,
            Flags:action.payload
        }
        default:return state

    }
}

export default reducer