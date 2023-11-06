import { useCallback, useReducer } from 'react';

import Button from 'app/components/button/button';
import { CounterAction, CounterState } from 'app/types/counter-reducer';

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
    }
}

export default function Counter() {
    const [{ count }, dispatch] = useReducer(reducer, { count: 0 });

    const increment = useCallback(() => {
        dispatch({ type: 'increment' });
    }, [dispatch]);

    const decrement = useCallback(() => {
        dispatch({ type: 'decrement' });
    }, [dispatch]);

    return (
        <div className="h-full flex justify-center items-center">
            <div className="w-[300px] h-[100px] bg-white flex justify-center items-center gap-5">
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
        </div>
    );
}
