import React from 'react';
import { act, create as createTestRenderer } from 'react-test-renderer';

describe('side effect (setState) in render', () => {
  it('is ok', () => {
    function Counter() {
      let [count, setCount] = React.useState(0);

      if (count === 0) {
        setCount(count + 1);
      }

      return <div>{count}</div>;
    }

    let renderer;
    act(() => {
      renderer = createTestRenderer(<Counter />);
    });

    expect(renderer.toJSON()).toMatchInlineSnapshot(`
      <div>
        1
      </div>
    `);
  });
});
