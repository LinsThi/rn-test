import React from "react";
import { render } from "@testing-library/react-native";
import { Ionicons } from "@expo/vector-icons";

import { Header } from "../../components/Header";

test("check if show correctly search input placeholder in Header component", () => {
  const { getByPlaceholderText } = render(<Header />);

  const inputName = getByPlaceholderText("Search for a name");

  expect(inputName.props.placeholder).toBeTruthy();
});

test("checking the value of the input based on the testid", () => {
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
