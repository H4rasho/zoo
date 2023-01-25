import { test } from "tap";
import build from "../app";
import { Animal } from "./model";

const animalToCreate = {
  name: "Arima hijo",
  age: 2,
  specieId: "68d1d33c-277b-4af0-956c-e359f25c3daa",
  createdAt: "2023-01-22T21:39:44.630Z",
  updatedAt: "2023-01-22T21:39:44.630Z",
};

const animalToUpdate = {
  name: "Arima hijo update",
};

test("GET /animals", async (t) => {
  const app = build();
  const response = await app.inject({
    method: "GET",
    url: "/animals",
  });

  t.before(async () => {
    await Animal.destroy({ truncate: true, cascade: true });
    await Animal.create(animalToCreate);
  });

  t.equal(response.statusCode, 200);

  t.end();
});

test("POST /animals", async (t) => {
  const app = build();
  const response = await app.inject({
    method: "POST",
    url: "/animals",
    payload: animalToCreate,
  });

  t.before(async () => {
    await Animal.destroy({ truncate: true, cascade: true });
  });

  t.equal(response.statusCode, 201, "Should return 201 created");

  t.end();
});

test("PUT /animals/:id", async (t) => {
  const app = build();
  const response = await app.inject({
    method: "PUT",
    url: "/animals/4e73b0ad-c71b-43ec-a30f-a7ccde109c1f",
    payload: animalToUpdate,
  });

  t.before(async () => {
    await Animal.destroy({ truncate: true, cascade: true });
    await Animal.create({
      id: "4e73b0ad-c71b-43ec-a30f-a7ccde109c1f",
      ...animalToCreate,
    });
  });

  t.equal(response.statusCode, 200, "Should return 200 updated");

  t.end();
});

test("DELETE /animals/:id", async (t) => {
  const app = build();
  const response = await app.inject({
    method: "DELETE",
    url: "/animals/d3f3f33e-2a23-46b9-85c8-1ea3288b38e9",
  });

  t.before(async () => {
    await Animal.destroy({ truncate: true, cascade: true });
    await Animal.create({
      id: "d3f3f33e-2a23-46b9-85c8-1ea3288b38e9",
      ...animalToCreate,
    });
  });

  t.equal(response.statusCode, 200, "Should return 200 deleted");

  t.end();
});
