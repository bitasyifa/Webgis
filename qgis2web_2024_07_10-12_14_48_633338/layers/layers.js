var wms_layers = [];


        var lyr_Positronretina_0 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                popuplayertitle: "Jalan",
                interactive: true,
                title: '<img src="styles/legend/Jalan_1.png" /> Jalan'
            });
var format_Jangkauan1500meter_2 = new ol.format.GeoJSON();
var features_Jangkauan1500meter_2 = format_Jangkauan1500meter_2.readFeatures(json_Jangkauan1500meter_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jangkauan1500meter_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jangkauan1500meter_2.addFeatures(features_Jangkauan1500meter_2);
var lyr_Jangkauan1500meter_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jangkauan1500meter_2, 
                style: style_Jangkauan1500meter_2,
                popuplayertitle: "Jangkauan 1500 meter",
                interactive: true,
                title: '<img src="styles/legend/Jangkauan1500meter_2.png" /> Jangkauan 1500 meter'
            });
var format_PerguruanTinggi_3 = new ol.format.GeoJSON();
var features_PerguruanTinggi_3 = format_PerguruanTinggi_3.readFeatures(json_PerguruanTinggi_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PerguruanTinggi_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PerguruanTinggi_3.addFeatures(features_PerguruanTinggi_3);
var lyr_PerguruanTinggi_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PerguruanTinggi_3, 
                style: style_PerguruanTinggi_3,
                popuplayertitle: "Perguruan Tinggi",
                interactive: true,
                title: '<img src="styles/legend/PerguruanTinggi_3.png" /> Perguruan Tinggi'
            });

lyr_Positronretina_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Jangkauan1500meter_2.setVisible(true);lyr_PerguruanTinggi_3.setVisible(true);
var layersList = [lyr_Positronretina_0,lyr_Jalan_1,lyr_Jangkauan1500meter_2,lyr_PerguruanTinggi_3];
lyr_Jalan_1.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'OBJECTID': 'OBJECTID', 'Nama Jalan': 'Nama Jalan', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'ARHRJL': 'ARHRJL', 'AUTRJL': 'AUTRJL', 'FGSRJL': 'FGSRJL', 'JARRJL': 'JARRJL', 'JPARJL': 'JPARJL', 'KLLRJL': 'KLLRJL', 'KONRJL': 'KONRJL', 'KPMSTR': 'KPMSTR', 'LKONOF': 'LKONOF', 'LKSBSP': 'LKSBSP', 'LKSRTA': 'LKSRTA', 'LLHRRT': 'LLHRRT', 'LOCRJL': 'LOCRJL', 'LBRBHJ': 'LBRBHJ', 'LBRJLN': 'LBRJLN', 'MATRJL': 'MATRJL', 'MEDRJL': 'MEDRJL', 'SPCRJL': 'SPCRJL', 'STARJL': 'STARJL', 'TOLRJL': 'TOLRJL', 'UTKRJL': 'UTKRJL', 'VLCPRT': 'VLCPRT', 'WLYRJL': 'WLYRJL', 'TGL_SK': 'TGL_SK', 'JLNLYG': 'JLNLYG', 'KLSRJL': 'KLSRJL', 'SHAPE_Length': 'SHAPE_Length', 'networkGrp': 'networkGrp', });
lyr_Jangkauan1500meter_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KODEBP': 'KODEBP', 'STSPML': 'STSPML', 'JJGPDF': 'JJGPDF', 'JLPDDK': 'JLPDDK', 'JNSPDK': 'JNSPDK', 'FGDPDK': 'FGDPDK', 'type': 'type', 'start': 'start', });
lyr_PerguruanTinggi_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Nama Perguruan Tinggi': 'Nama Perguruan Tinggi', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KODEBP': 'KODEBP', 'STSPML': 'STSPML', 'JJGPDF': 'JJGPDF', 'JLPDDK': 'JLPDDK', 'JNSPDK': 'JNSPDK', 'FGDPDK': 'FGDPDK', 'Foto': 'Foto', });
lyr_Jalan_1.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'OBJECTID': 'Range', 'Nama Jalan': '', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'ARHRJL': 'Range', 'AUTRJL': 'Range', 'FGSRJL': 'Range', 'JARRJL': 'Range', 'JPARJL': 'Range', 'KLLRJL': 'TextEdit', 'KONRJL': 'Range', 'KPMSTR': 'TextEdit', 'LKONOF': 'TextEdit', 'LKSBSP': 'TextEdit', 'LKSRTA': 'TextEdit', 'LLHRRT': 'TextEdit', 'LOCRJL': 'Range', 'LBRBHJ': 'TextEdit', 'LBRJLN': 'TextEdit', 'MATRJL': 'Range', 'MEDRJL': 'Range', 'SPCRJL': 'Range', 'STARJL': 'Range', 'TOLRJL': 'Range', 'UTKRJL': 'Range', 'VLCPRT': 'TextEdit', 'WLYRJL': 'Range', 'TGL_SK': 'DateTime', 'JLNLYG': 'Range', 'KLSRJL': 'Range', 'SHAPE_Length': 'TextEdit', 'networkGrp': 'Range', });
lyr_Jangkauan1500meter_2.set('fieldImages', {'fid': '', 'OBJECTID': '', 'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'KODEBP': '', 'STSPML': '', 'JJGPDF': '', 'JLPDDK': '', 'JNSPDK': '', 'FGDPDK': '', 'type': '', 'start': '', });
lyr_PerguruanTinggi_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'Nama Perguruan Tinggi': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KODEBP': 'Range', 'STSPML': 'Range', 'JJGPDF': 'Range', 'JLPDDK': 'Range', 'JNSPDK': 'Range', 'FGDPDK': 'Range', 'Foto': 'ExternalResource', });
lyr_Jalan_1.set('fieldLabels', {'fid': 'hidden field', 'cat': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'ARHRJL': 'hidden field', 'AUTRJL': 'hidden field', 'FGSRJL': 'hidden field', 'JARRJL': 'hidden field', 'JPARJL': 'hidden field', 'KLLRJL': 'hidden field', 'KONRJL': 'hidden field', 'KPMSTR': 'hidden field', 'LKONOF': 'hidden field', 'LKSBSP': 'hidden field', 'LKSRTA': 'hidden field', 'LLHRRT': 'hidden field', 'LOCRJL': 'hidden field', 'LBRBHJ': 'hidden field', 'LBRJLN': 'hidden field', 'MATRJL': 'hidden field', 'MEDRJL': 'hidden field', 'SPCRJL': 'hidden field', 'STARJL': 'hidden field', 'TOLRJL': 'hidden field', 'UTKRJL': 'hidden field', 'VLCPRT': 'hidden field', 'WLYRJL': 'hidden field', 'TGL_SK': 'hidden field', 'JLNLYG': 'hidden field', 'KLSRJL': 'hidden field', 'SHAPE_Length': 'hidden field', 'networkGrp': 'hidden field', });
lyr_Jangkauan1500meter_2.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KODEBP': 'hidden field', 'STSPML': 'hidden field', 'JJGPDF': 'hidden field', 'JLPDDK': 'hidden field', 'JNSPDK': 'hidden field', 'FGDPDK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', });
lyr_PerguruanTinggi_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'Nama Perguruan Tinggi': 'inline label - always visible', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KODEBP': 'hidden field', 'STSPML': 'hidden field', 'JJGPDF': 'hidden field', 'JLPDDK': 'hidden field', 'JNSPDK': 'hidden field', 'FGDPDK': 'hidden field', 'Foto': 'no label', });
lyr_PerguruanTinggi_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});