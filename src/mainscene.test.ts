import { expect } from "chai";
import { MainScene } from "./scenes/mainScene";

it("mainscene", () => {
    expect(() => new MainScene()).to.not.throw();
});
