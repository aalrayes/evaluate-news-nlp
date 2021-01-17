import { TestScheduler } from 'jest'
import {inputValidate} from '../src/client/js/inputCheck'

test('Checks if inputs are valid', () => {
    expect(inputValidate(undefined)).toBe(false);
  });