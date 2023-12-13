Ext.define('Firstapp.view.Details',{
	extend:'Ext.Panel',
	xtype:'details',
	config:{
		title:'Details',
		layout:'fit',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'details',
		tpl:' <h1 style="color: #333; text-align: center;"><b>El país {countryName}</b></h1><h3 style="color: #555; text-align: center;">Tiene por capital {capital}</h3><br><h1 style="color: #333; text-align: center;">El continente es {continentName}</h1><br><h1 style="color: #333; text-align: center;">Y {stability} tienen estabilidad política</h1>'	
	}
	
});