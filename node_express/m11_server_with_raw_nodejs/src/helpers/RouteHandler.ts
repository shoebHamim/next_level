import {Server, ServerResponse } from "node:http";
import { CustomRequest } from "../server";

export type RouteHandler = (req: CustomRequest, res: ServerResponse) => void;

export const routes: Map<string, Map<string, RouteHandler>> = new Map();

//? this map is like Map< 'GET', '/api', ()=> res.end() , so this is like a list of all the routes
// but the key of this map is Req. type, and value is another Map<>, which has the key of the path, so this map can hold
// multiple paths like this
// GET -->  '/api/users',()=> res.end()
//          '/api/posts, ()=> res.end()
//          '/api/videos, ()=> res.end()

function addRoutes(method: string, path: string, handler: RouteHandler) {
  if (!routes.has(method)) routes.set(method, new Map());
  routes.get(method)!.set(path, handler);
}
// api/users/1
// api/users/:id
function getDynamicPathHandler(
  url: string,
  routes: Map<string, RouteHandler>
): RouteHandler | null {
  for (const [route, handler] of routes) {
    // 1.  if the defined route doesn't have :, it's not a potential for dynamic route checking
    if (!route.includes(":")) continue;
    // 2. split the path and route and check
    const routeSegments = route.split("/");
    const urlSegments = url.split("/");
    // 3. if the length of the two array is different they are not a match
    if (routeSegments.length !== urlSegments.length) continue;
    // 4. check if each segments are equal, except the dynamic part
    let isUrlMatch = true;
    let params:Record<string,string> = {};
    for (let i = 0; i < routeSegments.length; i += 1) {
      if (routeSegments[i].startsWith(":")) {
        params[routeSegments[i].substring(1)] = urlSegments[i];
        continue;
      }
      if (routeSegments[i] !== urlSegments[i]) {
        isUrlMatch = false;
        break;
      }
    }
    if (isUrlMatch)
      return (req: CustomRequest, res: ServerResponse) => {
        req.params = params;
        return handler(req, res);
      };
  }
  return null;
}

export function getHandler(method: string, path: string): RouteHandler | null {
  const mappedRoutes = routes.get(method); // get the map of the routs
  if (!mappedRoutes) return null; // if no map exists, means this method type- GET/POST/whatever has no route registered
  const staticRouteHandler = mappedRoutes.get(path);
  if (staticRouteHandler) return staticRouteHandler;
  const dynamicRouteHandler = getDynamicPathHandler(path, mappedRoutes); // finally get the dynamic route, this function returns null if no dynamic route
  return dynamicRouteHandler;
}

export default addRoutes;
