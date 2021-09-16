
export default class ActivitiesWsApi {
  getActivities(token, setActivities) {
    const socket = new WebSocket(`${process.env.REACT_APP_WS_API_URL}/updates?q=activities`);
    socket.onopen = (e) => {
      console.log("Connection established");
      socket.send(JSON.stringify(token));
    };
  
    socket.onmessage = (event) => {
      const stringfiedActivities = event.data;
      const hotelRooms = JSON.parse(stringfiedActivities);
      setActivities(hotelRooms);
    };
  }
}
  
