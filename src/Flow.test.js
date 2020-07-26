import Flow from './Flow';

const uknownEvent = {

  obj: {

    name: 'uknownKey',
  },
};

const customEvent = {

  obj: {

    name: 'yourKey',
  },
};

const store = {

  state: Flow.initialState,
  setState: jest.fn(),
};

const testEffect = () => {

  Flow.effect({store});

  expect(store.state.effected).toEqual(true);
};

const testUpdateByUknownEvent = () => {

  Flow.update({store}, uknownEvent);

  expect(store.state).toEqual(store.state);
};

const testUpdateByCustomEvent = () => {

  Flow.update({store}, customEvent);
  
  expect(store.state.value).toEqual(1);
};

test('Flow: effect', testEffect);

test('Flow: update by uknown event', testUpdateByUknownEvent);

test('Flow: update by custom event', testUpdateByCustomEvent);
