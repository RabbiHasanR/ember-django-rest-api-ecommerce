import { helper } from '@ember/component/helper';

export default helper(function isEqual(params/*, hash*/) {
  const [val1, val2] = params;
  return val1 === val2;
});
