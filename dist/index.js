"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function validate(target, propertyKey, descriptor) {
    let method = descriptor.value;
    descriptor.value = (uri) => {
        if (!KoaRouterAux.router)
            throw Error('router is invalid');
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
     * @param {...string[]} args
     * @memberof KoaRouterAux
     */
    static contoller(className, ...args) {
        let prefix = '';
        args.forEach((arg) => { prefix += arg; });
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
    static getFullUri(uri, target) {
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
    static setRouter(router) {
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
    static get(uri) {
        if (!uri)
            throw Error('uri is invalid');
        return (target, propertyKey, descriptor) => {
            let method = descriptor.value;
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
    static post(uri) {
        if (!uri)
            throw Error('uri is invalid');
        return (target, propertyKey, descriptor) => {
            let method = descriptor.value;
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
    static put(uri) {
        if (!uri)
            throw Error('uri is invalid');
        return (target, propertyKey, descriptor) => {
            let method = descriptor.value;
            KoaRouterAux.router.put(KoaRouterAux.getFullUri(uri, target), method);
        };
    }
    static del(uri) {
        if (!uri)
            throw Error('uri is invalid');
        return (target, propertyKey, descriptor) => {
            let method = descriptor.value;
            KoaRouterAux.router.del(KoaRouterAux.getFullUri(uri, target), method);
        };
    }
}
/**
 *
 *
 * @static
 * @memberof KoaRouterAux
 */
KoaRouterAux.contoller_router_map = {};
__decorate([
    validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KoaRouterAux, "get", null);
__decorate([
    validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KoaRouterAux, "post", null);
__decorate([
    validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KoaRouterAux, "put", null);
__decorate([
    validate,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], KoaRouterAux, "del", null);
exports.default = KoaRouterAux;
