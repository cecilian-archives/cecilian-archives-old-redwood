import { render } from "@redwoodjs/testing";

import TagInputBase from "./TagInputBase";

describe("TagInputBase", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<TagInputBase />);
    }).not.toThrow();
  });
});
