Ext.define("Firstapp.store.Places", {
  extend: "Ext.data.Store",
  config: {
    model: "Firstapp.model.Place",
    autoLoad: "true",
    data: [
      {
        countryName: "Nepal",
        stability: "no",
        capital: "Kathmandu",
        continentName: "Asia",
      },
    ],
  },
});
