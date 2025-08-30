describe("My First Test", () => {
  it("Does not do much!", () => {
    //    cy.visit("https://example.cypress.io");
    cy.visit("https://www.saucedemo.com/");
    const users = [
      { name: "Alice", email: "alice@example.com", role: "admin" },
      { name: "Bob", email: "bob@example.com", role: "user" },
      { name: "Charlie", email: "charlie@example.com", role: "user" },
      { name: "Dave", email: "dave@example.com", role: "moderator" },
    ];
    const emails = users.map((user) => user.email);
    const admins = users.filter((user) => user.role === "admin");
    const totalUsers = users.reduce((count) => count + 1, 0);
    console.log(emails);
    console.log(admins);
    console.log(totalUsers);

    const userProfile = {
      name: "Alice",
      email: "alice@example.com",
      address: {
        street: "123 Main St",
        city: "Townsville",
        zip: "12345",
      },
    };
    // Přístup k vnořeným vlastnostem:
    console.log(userProfile.address.city);
    cy.log(`City: ${userProfile.address.city}`); // stejny zapis
    cy.log("City: " + userProfile.address.city); // stejny zapis
  });
});
