function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError();
  }
  return a + b;
}


test('throw testing: sum 2 + 2 equal to 4', () => {
  expect(() => sum('2', '2')).toThrow(TypeError);
});

test.skip('testing numbers: sum 2 + 2 equal to 4', ()=>{
    const result = sum('2', '2');
    expect(result).toBe(4);
});

test('testing numbers: sum "Max" + "Max" equal to Infinity', ()=>{
    const result = sum(Number.MAX_VALUE, Number.MAX_VALUE);
    expect(result).toBe(Infinity);
});

test('testing function sum ', ()=>{
    expect(sum(NaN, 1)).toBe(NaN);
    expect(sum(NaN, {})).toBe(NaN);
    expect(sum(NaN, [])).toBe(NaN);
    expect(sum(NaN, '123')).toBe(NaN);
    expect(sum(NaN, 'qwerty')).toBe(NaN);
    expect(sum(NaN, true)).toBe(NaN);
});
