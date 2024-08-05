app.post('/rooms', (req, res) => {
    const { name, amenities, pricePerHour, seatsAvailable } = req.body;
    const data = readData();

    const newRoom = {
        id: data.rooms.length + 1,
        name,
        amenities,
        pricePerHour,
        seatsAvailable
    };

    data.rooms.push(newRoom);
    writeData(data);

    res.status(201).json(newRoom);
});
