export default (state={username:'',password:''},action) =>{
    switch(action.type){
        case 'Setname':
            return state={username:action.payload,password:state.password}
        default:
            return state;
    };
}
