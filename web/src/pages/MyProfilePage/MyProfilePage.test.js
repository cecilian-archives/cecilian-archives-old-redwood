import { render } from "@redwoodjs/testing";

import MyProfilePage from "./MyProfilePage";

describe("MyProfilePage", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<MyProfilePage />);
    }).not.toThrow();
  });
});
