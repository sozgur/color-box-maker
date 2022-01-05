import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing", () => {
    render(<BoxList />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("can add new box", () => {
    const { getByLabelText, getByText } = render(<BoxList />);
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const backgroundInput = getByLabelText("Background Color:");

    fireEvent.change(widthInput, { target: { value: "10" } });
    fireEvent.change(heightInput, { target: { value: "10" } });
    fireEvent.change(backgroundInput, { target: { value: "purple" } });

    const addBoxButton = getByText("Create Box");
    fireEvent.click(addBoxButton);

    const removeButton = getByText("X");
    expect(removeButton).toBeInTheDocument();

    expect(removeButton.parentElement).toHaveStyle(`
        width: 10em;
        height: 10em;
        background-color: purple;
        `);
});

it("can remove a box", () => {
    const { getByLabelText, getByText } = render(<BoxList />);
    const widthInput = getByLabelText("Width:");
    const heightInput = getByLabelText("Height:");
    const backgroundInput = getByLabelText("Background Color:");

    fireEvent.change(widthInput, { target: { value: "10" } });
    fireEvent.change(heightInput, { target: { value: "10" } });
    fireEvent.change(backgroundInput, { target: { value: "purple" } });

    const addBoxButton = getByText("Create Box");
    fireEvent.click(addBoxButton);

    const removeButton = getByText("X");
    expect(removeButton).toBeInTheDocument();

    fireEvent.click(removeButton);

    expect(removeButton).not.toBeInTheDocument();
});
