import { render, screen } from "@testing-library/react";
import NewBoxForm from "./NewBoxForm";

it("renders without crashing", () => {
    render(<NewBoxForm />);
});

it("matches snapshot", () => {
    const { asFragment } = render(<NewBoxForm />);
    expect(asFragment()).toMatchSnapshot();
});

it("checks componenet", () => {
    render(<NewBoxForm />);
    expect(screen.getByText("Height:")).toBeInTheDocument();
    expect(screen.getByText("Width:")).toBeInTheDocument();
    expect(screen.getByText("Background Color:")).toBeInTheDocument();
});
