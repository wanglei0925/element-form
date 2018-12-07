// import computeIndex from '@/components/Compute/index'
const _import = require('./import-' + process.env.NODE_ENV)
const computeIndex = _import('Compute/index')
const userRoute = {
        path: "/com",
        name: "com",
        component: computeIndex
}
export default userRoute