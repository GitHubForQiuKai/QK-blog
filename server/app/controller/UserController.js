// const UserModel = require('../models/User');
// const jwt = require('koa-jwt');
// const IndexController = {
//   getUserById() {
//     return async(ctx, next) => {
//       const id = ctx.params.id;
//       ctx.body = await UserModel.getUserById(id);
//     };
//   },
//   postUserAuth() {
//     return async(ctx, next) => {
//       const data = ctx.request.body;
//       const userInfo = await UserModel.getUserByName(data.name);
//       if (userInfo != null) {
//         if (userInfo.user_pwd != data.password) { // 密码错误
//           ctx.body = {
//             success: false,
//             msg: '密码错误',
//           };
//         } else { // 密码正确
//           const userToken = {
//             name: userInfo.user_name,
//             id: userInfo.user_id,
//           };
//           const secret = 'qiukai-blog';
//           const secretedToken = jwt.sign(userToken, secret);
//           ctx.body = {
//             success: true,
//             token: secretedToken,
//           };
//         }
//       } else {
//         ctx.body = {
//           success: false,
//           msg: '用户不存在',
//         };
//       }
//     };
//   },
// };
// module.exports = router => {
//   return router
//     .get('/user/:id', IndexController.getUserById())
//     .post('/user', IndexController.postUserAuth()).routes();
// };
