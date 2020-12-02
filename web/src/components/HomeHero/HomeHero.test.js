import { render } from "@redwoodjs/testing";

import HomeHero from "./HomeHero";

describe("HomeHero", () => {
  it("renders successfully", () => {
    expect(() => {
      render(<HomeHero />);
    }).not.toThrow();
  });
});
