import IExternalAPIConsumer from "../../protocols/IExternalAPIConsumer";

let movies: object[] = []
export default class MoviesService implements IExternalAPIConsumer {
  create(data: any) {
    //throw new Error("Method not implemented.");
    movies.push(data)
    return data
  }
  findMany(): any[] {
    return movies;
    //throw new Error("Method not implemented.");
  }
}
