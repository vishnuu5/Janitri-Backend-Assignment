const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");
const User = require("../models/user.model"); 

beforeAll(async () => {
  await User.deleteMany({ email: "test@example.com" });
});

afterAll(async () => {
  await mongoose.connection.close(); 
});

describe("Auth API Tests", () => {
  it("should register a new user", async () => {
    const response = await request(app).post("/api/auth/register").send({
      name: "Vishnu",
      email: "test@example.com",
      password: "password123"
    });

    console.log("Register Response:", response.status, response.body); 
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("user");
  });

  it("should fail login with incorrect credentials", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "wrong@example.com",
      password: "wrongpassword",
    });
    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);
  });
});
