
var countryData =  [
	{
	  countryName: "Nepal",
	  stability: "no",
	  capital: "Kathmandu",
	  continentName: "Asia",
	},
	{
	  countryName: "Netherlands",
	  stability: "no",
	  capital: "Amsterdam",
	  continentName: "Europe",
	},
	{
	  countryName: "New Caledonia",
	  stability: "no",
	  capital: "Noumea",
	  continentName: "Oceania",
	},
	{
	  countryName: "New Zealand",
	  stability: "yes",
	  capital: "Wellington",
	  continentName: "Oceania",
	},
	{
	  countryName: "Nicaragua",
	  stability: "yes",
	  capital: "Managua",
	  continentName: "North America",
	},
	{
	  countryName: "Niger",
	  stability: "yes",
	  capital: "Niamey",
	  continentName: "Africa",
	},
	{
	  countryName: "Nigeria",
	  stability: "yes",
	  capital: "Abuja",
	  continentName: "Africa",
	},
	{
	  countryName: "Niue",
	  stability: "yes",
	  capital: "Alofi",
	  continentName: "Oceania",
	},
	{
	  countryName: "Norfolk Island",
	  stability: "no",
	  capital: "Kingston",
	  continentName: "Oceania",
	},
	{
	  countryName: "North Korea",
	  stability: "yes",
	  capital: "Pyongyang",
	  continentName: "Asia",
	},
	{
	  countryName: "Northern Mariana Islands",
	  stability: "yes",
	  capital: "Saipan",
	  continentName: "Oceania",
	},
	{
	  countryName: "Norway",
	  stability: "yes",
	  capital: "Oslo",
	  continentName: "Europe",
	},
	{
	  countryName: "Oman",
	  stability: "no",
	  capital: "Muscat",
	  continentName: "Asia",
	},
	{
	  countryName: "Pakistan",
	  stability: "no",
	  capital: "Islamabad",
	  continentName: "Asia",
	},
	{
	  countryName: "Palau",
	  stability: "yes",
	  capital: "Melekeok",
	  continentName: "Oceania",
	},
	{
	  countryName: "Palestine",
	  stability: "yes",
	  capital: "",
	  continentName: "Asia",
	},
	{
	  countryName: "Panama",
	  stability: "no",
	  capital: "Panama City",
	  continentName: "North America",
	},
	{
	  countryName: "Papua New Guinea",
	  stability: "no",
	  capital: "Port Moresby",
	  continentName: "Oceania",
	},
	{
	  countryName: "Paraguay",
	  stability: "no",
	  capital: "Asunción",
	  continentName: "South America",
	},
	{
	  countryName: "Peru",
	  stability: "yes",
	  capital: "Lima",
	  continentName: "South America",
	},
	{
	  countryName: "Philippines",
	  stability: "no",
	  capital: "Manila",
	  continentName: "Asia",
	},
	{
	  countryName: "Pitcairn Islands",
	  stability: "yes",
	  capital: "Adamstown",
	  continentName: "Oceania",
	},
	{
	  countryName: "Poland",
	  stability: "yes",
	  capital: "Warsaw",
	  continentName: "Europe",
	},
	{
	  countryName: "Portugal",
	  stability: "no",
	  capital: "Lisbon",
	  continentName: "Europe",
	},
	{
	  countryName: "Puerto Rico",
	  stability: "yes",
	  capital: "San Juan",
	  continentName: "North America",
	},
	{
	  countryName: "Qatar",
	  stability: "no",
	  capital: "Doha",
	  continentName: "Asia",
	},
	{
	  countryName: "Republic of the Congo",
	  stability: "yes",
	  capital: "Brazzaville",
	  continentName: "Africa",
	},
	{
	  countryName: "Romania",
	  stability: "no",
	  capital: "Bucharest",
	  continentName: "Europe",
	},
	{
	  countryName: "Russia",
	  stability: "yes",
	  capital: "Moscow",
	  continentName: "Europe",
	},
	{
	  countryName: "Rwanda",
	  stability: "no",
	  capital: "Kigali",
	  continentName: "Africa",
	},
	{
	  countryName: "Réunion",
	  stability: "yes",
	  capital: "Saint-Denis",
	  continentName: "Africa",
	},
	{
	  countryName: "Saint Barthélemy",
	  stability: "yes",
	  capital: "Gustavia",
	  continentName: "North America",
	},
	{
	  countryName: "Saint Helena",
	  stability: "yes",
	  capital: "Jamestown",
	  continentName: "Africa",
	},
	{
	  countryName: "Saint Kitts and Nevis",
	  stability: "no",
	  capital: "Basseterre",
	  continentName: "North America",
	},
	{
	  countryName: "Saint Lucia",
	  stability: "yes",
	  capital: "Castries",
	  continentName: "North America",
	},
	{
	  countryName: "Saint Martin",
	  stability: "no",
	  capital: "Marigot",
	  continentName: "North America",
	},
	{
	  countryName: "Saint Pierre and Miquelon",
	  stability: "no",
	  capital: "Saint-Pierre",
	  continentName: "North America",
	},
	{
	  countryName: "Saint Vincent and the Grenadines",
	  stability: "no",
	  capital: "Kingstown",
	  continentName: "North America",
	},
	{
	  countryName: "Samoa",
	  stability: "yes",
	  capital: "Apia",
	  continentName: "Oceania",
	},
	{
	  countryName: "San Marino",
	  stability: "yes",
	  capital: "San Marino",
	  continentName: "Europe",
	},
	{
	  countryName: "Saudi Arabia",
	  stability: "no",
	  capital: "Riyadh",
	  continentName: "Asia",
	},
	{
	  countryName: "Senegal",
	  stability: "yes",
	  capital: "Dakar",
	  continentName: "Africa",
	},
	{
	  countryName: "Serbia",
	  stability: "yes",
	  capital: "Belgrade",
	  continentName: "Europe",
	},
	{
	  countryName: "Seychelles",
	  stability: "no",
	  capital: "Victoria",
	  continentName: "Africa",
	},
]

