import { render } from "@redwoodjs/testing";

import ChromeLayout from "./ChromeLayout";

describe("ChromeLayout", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ChromeLayout />);
    }).not.toThrow();
  });
});
