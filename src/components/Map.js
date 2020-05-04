import React, { useEffect, useRef, useReducer } from 'react';
import mapboxgl from 'mapbox-gl';
import StyledMap from '../styled/StyledMap';
import { MAP_GL } from '../constants/access';

const initalState = {
    lat: 9.0820,
    lng: 8.6753,
    zoom: 2.5,
}

const actionTypes = {
    ON_MOVE:'ON_MOVE'
}
const Map = ()=>{
    const mapContainer = useRef(null);
    const [state,dispatch] = useReducer((state,action)=>{
        switch(action.type){
            case actionTypes.ON_MOVE:
                return {
                    ...state,
                    ...action.payload
                }
            default:
                return state;
        }
    },initalState)

    useEffect(()=>{
        mapboxgl.accessToken = MAP_GL;
        const { lat,lng,zoom } = state;
        
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/samuel-felix/ck9rfykby4y7l1ilco3owwcm5',
            center: [lat,lng],
            zoom: zoom
        });


        map.addControl(new mapboxgl.NavigationControl());


        map.on('load', function() {
            // Add a source for the state polygons.
            map.addSource('states', {
                'type': 'geojson',
                'data':
                'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_110m_admin_1_states_provinces_shp.geojson'
            });
                
            // Add a layer showing the state polygons.
            
                
            // When a click event occurs on a feature in the states layer, open a popup at the
            // location of the click, with description HTML from its properties.
            map.on('mouseenter', 'africa', function(e) {
                new mapboxgl.Popup()
                    .setLngLat(e.lngLat)
                    .setHTML(e.features[0].properties.name)
                    .addTo(map);
            });
                
            // Change the cursor to a pointer when the mouse is over the states layer.
            map.on('mouseenter', 'africa', function() {
                map.getCanvas().style.cursor = 'pointer';
            });
                
            // Change it back to a pointer when it leaves.
            map.on('mouseleave', 'africa', function() {
                map.getCanvas().style.cursor = '';
            });

        
        })
    })
    return (
        <StyledMap>
            <div ref = {mapContainer}>

            </div>
        </StyledMap>
    );
}

export default Map;