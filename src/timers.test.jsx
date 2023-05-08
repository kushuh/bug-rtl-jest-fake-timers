import {renderHook, waitFor} from "@testing-library/react";
import {useState} from "react";

beforeAll(() => {
  jest.useFakeTimers();
});

describe("dummy test", () => {
  it("I will fail", async () => {
    const { result } = renderHook(() => {
      const [data] = useState(false);
      return { data };
    });

    await waitFor(
      () => {
        // Will obviously fail, but should do so after 5s.
        expect(result.current.data).toBeTruthy();
      },
      { timeout: 5000 }
    );
  });
});
