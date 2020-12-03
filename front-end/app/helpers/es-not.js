import { helper } from '@ember/component/helper';

export default helper(function esNot(params/*, hash*/) {
  const [val] = params;
  return !val;
});
