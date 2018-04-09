import { route } from 'koa-router-aux';

var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();
route.setRouter(router);

class Controller {
    @route.get('/api/user')
    async user(ctx: any) {
        ctx.response.body = { name: 'Alex' };
    }
}

new Controller();


app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);