# koa-router-aux
An koa-router auxiliary tool.setting up the route by decorator.

only available for typescript.

## Example
    import route from 'koa-router-aux';
    const Koa = require('koa');
    const Router = require('koa-router');
    const app = new Koa();
    const router = new Router();

    route.setRouter(router);

    class TestController {
        @route.get('/api/user')
        async user(ctx: any) {
            ctx.response.body = { name: 'Alex' };
        }
    }

    new TestController();
    app.use(router.routes()).use(router.allowedMethods());
    app.listen(3000);