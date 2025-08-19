describe("Booking API tests", () => {
  const baseUrl = "https://restful-booker.herokuapp.com/booking";
  let bookingId;

  it("CREATE new booking", () => {
    const newBooking = {
      firstname: "kokos",
      lastname: "hu",
      totalprice: 150,
      depositpaid: true,
      bookingdates: {
        checkin: "2025-08-15",
        checkout: "2025-08-20",
      },
      additionalneeds: "Breakfast",
    };

    cy.request("POST", baseUrl, newBooking).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.bookingid).to.exist;
      bookingId = response.body.bookingid;
      expect(response.body.bookingid).to.be.a("number");
      cy.log(`Booking ID je: ${response.body.bookingid}`);
      cy.log(`First name je: ${response.body.booking.firstname}`);
      expect(response.body.booking.firstname).to.be.a("string");
    });

    cy.request({
      method: "GET",
      url: `https://restful-booker.herokuapp.com/booking/${newBookingId}`,
    }).then((getRes) => {
      expect(getRes.status).to.eq(200);
      cy.log(`Firstname: ${getRes.body.firstname}`);

      // Assert na jméno
      expect(getRes.body.firstname).to.eq(newBooking.firstname);
    });
  });

  it("UPDATE existing booking", () => {
    const updatedBooking = {
      firstname: "Jane",
      lastname: "Doe",
      totalprice: 180,
      depositpaid: false,
      bookingdates: {
        checkin: "2025-08-16",
        checkout: "2025-08-22",
      },
      additionalneeds: "Lunch",
    };
    cy.request({
      method: "PUT",
      url: `${baseUrl}/${bookingId}`,
      body: updatedBooking,
      auth: {
        user: "admin",
        pass: "password123",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.firstname).to.eq("Jane");
    });
  });
});
