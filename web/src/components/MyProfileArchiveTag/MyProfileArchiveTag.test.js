import { render } from "@redwoodjs/testing";

import MyProfileArchiveTag from "./MyProfileArchiveTag";

describe("MyProfileArchiveTag", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MyProfileArchiveTag />);
    }).not.toThrow();
  });
});
