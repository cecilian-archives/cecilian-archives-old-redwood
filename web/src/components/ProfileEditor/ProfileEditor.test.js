import { render } from "@redwoodjs/testing";

import ProfileEditor from "./ProfileEditor";

describe("ProfileEditor", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<ProfileEditor />);
    }).not.toThrow();
  });
});
