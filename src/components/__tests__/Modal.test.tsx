import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Modal } from "../modal/Modal";
import "@testing-library/jest-dom";

describe("Modal component", () => {
    it("should render modal component", () => {
        render(<Modal>Middle Modal</Modal>);
        expect(screen.getByText("Middle Modal")).toBeInTheDocument();
    });
});
