import React from "react";
  import { render } from "@testing-library/react";
  
  import ThemeToggle from "./ThemeToggle";
  import { ThemeToggleProps } from "./ThemeToggle.types";
  
  describe("Test Component", () => {
    let props: ThemeToggleProps;
  
    beforeEach(() => {
      props = {
      };
    });
  
    const renderComponent = () => render(<ThemeToggle {...props} />);
  
    it("should render foo text correctly", () => {
      const { getByTestId } = renderComponent();
  
      const component = getByTestId("ThemeToggle");
  
      expect(component).toHaveTextContent("Nothing");
    });
  });
  
  //TODO ADD Test cases
