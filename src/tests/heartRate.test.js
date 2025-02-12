const request = require("supertest");
const app = require("../app");

describe("Heart Rate API Tests", () => {
  it("should record heart rate", async () => {
    const res = await request(app).post("/api/heart-rates").send({
      patientId: "60f7b0f5a1d3c84b1c8d5e92",
      bpm: 80,
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
  });

  it("should retrieve heart rate data", async () => {
    const res = await request(app).get("/api/heart-rates/60f7b0f5a1d3c84b1c8d5e92");
    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);
  });
});
