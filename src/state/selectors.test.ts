import {AppRootStateType} from "./store";
import {selectCounter} from "./selectors";

describe('selector test', () => {
    let startState: AppRootStateType
    beforeEach(() => {
        startState = {
            counter: {
                active: false,
                error:false,
                isDisabled:true,
                maxValue:"5",
                minValue:"0",
                presentValue:0
            }
        }
    })
    it('selected counter', () => {
        const endState = selectCounter(startState)
        expect(Object.keys(endState).length).toBe(6)
    })
})

