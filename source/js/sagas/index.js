import { all } from 'redux-saga/effects';

import peopleSagas from 'sagas/people';

export default function* rootSaga() {
  yield all([
    ...peopleSagas,
  ]);
}
