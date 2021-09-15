
export default class RoomApi {
  getHotelRooms(hotelId, setHotelRooms) {
    const socket = new WebSocket(`ws://localhost:4000/updates?q=rooms/${hotelId}`);
    socket.onopen = (e) => {
      console.log("[open] Connection established");
    };

    socket.onmessage = (event) => {
      const stringfiedHotelRooms = event.data;
      const hotelRooms = JSON.parse(stringfiedHotelRooms);
      setHotelRooms(hotelRooms);
    };
  }
}
