export default (state={username:'',password:'',show:false},action) =>{
    switch(action.type){
        case 'Setname':
            return state={username:action.payload,password:state.password,show:state.show}
        case 'Setpass':
            return state={username:state.username, password:action.payload,show:state.show}
        case 'Showpass':
            return state={username:state.username,password:state.password,show:!(state.show)}
        default:
            return state;
    };
}
