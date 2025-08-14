/////////////// ------------ 1 ------------- jiny zapis stejne jako 2...

// describe("api ", () => {
//   it("get list users", () => {
//     cy.request("GET", "http://localhost:3000/api/users").then((response) => {
//         cy.log(JSON.stringify(odpoved));
//       expect(response.status).to.eq(200);
//         expect(response.body).to.not.be.null;
//         expect(response.body[0].id).to.eq(1);
//         expect(response.body[0].name).to.eq("User One");
//     });
//   });
// });

describe("api ", () => {
  it("get list articl", () => {
    cy.request("GET", "http://localhost:3000/api/articles/").then(
      (response) => {
        //   cy.log(JSON.stringify(odpoved));
        expect(response.body).to.be.an("array");
        expect(response.status).to.eq(200);
        expect(response.body)
          .to.be.an("array")
          .and.to.have.length.greaterThan(0);
        expect(response.body[0]).to.have.property("id").that.is.a("number");
        expect(response.body[0]).to.have.property("title").that.is.a("string");
      }
    );
  });
});

describe("API", () => {
  it("should GET article detail by id", () => {
    const articleDetailId = 1;

    cy.request({
      method: "GET",
      url: "http://localhost:3000/api/articles/1",
    }).then((res) => {
      // status
      expect(res.status).to.eq(200);

      // očekáváme objekt (detail)
      expect(res.body).to.be.an("object");
      expect(res.body).to.have.property("id", articleDetailId);
      expect(res.body).to.have.property("title").that.is.a("string");
      expect(res.body).to.have.property("content").that.is.a("string");
      cy.log(`Title: ${res.body.title}`);
    });
  });
});

describe("API", () => {
  it("should GET article detail by id", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/api/login",
      body: { name: "admin", password: "pass" },
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      // log odpovedi
      //   cy.log(JSON.stringify(response));

      expect(response.status).to.eq(200);
      expect(response.body).not.to.be.null;
      expect(response.body).to.have.property("token");
    });
  });
});

// describe("api ", () => {
//   it("get detajl articl", () => {
//     cy.request("GET", "http://localhost:3000/api/articles/1").then(
//       (detailResponse) => {
//         cy.log(JSON.stringify(detailResponse));
//         expect(detailResponse.body).to.be.an("array");
//         //   cy.log(JSON.stringify(odpoved));
//         // expect(detailResponse.body).to.be.an("array");
//         // expect(detailResponse.status).to.eq(200);
//         expect(detailResponse.body).to.have.property("id", articleDetailId);
//       }
//     );
//   });
// });

// describe("API articles", () => {
//   it("should GET list of articles", () => {
//     cy.request({
//       method: "GET",
//       url: `${Cypress.env("apiUrl")}/articles`,
//     }).then((response) => {
//       cy.log(JSON.stringify(response));

//       // Základní kontrola odpovědi
//       expect(response.status).to.eq(200);
//       expect(response.body).to.be.an("array");
//       expect(response.body.length).to.be.greaterThan(0);
//     });
//   });
// });

/////////////// ------------ nebo takhle ------------- jiny zapis stejne jako 1...
//     cy.request({
//       method: "GET",
//       url: "http://localhost:3000/api/users",
//     }).then((response) => {});
//   });
// });

// describe('API super tests', () => {
//   it('should GET list of users', () => {
//     pivo({
//       model: "dsadasda",
//       znacka: "dsadsa",
//       cena: "dsadas"
//     });
//   });
// });

// function pivo({ znacka, model, cena }: { znacka: string; model: string; cena: string }) {
//   // TODO: Implementace funkce
// }