var countryStore = Ext.create('Ext.data.Store', {
	fields: [
		{name: 'countryName', type: 'string'},
		{name: 'stability', type: 'string'},
		{name: 'capital', type: 'string'},
		{name: 'continentName', type: 'string'},
	],
	data: countryData,
})


// let filterStability = function (newValue) {
//     countryStore.clearFilter();

//     if (newValue.getValue() !== 'all') {
//         countryStore.filterBy(function (record) {
//             return record.get('stability') === newValue.getValue();
//         });
//     }
// };

let filter = function(newValue) {
    countryStore.clearFilter();

    if (newValue.getValue() !== 'all') {
        countryStore.filterBy(function(record) {
            return record.get('continentName') === newValue.getValue();
        });
    }
};




Ext.define('Firstapp.view.Places', {
	extend : 'Ext.Panel',
	xtype : 'Places',

	config : {
		title : 'Data',
		iconCls : 'maps',
		layout : 'fit',
		items : [
		{
				xtype : 'list',
				store : this.countryStore,
				itemTpl : '<h1><b>Pais: {countryName}</b></h1> <h3>capital: {capital}</h3>',
				itemCls: 'place-entry',
				items: [
					{
						xtype: 'toolbar',
						height: 40,
						docked: 'top',
						items: [
							{
								xtype: 'selectfield',
								label: 'Continente',
								labelWidth: 80,
								width: 260,
								value: 'all',
								options: [
									{text: 'Todos', value: 'all'},
									{text: 'Asia', value: 'Asia'},
									{text: 'Europe', value: 'Europe'},
									{text: 'North America', value: 'North America'},
									{text: 'South America', value: 'South America'},
									{text: 'Africa', value: 'Africa'},
									{text: 'Oceania', value: 'Oceania'},
								],
								listeners: {
									change: function( newValue, oldValue, eOpts ) {
										filter(newValue);
									}
								}
							},
							// {
							// 	xtype: 'selectfield',
							// 	label: 'Estabilidad politica',
							// 	labelWidth: 140,
							// 	width: 360,
							// 	value: 'all',
							// 	options: [
							// 		{text: 'Todos', value: 'all'},
							// 		{text: 'Yes', value: 'Yes'},
							// 		{text: 'No', value: 'No'},
							// 	],
							// 	listeners: {
							// 		change: function(selectfield, newValue, oldValue, eOpts) {
							// 			filterStability(newValue);
							// 		}
							// 	}
							// }
						]
					}
				]
			}
		]
	},
});
