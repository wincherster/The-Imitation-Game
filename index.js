const Koa = require("koa");

const app = new Koa();

app.use( async (ctx) => {
  ctx.body = "hello world"
})

app.listen(9999);

console.log('Koa2 server in 9999');