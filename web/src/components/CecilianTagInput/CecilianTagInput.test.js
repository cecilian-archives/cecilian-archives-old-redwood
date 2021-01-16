import { render } from "@redwoodjs/testing";

import CecilianTagInput from "./CecilianTagInput";

describe("CecilianTagInput", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<CecilianTagInput />);
    }).not.toThrow();
  });
});
