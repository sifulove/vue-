const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser=require('koa-bodyparser');
const controller = require('./controller');
const app=new Koa();
app.use(bodyParser());
app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/test') {
            return "*"; // 允许来自所有域名请求
        }
        return "*"; // 允许来自所有域名请求
        //return 'http://localhost:8080'; / 这样就能只允许 http://localhost:8080 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  await next();
});
app.use(controller());
app.listen(3000);
console.log('app started at port 3000...');
