// __BEGIN_LICENSE__
//Copyright (c) 2015, United States Government, as represented by the 
//Administrator of the National Aeronautics and Space Administration. 
//All rights reserved.
//
//The xGDS platform is licensed under the Apache License, Version 2.0 
//(the "License"); you may not use this file except in compliance with the License. 
//You may obtain a copy of the License at 
//http://www.apache.org/licenses/LICENSE-2.0.
//
//Unless required by applicable law or agreed to in writing, software distributed 
//under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR 
//CONDITIONS OF ANY KIND, either express or implied. See the License for the 
//specific language governing permissions and limitations under the License.
// __END_LICENSE__

let USERNAME = 'TODO:USERNAME';
let PASSWORD = 'TODO:PASSWORD';
let SERVER_NAME = 'localhost';

module.exports = {

	// The server that is running this node app 
    server : { port : 3001,
    		   cesium_port: undefined,
    		   name : SERVER_NAME, 
    		   protocol: 'https',
    		   nginx_prefix: 'wristApp'},
    		   
    // This should only exist in xGDS side
    xgds : { port : 443, 
    		name : SERVER_NAME,
    		protocol : 'https',
    	    ev_channels: ['EV1'],
    	    follow_channel: 'EV1',
	    	username: USERNAME,
	    	password: PASSWORD
    },
    
    // If we are using web sockets this should only exist in the default side
    socket : { protocol : 'http',
    	       port : 2999 },
    
    // How we talk to the python sextant service
    sextant : { protocol : 'https',
       		    nginx_prefix: 'pextant',
       	        port : 5000 },
    
    // Where we get the terrain data from, this was only from default side.
    terrain : { port : 9090 },
    
    baseImagery: {'url': '/cesium-assets/imagery/NaturalEarthII' },
    
    // Default geographical site
    defaultSite : 'HI_Kilauea',
    
    // list of kml links to load
    kml_urls : ['https://' + USERNAME + ':' + PASSWORD + '@' + SERVER_NAME + '/notes/rest/notesFeed.kml',
    				//'https://old-boat.xgds.org/xgds_sample/rest/samplesFeed.kml', //TODO update to boat
        		    'https://' + USERNAME + ':' + PASSWORD + '@' + SERVER_NAME + '/basaltApp/rest/hvnp_so2_link.kml'],
    
    // list of various sites we support
    sites : { 'HI_Mauna_Ulu' : {'imagery': {'url': 'https://' + SERVER_NAME + '/data/rest/xgds_map_server/geoTiff/KI_lidar_slope_tile2',
    									 				'flipXY': true
    									 				},
    								//'elevation' : 'cesium_tilesets/HI_mauna_ulu',
    								'centerPoint' : [-155.2118, 19.3647, 5000]
    							},
			'HI_Kilauea' : { 
							 'imagery': {'url': 'https://' + SERVER_NAME + '/data/rest/xgds_map_server/geoTiff/Kilauea_True_Color',
								         'flipXY': true},
				 			 //'elevation' : 'cesium_tilesets/HI_kilauea',
				 			 'centerPoint' : [-155.260059,  19.408373, 5000]
				},
    			  'ID_COTM' : { 'tileMapResource': {'url': 'https://' + SERVER_NAME + '/data/rest/xgds_map_server/geoTiff/hwy_flow_k',
		 					'flipXY': true},
       						'centerPoint' : [-113.5787682, 43.4633101, 5000]
       					  },
       		  'Ames' : { 'imagery': 'TODO',
       			  		 'centerPoint' : [-122.064789, 37.419362, 5000]
       		  		  },
       	       'Black_Point' : { 'imagery' : 'TODO',
 						 'centerPoint' : [-111.466442, 35.690775, 6000]
 		  }

    },
    
    // whether or not this is a development server
    debug : true,
    
    // whether or not to show lat long elevation hovering over mouse move
    showCoordinates : false,

    // TODO override with your key if using bing.
    //bing_key : 'PUT YOUR BING KEY HERE',
    
    //List of Connected Devices 
    //connectedDevices : {  redCamera1 : 'CAM1', 
    //                      boat2 : 'IV'
    //                    }
    connectedDevices : { 
      }

}
