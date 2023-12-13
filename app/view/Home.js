Ext.define('Firstapp.view.Home',{
	extend: 'Ext.Panel',
	xtype: 'Home',
	
	config:{
		title: 'Intro',
		iconCls: 'home',
		
		layout:'fit',
		scrollable:true,
		styleHtmlContent:true,
		styleHtmlCls:'homepage',
		html:['<h1>Prueba tecnica por Andres F. Rodriguez</h1>',
			'<hr>',
			'<p>Lista de paises y filtro + detalle del pais'].join(""),
			items: [
			{
				xtype: 'titlebar',
				title:'Inicio',
				docked:'top'
			}
			]
	}
});