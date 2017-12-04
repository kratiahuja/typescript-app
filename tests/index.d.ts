interface server {
  create(type: String, attrs?: Object): void;
  createList(type: String, amount: Number, attrs?: Object) : void
}


declare var server: server;