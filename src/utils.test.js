import utils from './utils';

const testBind = () => {

  const ctx = 1;
  const props = [2, 3];
  const fn = jest.fn();
  const myFn = utils.bind(fn, ctx);

  myFn(...props);

  expect(fn).toHaveBeenCalledWith(1, 2, 3);
};

const testFForEach = () => {

  const contextValue = {
    
    value: 0,
  };

  const memoizedProps = [];
  const totalViewProps = {};

  const key = 'propName';

  const ctx = {

    contextValue,
    memoizedProps,
    totalViewProps,
  };

  const element = {

    key,
    get: jest.fn(obj => obj.value),
  };

  utils.fForEach(ctx, element);

  expect(memoizedProps.length).toEqual(0);

  element.up = true
  
  utils.fForEach(ctx, element);

  expect(memoizedProps[0]).toEqual(0);
};

const testHandle = () => {

  const key = 'key';
  const emit = jest.fn();

  const event = {

    obj: {},
    origin: {},
  };

  const eventer = {

    emit,
  };

  const ctx = {

    key,
    eventer,
  };

  utils.handle(ctx, {}, {});

  expect(emit).toHaveBeenCalledWith(key, event);
};

test('Utlis: bind', testBind);

test('Utils: fForEach', testFForEach);

test('Utlis: handle', testHandle);
