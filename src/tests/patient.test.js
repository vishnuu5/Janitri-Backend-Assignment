const request = require("supertest");
const app = require("../app");

describe("Patient API Tests", () => {
  it("should create a new patient", async () => {
    const res = await request(app).post("/api/patients").send({
      userId: "60f7b0f5a1d3c84b1c8d5e92",
      name: "Alice",
      age: 30,
      gender: "Female",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should return 404 for a non-existent patient", async () => {
    const res = await request(app).get("/api/patients/invalidID");
    expect(res.statusCode).toBe(500);
    expect(res.body.success).toBe(false);
  });
});
