import ViewFactory from "../../shared/base/viewFactory.mjs";
import TableBrowseromponent from "./table.mjs";

export default class BrowserFactory extends ViewFactory {
  createTable() {
    return new TableBrowseromponent();
  }
}