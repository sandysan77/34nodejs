//1.
POST http://localhost:3000/rooms
Body: {
    "name": "Conference Room C",
    "amenities": ["Whiteboard", "Wi-Fi"],
    "pricePerHour": 30,
    "seatsAvailable": 10
}
//2.
POST http://localhost:3000/bookings
Body: {
    "customerName": "Bob Brown",
    "date": "2024-08-03",
    "startTime": "10:00",
    "endTime": "12:00",
    "roomId": 1
}
//3.
GET http://localhost:3000/rooms
//4.
GET http://localhost:3000/customers
//5.
GET http://localhost:3000/bookings/customer/John%20Doe
