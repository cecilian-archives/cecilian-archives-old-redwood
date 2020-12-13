import { render } from "@redwoodjs/testing";

import ResponsiveTabs from "./ResponsiveTabs";

describe("ResponsiveTabs", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ResponsiveTabs />);
    }).not.toThrow();
  });
});
