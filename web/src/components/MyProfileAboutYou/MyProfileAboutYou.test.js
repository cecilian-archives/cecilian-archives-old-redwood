import { render } from "@redwoodjs/testing";

import MyProfileAboutYou from "./MyProfileAboutYou";

describe("MyProfileAboutYou", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MyProfileAboutYou />);
    }).not.toThrow();
  });
});
