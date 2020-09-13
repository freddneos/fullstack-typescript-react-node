"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let movies = [];
class MoviesService {
    create(data) {
        //throw new Error("Method not implemented.");
        movies.push(data);
        return data;
    }
    findMany() {
        return movies;
        //throw new Error("Method not implemented.");
    }
}
exports.default = MoviesService;
//# sourceMappingURL=MoviesService.js.map