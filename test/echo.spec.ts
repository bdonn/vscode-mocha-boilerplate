import { expect } from "chai";
import { Echo, FOO, BAR } from "@src/echo";

describe("EchoTest", () => {
  const e = new Echo();

  it("echo", async () => {
    // [GIVEN]
    const msg = FOO;

    // [WHEN]
    const result = await e.echo(msg);

    // [THEN]
    expect(result).to.equal(msg);
  });

  it("flip", async () => {
    // [GIVEN]
    const msg = FOO;

    // [WHEN]
    const result = await e.flip(msg);

    // [THEN]
    expect(result).to.equal(BAR);
  });
});
