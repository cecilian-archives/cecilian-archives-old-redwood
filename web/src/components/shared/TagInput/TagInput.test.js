import { render } from "@redwoodjs/testing";

import TagInput from "./TagInput";

describe("TagInput", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<TagInput />);
    }).not.toThrow();
  });
});
