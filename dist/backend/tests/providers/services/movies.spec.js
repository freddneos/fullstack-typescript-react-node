"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MoviesService_1 = __importDefault(require("../../../providers/services/MoviesService"));
const moviesApi = new MoviesService_1.default();
describe('Movies API', () => {
    it('should create a new movie', () => {
        const movieData = {
            name: 'Pirates of the caribbean',
            rating: 8.5
        };
        const movie = moviesApi.create(movieData);
        expect(movie).toEqual(movieData);
    });
});
//# sourceMappingURL=movies.spec.js.map