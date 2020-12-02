import { render } from "@redwoodjs/testing";

import LoadingToast from "./LoadingToast";

describe("LoadingToast", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<LoadingToast />);
    }).not.toThrow();
  });
});
