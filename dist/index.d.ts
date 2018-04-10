/// <reference types="koa-router" />
import * as Router from 'koa-router';
/**
 *
 *
 * @export
 * @class KoaRouterAux
 */
declare class KoaRouterAux {
    /**
     *
     *
     * @static
     * @type {Router}
     * @memberof KoaRouterAux
     */
    static router: Router;
    /**
     *
     *
     * @static
     * @memberof KoaRouterAux
     */
    static contoller_router_map: any;
    /**
     *
     *
     * @static
     * @param {...string[]} args
     * @memberof KoaRouterAux
     */
    static contoller(className: string, ...args: string[]): void;
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
    private static getFullUri(uri, target);
    /**
     *
     *
     * @static
     * @param {Router} router
     * @memberof KoaRouterAux
     */
    static setRouter(router: Router): void;
    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    static get(uri: string): any;
    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    static post(uri: string): any;
    /**
     *
     *
     * @static
     * @param {string} uri
     * @returns {*}
     * @memberof KoaRouterAux
     */
    static put(uri: string): any;
    static del(uri: string): any;
}
export default KoaRouterAux;
