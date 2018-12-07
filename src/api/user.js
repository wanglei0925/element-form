//api.js
import service from './index'
export const userApi = {
   getMenu(params) {
        return service({
            url: '/system/permission/userMenu',
            method: 'get',
            params
        })
    }
}