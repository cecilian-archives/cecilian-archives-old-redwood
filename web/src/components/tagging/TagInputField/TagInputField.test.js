import { render } from "@redwoodjs/testing";

import TagInputField from "./TagInputField";

describe("TagInputField", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<TagInputField />);
    }).not.toThrow();
  });
});
