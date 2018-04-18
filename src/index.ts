import * as Router from "koa-router";

function validate(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
    let method: any = descriptor.value;
    descriptor.value = (uri: string): any => {
        if (!KoaRouterAux.router) { throw Error("router is invalid"); }
        return method(uri);
    };
}
/**
 *
 *
 * @export
 * @class KoaRouterAux
 */
class KoaRouterAux {
    /**
     *
     *
     * @static
     * @type {Router}
     * @memberof KoaRouterAux
     */
    public static router: Router;

    /**
     *
     *
     * @static
     * @memberof KoaRouterAux
     */
    public static contoller_router_map: any = {};

    /**
     *
     *
     * @static
     * @param {...string[]} args
     * @memberof KoaRouterAux
     */
    public static contoller(className: string, ...args: string[]): void {
        let prefix: string = "";
        args.forEach((arg: string): void => { prefix += arg; });
        KoaRouterAux.contoller_router_map[className] = prefix;
    }

    /**
     *
     *
     * @private
     * @static
     * @param {string} uri
     * @param {*} target
     * @returns {string}
     * @memberof KoaRouterAux
     */
    private static getFullUri(uri: string, target: any): string {
        if (KoaRouterAux.contoller_router_map[target.constructor.name]) {
            return `${KoaRouterAux.contoller_router_map[target.constructor.name]}${uri}`;
        }

        return uri;
    }

    /**
     *
     *
     * @static
     * @param {Router} router
     * @memberof KoaRouterAux
     */
    public static setRouter(router: Router): void {
        KoaRouterAux.router = router;
    }

    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static get(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.get(KoaRouterAux.getFullUri(uri, target), method);
        };
    }

    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static post(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.post(KoaRouterAux.getFullUri(uri, target), method);
        };
    }

    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static put(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.put(KoaRouterAux.getFullUri(uri, target), method);
        };
    }

    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static del(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.del(KoaRouterAux.getFullUri(uri, target), method);
        };
    }


    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static patch(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.patch(KoaRouterAux.getFullUri(uri, target), method);
        };
    }


    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static head(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.head(KoaRouterAux.getFullUri(uri, target), method);
        };
    }

    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    @validate
    public static options(uri: string): any {
        if (!uri) { throw Error("uri is invalid"); }
        return (target: any, propertyKey: string, descriptor: PropertyDescriptor): any => {
            let method: any = descriptor.value;
            KoaRouterAux.router.options(KoaRouterAux.getFullUri(uri, target), method);
        };
    }
}

export default KoaRouterAux;