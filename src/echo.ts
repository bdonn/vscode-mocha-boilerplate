export const FOO = "foo";
export const BAR = "bar";

export type Msg = typeof FOO | typeof BAR;

export class Echo {
  async echo(msg: Msg) {
    return msg;
  }

  async flip(msg: Msg) {
    if (msg === FOO) {
      return BAR;
    }
    if (msg === BAR) {
      return FOO;
    }
  }
}
