import React,{useEffect, useState} from 'react'
import { MapContainer, TileLayer,Popup,Marker } from 'react-leaflet'
import AddressDetails from './component/addressDetails'
import L from 'leaflet'
import Search from './component/Search'
const App = () => {
  const [data,setData]= useState({})
  const position = [51.505, -0.09]
  console.log(data)
  const FetchData = async()=>{
    const data = await fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_KWwjqZeeTYfngJe80TviEjdIR9SH6&ipAddress=1.1.1.1')
    const response = await data.json()
    setData(response)
  
  }
  useEffect(()=>{
    FetchData()
  },[])
  return (
    <div className='h-screen flex flex-col '>
      <AddressDetails data={data} />
      <Search />

      <div className=' hero h-1/3 w-full '>
        
      </div>
      <div className='leaflet-container relative'>
      <MapContainer center={position}  zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker  position={position} >
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
      </div>
    </div>
  )
}
let DefaultIcon = L.icon({
  iconUrl: "/marker-icon.png",
});
L.Marker.prototype.options.icon = DefaultIcon;

export default App