
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Popup, Marker,useMap } from 'react-leaflet';
import AddressDetails from './component/addressDetails';
import L from 'leaflet';
import Search from './component/Search';

const DEFAULT_POSITION = [61.21785, -149.88657 ]; // default position for the map
function LocationMarker(e) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(e.position, e.zoom);
  });
}

const App = () => {
  const [data, setData] = useState({});
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('216.58.194.174');
  const local = data.location;

  const [position, setPosition] = useState(DEFAULT_POSITION);

  const InputHalndeler = (e) => {
    setInput(e.target.value);
  };

  const Searchfunction = (e) => {
    e.preventDefault();
    setSearch(input);
    setInput('');
  };

  const FetchData = async () => {
    const data = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_8la7dz6w8qBoFDbogD3xXNBZBm7vL&ipAddress=${search}`);
    const response = await data.json();
    setData(response);
  };

  useEffect(() => {
    FetchData();
  }, [search]);

  useEffect(() => {
    if (data.location) {
      setPosition([data.location.lat, data.location.lng]);
      console.log(position)
    }
  }, [data]);
 
 

  return (
    <div className='h-screen flex flex-col font-Rubik '>
      <AddressDetails data={data} />
      <Search Searchfunction={Searchfunction} setSearch={setSearch} InputHalndeler={InputHalndeler} setInput={setInput} input={input} />

      <div className='hero h-1/3 w-full'></div>
      <div className='leaflet-container relative'>
      {
        local &&   <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {local && <Marker position={ position}>
          <Popup>A pretty CSS3 popup. &lt;br /&gt; Easily customizable.</Popup>
        </Marker>}
          {
            local && <LocationMarker position={position} zoom={13} />
          }

      </MapContainer>
      }
      </div>
    </div>
  );
};

let DefaultIcon = L.icon({
  iconUrl: '/marker-icon.png',
});

L.Marker.prototype.options.icon = DefaultIcon;

export default App;

