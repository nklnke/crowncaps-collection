## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need:
- Download and install [Node.js](https://nodejs.org/)  
  [Download](https://nodejs.org/)
- Install [Vue-cli](https://cli.vuejs.org/)
```
npm install -g @vue/cli
```
- Install [json-server](https://github.com/typicode/json-server)
```
npm install -g json-server
```

### Installing

```
git clone https://github.com/nklnke/crowncaps-collection.git
npm install
```

### Starting json server
```
json-server --watch db.json
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

## Built With

* [Vue.js](https://vuejs.org/) - The web framework
* [Vue-CLI](https://cli.vuejs.org//) - Tooling command line interface for Vue.js
* [json-server](https://github.com/typicode/json-server) - fake REST API
* [Bootstrap](https://getbootstrap.com/) - CSS framework

## Authors

* **Danil Kozlov** - [nklnke](https://github.com/nklnke)

## License

This project is licensed under the MIT License
