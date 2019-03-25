export const Getname= (value)=>{
    return {
        type:'Setname',
        payload:value
    };
}
export const Getpass= (value)=>{
    return {
        type:'Setpass',
        payload:value
    };
}
export const Show= ()=>{
    return {
        type:'Showpass',
    };
}