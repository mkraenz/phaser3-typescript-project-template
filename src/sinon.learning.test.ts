// tslint:disable:no-unused-expression

import * as chai from "chai";
import * as sinon from "sinon";
import sinonChai = require("sinon-chai");
chai.use(sinonChai);
const expect = chai.expect;

describe("sinon", () => {
    it("works with sinon-chai", () => {
        const obj = { aMethod: (arg: string) => `your input was ${arg}` };
        obj.aMethod = sinon.spy();

        obj.aMethod("a parameter");

        expect(obj.aMethod).to.have.been.calledOnce;
        expect(obj.aMethod).to.have.been.calledWith("a parameter");
    });
});
