app.get('/customers', (req, res) => {
    const data = readData();

    const customersWithBookings = data.bookings.map(booking => ({
        customerName: booking.customerName,
        roomId: booking.roomId,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime
    }));

    res.json(customersWithBookings);
});
