import { render } from "@redwoodjs/testing";

import PageLayout from "./PageLayout";

describe("PageLayout", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<PageLayout />);
    }).not.toThrow();
  });
});
