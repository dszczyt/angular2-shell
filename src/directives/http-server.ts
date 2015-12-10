import {bootstrap, Component} from "angular2/angular2";
import {Server} from "http";

@Component({
  selector: "http-server",
  inputs: [
    "host: string",
    "port: number"
  ]
})
export class HttpServer {
  private host: string;
  private port: number;

  HttpServer() {
    console.log("loading server");
  }
}
