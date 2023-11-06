export type CounterState = {
    count: number;
}

export type CounterAction = { type: 'increment' } | { type: 'decrement' }