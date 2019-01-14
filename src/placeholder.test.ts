// tslint:disable:no-unused-expression

import { expect } from "chai";
import { getNumber3 } from "./placeholder";

describe("placeholder", () => {
    it("succeeds", () => {
        expect(true).to.be.true;
    });

    it("getNumber3() returns 3", () => {
        expect(getNumber3()).to.equal(3);
    });
});
