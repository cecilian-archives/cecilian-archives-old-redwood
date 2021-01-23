import { render } from "@redwoodjs/testing";

import Tag from "./Tag";

describe("Tag", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<Tag />);
    }).not.toThrow();
  });
});
