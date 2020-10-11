import api from '@/api/apis'

export const getLgInfo = ({commit}) => {
    return new Promise((resolve, reject)=>{
        api.post('/lg/info').then(res=>{
            commit('SET_LGINFO',res.data);
            resolve();
        }).catch(err=>{
            reject(err);
        });
    })
}
