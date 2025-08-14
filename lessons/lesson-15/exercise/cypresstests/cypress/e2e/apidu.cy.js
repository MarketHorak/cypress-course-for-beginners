// describe("API", () => {
//   it("should GET article detail by id", () => {
//     const articleDetailId = 1;

//     cy.request({
//       method: "GET",
//       url: "http://localhost:3000/api/articles/1",
//     }).then((res) => {
//       expect(res.status).to.eq(200);
//       expect(res.body).to.be.an("object");
//       cy.log(`Title: ${res.body.title}`);
//       expect(res.body).to.have.property("title").that.is.a("string");
//     });
//   });
// });

describe("Articles API", () => {
  it("updates article title and verifies it", () => {
    const id = 1;
    const newTitle = `Updated ${Date.now()} moje zmena`;
    const newContent = `Updated content ${Date.now()} tohle je dalsi obsah`;

    // 1) GET seznam (kontrola, že endpoint běží)
    cy.request("GET", "http://localhost:3000/api/articles").then((listRes) => {
      expect(listRes.status).to.eq(200);
      expect(listRes.body).to.be.an("array").and.not.be.empty;
    });

    // 2) PUT update titulu u /articles/:id
    cy.request({
      method: "PUT",
      url: `http://localhost:3000/api/articles/${id}`,
      headers: { "Content-Type": "application/json" },
      body: { title: newTitle, content: newContent },
    }).then((putRes) => {
      expect(putRes.status).to.eq(200);
      expect(putRes.body).to.be.an("object");
      expect(putRes.body).to.have.property("id", id);
      expect(putRes.body).to.have.property("title", newTitle);
      expect(putRes.body).to.have.property("content", newContent);

      // 3) Ověření nového titulu přes GET detail
      cy.request("GET", `http://localhost:3000/api/articles/${id}`).then(
        (getRes) => {
          expect(getRes.status).to.eq(200);
          expect(getRes.body.title).to.eq(newTitle);
          expect(getRes.body.content).to.eq(newContent);

          cy.log(newTitle);
          cy.log(newContent);

          cy.log(`Title ověřen: ${getRes.body.title}`);
        }
      );
    });
  });
});

// --------------------------------------------POZOR ----verze funkcni predtim !!!!!!!!!!!!!!!!!!!!!!!!!! -------------------------

// it("updates article title and verifies it", () => {
//   const id = 1;
//   const newTitle = `Updated title ${Date.now()}`;

//   // GET – vezmu si původní title (na revert)
//   cy.request("GET", `http://localhost:3000/api/articles/${id}`).then(
//     (getRes) => {
//       const oldTitle = getRes.body.title;

//       // PUT/PATCH – změna titulu
//       cy.request({
//         method: "PUT", // nebo "PATCH" dle handleru
//         url: `http://localhost:3000/api/articles/${id}`,
//         headers: { "Content-Type": "application/json" },
//         body: { title: newTitle },
//       }).then((putRes) => {
//         expect(putRes.status).to.eq(200);
//         expect(putRes.body.title).to.eq(newTitle);

//         // ověřený GET
//         cy.request("GET", `http://localhost:3000/api/articles/${id}`).then(
//           (verifyRes) => {
//             expect(verifyRes.status).to.eq(200);
//             expect(verifyRes.body.title).to.eq(newTitle);
//           }
//         );
//       });
//     }
//   );
// });
