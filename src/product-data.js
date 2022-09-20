const PRODUCT_DATA = [
  {
    type: "White Wine",
    featureImage:
      "https://images.squarespace-cdn.com/content/v1/56549b3ae4b03ef584b60db5/1643808085004-D1PZD3KKVNUGPFS9YK50/valentines-day-wines-north-carolina.jpg?format=1500w",
    products: [
      {
        id: 1,
        name: "Basagoiti Blanco DOC La Rioja, Bodegas Basagoiti 2018",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Basagoti-Blanco.jpg",
        rating: 4.6,
        userRatings: 21500,
        price: 2643,
        grapes: ["White Tempranillo"],
        region: "Rioja",
        country: "Spain",
      },
      {
        id: 2,
        name: "Bruberry Blanc DO Montsant, Portal Del Montsant 2018",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Bruberry-Blanc.jpg",
        rating: 4.4,
        userRatings: 12500,
        price: 3117,
        grapes: ["White Grenache", "Macabeu"],
        region: "Mintsant",
        country: "Spain",
      },
      {
        id: 3,
        name: "Chardonnay, Head Over Heels, Berton Vineyard 2016",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Chardonnay-Head-Over-Heels-Berton-Vineyard-2016.jpg",
        rating: 3.8,
        userRatings: 4000,
        price: 1973,
        grapes: ["Chardonnay"],
        region: "South-East",
        country: "Australia",
      },
      {
        id: 4,
        name: "Gewurztraminer Reserve, Anne De Laweiss 2015",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Anne-De-Leweiss-Gewurztraminer.jpg",
        rating: 4.2,
        userRatings: 1200,
        price: 3050,
        grapes: ["Gewürztraminer"],
        region: "Alsace",
        country: "France",
      },
    ],
  },
  {
    type: "Red Wine",
    featureImage:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2luZSUyMGNoZWVyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    products: [
      {
        id: 5,
        name: "Amarone Della Valpolicella D.O.C.G, Tedeschi 2018",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Amarone.jpg",
        rating: 4.2,
        userRatings: 1200,
        price: 5599,
        grapes: ["Corvina", "Corvinone", "Rondinella", "Molinara"],
        region: "Veneto",
        country: "Italy",
      },
      {
        id: 6,
        name: "Brunello di Montalcino D.O.C.G, Casanova di Neri 2017",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2022/07/Brunello-di-Montalcino-.png",
        rating: 4.6,
        userRatings: 5200,
        price: 8267,
        grapes: ["Sangiovese"],
        region: "Tuscany",
        country: "Italy",
      },
      {
        id: 7,
        name: "Fobiano I.G.P, La Carraia 2013",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2022/07/Fobiano.png",
        rating: 3.8,
        userRatings: 4000,
        price: 3595,
        grapes: ["Merlot", "Cabernet Sauvignon"],
        region: "Umbria",
        country: "Italy",
      },
      {
        id: 8,
        name: "Girolamo Russo Etna Rosso A’Rina, 2019",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2022/04/a_rina_girolamo.jpg",
        rating: 4.2,
        userRatings: 1200,
        price: 3834,
        grapes: ["Nerello Mascalese", "Nerello Cappuccio"],
        region: "Feudo di Mezzo",
        country: "Italy",
      },
    ],
  },
  {
    type: "Rose Wine",
    featureImage:
      "https://media.istockphoto.com/photos/close-up-of-toasting-with-wine-picture-id993020488?k=20&m=993020488&s=612x612&w=0&h=geNIEyXYpyMZNmrXNy_ZBvqU69tkupXmGexgiO50CJQ=",
    products: [
      {
        id: 9,
        name: "Rose SI I.G.P, Deumani 2017",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/SI-1.jpg",
        rating: 4.2,
        userRatings: 1200,
        price: 6210,
        grapes: ["Syrah"],
        region: "Tuscany",
        country: "Italy",
        bioDynamic: true,
      },
      {
        id: 10,
        name: "V Anima Raimat Rs ECO, 2021",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2022/04/V-Anima-Raimat.png",
        rating: 4.6,
        userRatings: 5200,
        price: 2294,
        grapes: ["Chardonnay", "Pinot Noir"],
        region: "Costers del Segre",
        country: "Spain",
      },
      {
        id: 11,
        name: "Spumante Cuvee Rose Brut, NV",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2022/04/spumante-cuvee-rose-brut.jpeg",
        rating: 3.8,
        userRatings: 4000,
        price: 2475,
        grapes: ["Glera", "Incorocio Manzoni Muscat Rose"],
        region: "Veneto",
        country: "Italy",
      },
    ],
  },
  {
    type: "Sparkling Wine",
    featureImage:
      "https://scott-labs-static.sfo3.cdn.digitaloceanspaces.com/article-content/body-images/_1200x630_crop_center-center_82_line/Featured-SEO-Images-35.jpg",

    products: [
      {
        id: 12,
        name: "BellaVista Cuvée Brut Alma DOCG, Franciacorta, NV",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Bellavista-Cuvee.jpg",
        rating: 4.2,
        userRatings: 1200,
        price: 5062,
        grapes: ["Chardonnay", "Pinot Nero", "Pinot Bianco"],
        region: "Lombard",
        country: "Italy",
      },
      {
        id: 13,
        name: "Champagne Bruno Paillard “Blanc De Blancs” Grand CruV Anima Raimat Rs ECO, 2021",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/Bruno-Paillard.jpg",
        rating: 4.6,
        userRatings: 5200,
        price: 10740,
        grapes: ["Chardonnay"],
        region: "Champagne-Reims",
        country: "France",
      },
      {
        id: 14,
        name: "Champagne Brut Reference, Lombard & CIE",
        imageURL:
          "https://www.vesperhouse.com/wp-content/uploads/2020/12/CIE.jpg",
        rating: 3.8,
        userRatings: 4000,
        price: 7460,
        grapes: ["Pinot Noir", "Pinot Meunier", "Chardonnay"],
        region: "Champagne-Epernay",
        country: "France",
      },
    ],
  },
];
export default PRODUCT_DATA;
