import React from "react";
import { render } from "@testing-library/react-native";
import { ListPeoples } from "../../components/ListPeoples";
import { DataResult } from "../../mock/dataResult";

describe("ListPeoplesComponent", () => {
  it("should be rendered the whole array", () => {
    const { getByTestId } = render(<ListPeoples dataFlatList={DataResult} />);

    const flatListId = getByTestId("id-list-peoples");

    expect(flatListId.props.data.length).toBe(DataResult.length);
  });

  it("should display an empty array message", () => {
    const { getByTestId } = render(<ListPeoples dataFlatList={[]} />);

    const emptyComponentId = getByTestId("id-empty-array");

    expect(emptyComponentId);
  });
});
