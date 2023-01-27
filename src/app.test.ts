import { test } from "tap";
import build from "./app";

test("GET /", async (t) => {
  const app = build();

  const response = await app.inject({
    method: "GET",
    url: "/",
  });

  t.equal(response.statusCode, 200, "returns a status code of 200");
  t.equal(
    response.payload,
    '{"hello":"world"}',
    "returns a payload of hello world"
  );
});
