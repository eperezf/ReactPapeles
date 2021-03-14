const settings = {
  "name": "reactpapeles",
  "state": {
    "frontity": {
      "url": "https://pisapapeles.net",
      "title": "Pisapapeles",
      "description": "Inteligencia en movimiento"
    }
  },
  "packages": [
    {
      name: "reactpapeles-theme",
      state: {
        theme: {
          menu: [
            ["Noticias", "/noticias"],
            ["Reviews", "/reviews"],
            ["Rumores", "/rumores"],
            ["Columnas", "/columna"],
            ["Guías", "/guias"],
            ["Juegos", "/juegos"],
          ]
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://pisapapeles.net"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
