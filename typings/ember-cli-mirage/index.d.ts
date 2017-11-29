interface server {
  create(type: String, attrs?: Object): void;
  createList(type: String, amount: Number, attrs?: Object) : void
}

interface window {
  server: server;
}

declare var server: server;