describe("Booking API tests", () => {
  const baseUrl = "https://restful-booker.herokuapp.com/booking";

  it("CREATE new booking and GET it by ID", () => {
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

    return cy
      .request("POST", baseUrl, newBooking)
      .then((createRes) => {
        expect(createRes.status).to.eq(200);
        expect(createRes.body).to.have.property("bookingid");
        expect(createRes.body.bookingid).to.be.a("number");

        const bookingId = createRes.body.bookingid;
        cy.log(`Booking ID je: ${bookingId}`);
        cy.log(`First name (z create): ${createRes.body.booking.firstname}`);
        expect(createRes.body.booking.firstname).to.be.a("string");

        return cy.request({
          method: "GET",
          url: `${baseUrl}/${bookingId}`,
        });
      })
      .then((getRes) => {
        expect(getRes.status).to.eq(200);
        cy.log(`Firstname : ${getRes.body.firstname}`);

        expect(getRes.body.firstname).to.eq("kokos");
        expect(getRes.body.lastname).to.eq("hu");
        expect(getRes.body.totalprice).to.eq(150);
        expect(getRes.body.depositpaid).to.eq(true);
        expect(getRes.body.bookingdates.checkin).to.eq("2025-08-15");
        expect(getRes.body.bookingdates.checkout).to.eq("2025-08-20");
      });
  });

  it("GET booking by ID", () => {
    cy.request({
      method: "GET",
      url: baseUrl,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").and.have.length.greaterThan(0);

      const bookingId = response.body[1].bookingid;
      cy.log(`Vybraný booking ID: ${bookingId}`);

      cy.request({
        method: "GET",
        url: `${baseUrl}/${bookingId}`,
        headers: { "Content-Type": "application/json" },
      }).then((bookingResponse) => {
        expect(bookingResponse.status).to.eq(200);
        expect(bookingResponse.body).to.have.property("firstname");
        expect(bookingResponse.body).to.have.property("lastname");

        cy.log(`Firstname: ${bookingResponse.body.firstname}`);
        cy.log(`Lastname: ${bookingResponse.body.lastname}`);
      });
    });
  });

  it("UPDATE existing booking", () => {
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

    cy.request("POST", baseUrl, newBooking).then((createRes) => {
      const bookingId = createRes.body.bookingid;

      const updatedBooking = {
        ...newBooking,
        firstname: "tohle jmeno blee",
      };

      cy.request({
        method: "PUT",
        url: `${baseUrl}/${bookingId}`,
        body: updatedBooking,
        auth: {
          user: "admin",
          pass: "password123",
        },
        headers: { "Content-Type": "application/json" },
      }).then((putRes) => {
        expect(putRes.status).to.eq(200);
        expect(putRes.body.firstname).to.eq("tohle jmeno blee");
        cy.log(`Po updatu je firstname: ${putRes.body.firstname}`);
        cy.log(JSON.stringify(putRes.body));
      });
    });
  });
});
