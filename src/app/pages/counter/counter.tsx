import { useCallback, useReducer } from 'react';

import Button from 'app/components/button/button';
import { CounterAction, CounterState } from 'app/types/counter-reducer';

const INITIAL_STATE: CounterState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment': {
            return {
                count: state.count + 1,
            };
        }
        case 'decrement': {
            return {
                count: state.count - 1,
            };
        }
        case 'reset': {
            return INITIAL_STATE;
        }
    }
}

export default function Counter() {
    const [{ count }, dispatch] = useReducer(reducer, INITIAL_STATE);

    const increment = useCallback(() => {
        dispatch({ type: 'increment' });
    }, [dispatch]);

    const decrement = useCallback(() => {
        dispatch({ type: 'decrement' });
    }, [dispatch]);

    const reset = useCallback(() => {
        dispatch({ type: 'reset' });
    }, [dispatch]);

    return (
        <div className="h-full flex flex-col gap-4 justify-center items-center">
            <div className="w-[300px] h-[100px] bg-white flex justify-center items-center gap-4">
                <Button category="secondary" onClick={increment} data-testid="btn-increment">
                    +
                </Button>
                <p className="text-2xl font-bold" data-testid="counter-value">
                    {count}
                </p>
                <Button category="secondary" onClick={decrement} disabled={count <= 0} data-testid="btn-decrement">
                    -
                </Button>
            </div>
            <Button onClick={reset} data-testid="btn-reset">
                Reset
            </Button>
        </div>
    );
}
