import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react";
import StoryList from "./StoryList";

// Mock del custom hook
jest.mock("../hooks/useStories", () => ({
  useStories: () => ({
    stories: [],
    loading: false,
    error: null,
    hasMore: true,
    fetchStories: jest.fn(),
  }),
}));

test("renders StoryList component", async () => {
  await act(async () => {
    render(<StoryList />);
  });

  await waitFor(() => {
    expect(screen.getByText("Caricamento...")).toBeInTheDocument();
  });
});

test("renders without errors", async () => {
  let container: HTMLElement;
  await act(async () => {
    const result = render(<StoryList />);
    container = result.container;
  });

  await waitFor(() => {
    expect(
      container.querySelector(".infinite-scroll-component")
    ).toBeInTheDocument();
  });
});
