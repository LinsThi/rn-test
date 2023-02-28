import React from "react";

import { render, fireEvent } from "@testing-library/react-native";
import { FloatingMenu } from "../../components/FloatingMenu";
import { ListToAdd } from "../../mock/dataAdding";

jest.useFakeTimers();

describe("FloatingMenuComponent", () => {
  it("must remove an element", () => {
    const { getByTestId } = render(
      <FloatingMenu functionAddList={() => null} />
    );

    const buttonId = getByTestId("id-floating-button");

    const lengthListBefore = ListToAdd.length;
    fireEvent(buttonId, "press");
    const lengthListAfter = ListToAdd.length;

    expect(lengthListAfter).toBe(lengthListBefore - 1);
  });
});
