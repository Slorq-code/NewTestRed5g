Ext.define('Firstapp.controller.Details', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
			PostContainer:'PostContainer'
            
        },
        control: {
			'PostContainer Places list':{
				itemtap: function(list,index,target,record){
					var detailsView = Ext.create('Firstapp.view.Details');
					detailsView.setData(record.data);
					this.getPostContainer().push(detailsView);
				}
			}
            
        }
    }
});
