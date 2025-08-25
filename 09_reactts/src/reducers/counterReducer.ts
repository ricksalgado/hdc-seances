import type { CounterAction } from "../types/actions"

export const counterReducer = (state: number, action: CounterAction): number => {
    switch (action.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        case "double":
            return state * 2
        case "half":
            return state / 2
        case "reset":
            return state = 0
        default:
            return state;
    }
}