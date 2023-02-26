import React from "react";
import { render } from "@testing-library/react-native";

import { Header } from "../../components/Header";

describe("HeaderComponent", () => {
  it("should have placeholder correctly input search", () => {
    const { getByPlaceholderText } = render(<Header />);

    const inputName = getByPlaceholderText("Search for a name");

    expect(inputName.props.placeholder).toBeTruthy();
  });

  it("should have the base value", () => {
    const { getByTestId } = render(<Header />);

    const inputId = getByTestId("id-search");

    expect(inputId.props.value).toEqual("");
  });

  /**  Wrong Tests
   *
   * test("check if show correctly search input placeholder in Header component", () => {
   *
   * const { getByPlaceholderText } = render(<Header />);
   *
   * const inputName = getByPlaceholderText("Incorect");
   *
   * expect(inputName).toBeTruthy();
   * });
   *
   *  */
});
