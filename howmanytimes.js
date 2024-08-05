app.get('/bookings/customer/:customerName', (req, res) => {
    const { customerName } = req.params;
    const data = readData();

    const customerBookings = data.bookings.filter(booking => booking.customerName === customerName);
    
    res.json({ count: customerBookings.length, bookings: customerBookings });
});
