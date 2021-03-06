import './polyfill';
import test from 'ava';
import Between from '../src/between';

test.cb('object as a value', t => {
  t.plan(1);

  new Between(
    {a: 2}, // from
    {a: 10} // to
  )
    .time(1000)
    .on('complete', v => {
      t.is(v.a, 10);
      t.end();
    });
});
