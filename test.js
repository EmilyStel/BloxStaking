import { expect } from "chai";
import { schemas } from "./schema";
import axios from "axios";
import { BASE_ROUTE } from "./const";

describe("Get operator", function () {
  it("Should return operator object with valid fields types", async () => {
    const operatorIds = [1, 2, 3, 4];

    await Promise.all(
      operatorIds.map(async (id) => {
        const res = await axios.get(`${BASE_ROUTE}operators/${id}/?`);
        let result = schemas.operator.parse(res.data);
        expect(result).to.deep.equal(
          res.data,
          `Returned invalid data for operator with id: ${id}`
        );
      })
    );
  });
  it("Should return validator object with valid fields types", async () => {
    const validatorIds = [
      "8da5902943b3d0346a5b6e169b8394b90c3f5ca32bc687f102d977082e7e29d5a5782601956a49f0ef169a6128d80838",
      "85c01bdf47745c94c1e93e92575133c757a419c91546d681902d50b94dde97f7d3fc0323337f791283762026e0ba4b17",
    ];

    await Promise.all(
      validatorIds.map(async (id) => {
        const res = await axios.get(`${BASE_ROUTE}validators/${id}/?`);
        let result = schemas.validator.parse(res.data);
        expect(result).to.deep.equal(
          res.data,
          `Returned invalid data for validator with id: ${id}`
        );
      })
    );
  });
});
