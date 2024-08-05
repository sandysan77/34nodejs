app.get('/rooms', (req, res) => {
    const data = readData();

    const roomsWithBookings = data.rooms.map(room => {
        const bookings = data.bookings.filter(booking => booking.roomId === room.id);
        return { ...room, bookings };
    });

    res.json(roomsWithBookings);
});
