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

const SERVER_NAME = 'localhost';
const NGINX_PREFIX = 'wristApp';


module.exports = {

	mode: 'XGDS_SSE',  // valid modes: XGDS, XGDS_SSE, STANDALONE

    sceneMode: 'SCENE3D',  // cesium scene mode, defaults to scene3d, can be COLUMBUS_VIEW or SCENE2D

    // The server that is running this node app
    server : { port : 3001, 
    		   cesium_port: 3001,
    		   name : SERVER_NAME,
    		   protocol: 'http',
    		   nginx_prefix: NGINX_PREFIX},
    		   
    // If we are using web sockets this should only exist in the default side
    socket : { protocol : 'http',
    		   port : 2999 },
    
    // How we talk to the python sextant service
    sextant : { protocol : 'https',
    		    nginx_prefix: 'pextant',
    	        port : 5000 },
    
    // Where we get the terrain data from, this was only from default side.
    terrain : { port : 9090 },
    
    // 	If you have base imagery include it locally or remotely here
    //baseImagery: {'url': '/cesium-assets/imagery/NaturalEarthII' },
   
    
    // Default geographical site
    defaultSite : 'HI_Kilauea',
    
    // list of various sites we support
    sites : { 'HI_Mauna_Ulu' : { 'centerPoint' : [-155.2118, 19.3647, 5000]
    							   },
				'HI_Kilauea' : {  //'imagery': {'url': 'https://' + SERVER_NAME + '/data/rest/xgds_map_server/geoTiff/HI_kilauea',
					//		 	'flipXY': true
					// 			},
		 			//'elevation' : 'cesium_tilesets/HI_kilauea',
					'centerPoint' : [-155.260059,  19.408373, 5000]
				},
    		      'ID_COTM' : { 'centerPoint' : [-113.5787682, 43.4633101, 5000]
    		      			  },
    		      'Ames' : {  'centerPoint' : [-122.064789, 37.419362, 5000]
    					   }
    },
	
	// list of kml links to load
    kml_urls : [],
    

	// url for fancytree json data for layers
	layer_tree_url: 'https://'  + SERVER_NAME + '/xgds_map_server/rest/treejson/',
	layer_tree_icon_url:  'https://localhost/wristApp/icons/',
	layer_tree_get_node_data_url: 'https://' + SERVER_NAME + '/xgds_map_server/rest/uuidsjson/',


    // whether or not to show lat long elevation hovering over mouse move
    showCoordinates : false,
    
    // TODO override with your key.
    bing_key : '#TODO PUT IN YOUR BING KEY',

	// if you want express to add cors headers because pages from this server will be included in other websites
    //cors: true,

	// if you have other external websites that require authorization add them here
    //trustedServers: [{'name':'myhostname.com', 'port':80}]

	showTimeline: true,

	hideFooter: false,

	showNav: true,

	//mouseControls: 'flatPan',
	panScale: 400,  // Divide camera height by this number when panning with mouseControls
	zoomScale: 200 // Divide camera height by this number when zooming with mouseControls

	//hideConnected: true


}
