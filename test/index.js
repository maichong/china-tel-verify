const test = require('tape');
const verify = require('../');


test('check conflict', (t) => {
  for (let i = 1000; i < 2000; i++) {
    let tel = i.toString() + '0000000';
    if (verify(tel)) {
      let count = 0;
      if (verify.isCMCC(tel)) count += 1;
      if (verify.isCTCC(tel)) count += 1;
      if (verify.isCUCC(tel)) count += 1;
      t.equal(count, 1, tel);
    }
  }
  t.end();
});

test('verify', (t) => {
  t.ok(verify('15500000000'), 'test 155');
  t.ok(verify('13500000000'), 'test 135');
  t.ok(verify('17030000000'), 'test 1703');
  t.notOk(verify('135000000000'), 'test 12 bit tel');
  t.notOk(verify('1350000000'), 'test 10 bit tel');
  t.end();
});

test('isCMCC', (t) => {
  t.ok(verify.isCMCC('13500000000'), 'test 135');
  t.ok(verify.isCMCC('13400000000'), 'test 1340');
  t.ok(verify.isCMCC('17030000000'), 'test 1703');
  t.notOk(verify.isCMCC('135000000000'), 'test 12 bit tel');
  t.notOk(verify.isCMCC('1350000000'), 'test 10 bit tel');
  t.notOk(verify.isCMCC('15500000000'), 'test CUCC tel');
  t.end();
});

test('isCTCC', (t) => {
  t.ok(verify.isCTCC('13300000000'), 'test 133');
  t.ok(verify.isCTCC('13490000000'), 'test 1349');
  t.ok(verify.isCTCC('17010000000'), 'test 1701');
  t.notOk(verify.isCTCC('133000000000'), 'test 12 bit tel');
  t.notOk(verify.isCTCC('1330000000'), 'test 10 bit tel');
  t.notOk(verify.isCTCC('15500000000'), 'test CUCC tel');
  t.end();
});

test('isCUCC', (t) => {
  t.ok(verify.isCUCC('13000000000'), 'test 130');
  t.ok(verify.isCUCC('17100000000'), 'test 171');
  t.ok(verify.isCUCC('17040000000'), 'test 1704');
  t.notOk(verify.isCUCC('130000000000'), 'test 12 bit tel');
  t.notOk(verify.isCUCC('1300000000'), 'test 10 bit tel');
  t.notOk(verify.isCUCC('13300000000'), 'test CTCC tel');
  t.end();
});
