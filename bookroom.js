app.post('/bookings', (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const data = readData();

    // Check if room is already booked for the given date and time
    const isBooked = data.bookings.some(booking =>
        booking.roomId === roomId && booking.date === date &&
        ((booking.startTime <= startTime && booking.endTime > startTime) ||
         (booking.startTime < endTime && booking.endTime >= endTime) ||
         (booking.startTime >= startTime && booking.endTime <= endTime))
    );

    if (isBooked) {
        return res.status(400).json({ message: 'Room is already booked for the given date and time' });
    }

    const newBooking = {
        id: data.bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId
    };

    data.bookings.push(newBooking);
    writeData(data);

    res.status(201).json(newBooking);
});
