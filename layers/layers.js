var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Yellowstone_grandteton_triptrip_2026_wymt_1 = new ol.format.GeoJSON();
var features_Yellowstone_grandteton_triptrip_2026_wymt_1 = format_Yellowstone_grandteton_triptrip_2026_wymt_1.readFeatures(json_Yellowstone_grandteton_triptrip_2026_wymt_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yellowstone_grandteton_triptrip_2026_wymt_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yellowstone_grandteton_triptrip_2026_wymt_1.addFeatures(features_Yellowstone_grandteton_triptrip_2026_wymt_1);
var lyr_Yellowstone_grandteton_triptrip_2026_wymt_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yellowstone_grandteton_triptrip_2026_wymt_1, 
                style: style_Yellowstone_grandteton_triptrip_2026_wymt_1,
                popuplayertitle: 'Yellowstone_grandteton_trip — trip_2026_wymt',
                interactive: true,
    title: 'Yellowstone_grandteton_trip — trip_2026_wymt<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_0.png" /> Bar<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_1.png" /> Bike rentals<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_2.png" /> Camping<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_3.png" /> Farmers Market<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_4.png" /> Geyser<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_5.png" /> Gondola and Tram<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_6.png" /> Grocery<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_7.png" /> Hike<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_8.png" /> Horseback riding<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_9.png" /> Rodeo<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_10.png" /> Scenic drive<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_11.png" /> View point<br />\
    <img src="styles/legend/Yellowstone_grandteton_triptrip_2026_wymt_1_12.png" /> View Point<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_Yellowstone_grandteton_triptrip_2026_wymt_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Yellowstone_grandteton_triptrip_2026_wymt_1];
lyr_Yellowstone_grandteton_triptrip_2026_wymt_1.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Category': 'Category', 'Coordinates': 'Coordinates', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Description': 'Description', 'Cost': 'Cost', 'Booking Requirements': 'Booking Requirements', 'Duration/Length': 'Duration/Length', 'Website': 'Website', 'Photo': 'Photo', 'PhotoHTML': 'PhotoHTML', });
lyr_Yellowstone_grandteton_triptrip_2026_wymt_1.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Category': 'TextEdit', 'Coordinates': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Description': 'TextEdit', 'Cost': 'TextEdit', 'Booking Requirements': 'TextEdit', 'Duration/Length': 'TextEdit', 'Website': 'TextEdit', 'Photo': 'TextEdit', 'PhotoHTML': 'TextEdit', });
lyr_Yellowstone_grandteton_triptrip_2026_wymt_1.set('fieldLabels', {'fid': 'no label', 'Name': 'header label - visible with data', 'Category': 'inline label - always visible', 'Coordinates': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Description': 'inline label - visible with data', 'Cost': 'inline label - visible with data', 'Booking Requirements': 'inline label - visible with data', 'Duration/Length': 'inline label - visible with data', 'Website': 'inline label - visible with data', 'Photo': 'hidden field', 'PhotoHTML': 'inline label - visible with data', });
lyr_Yellowstone_grandteton_triptrip_2026_wymt_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});