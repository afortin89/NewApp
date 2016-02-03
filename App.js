Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
 
    launch: function(){
        console.log('our first app whoop')
        this._loadData()
    },
 
 // get data from Rally
    _loadData: function(){
       
        var myStore = Ext.create('Rally.data.wsapi.Store', {
            model: 'User Story',
            autoLoad: true,
            listeners: {
                load: function(myStore, myData, success) {
                console.log('I got data', myStore, myData, success)
                this._loadGrid(myStore)
                    //process data
               
            },
    
              scope: this  
            },
    
        fetch: ['FormattedID', 'Name', 'ScheduleState']
     });
    },

     // create grid
    _loadGrid: function(myStoryStore){
         var myGrid = Ext.create('Rally.ui.grid.Grid', {   
                    store: myStoryStore,
                    columnCfgs: ['FormattedID', 'Name', 'ScheduleState']
                    
                        })
                        this.add(myGrid)
                        console.log('what is this?', this)
    },

       
});
