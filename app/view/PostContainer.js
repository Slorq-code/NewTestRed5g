Ext.define('Firstapp.view.PostContainer',{
	extend:'Ext.NavigationView',
	xtype:'PostContainer',
	config:{
		title : 'Listado',
		iconCls : 'maps',
		items:[
		{
			xtype:'Places'
		}
		]
	}
});