
export default class RoomApi {
  getHotelRooms(hotelId, token, setHotelRooms) {
    const socket = new WebSocket(`${process.env.REACT_APP_WS_API_URL}/updates?q=rooms/${hotelId}`);
    socket.onopen = (e) => {
      console.log("Connection established");
      socket.send(JSON.stringify(token));
    };

    socket.onmessage = (event) => {
      const stringfiedHotelRooms = event.data;
      const hotelRooms = JSON.parse(stringfiedHotelRooms);
      setHotelRooms(hotelRooms);
    };
  }
}
