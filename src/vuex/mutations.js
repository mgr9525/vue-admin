
export const SET_LGINFO=(state,par) =>{
    if(par)
        state.userinfo=par;
    else
        state.userinfo={};
}