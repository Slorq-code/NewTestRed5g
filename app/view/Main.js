Ext.define("Firstapp.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'Ext.TitleBar',
    ],
    config: {
        tabBarPosition: 'bottom',
        items: [
		{xtype:'Home'},
		{xtype:'PostContainer'}
        ]
    }
});