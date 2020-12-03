import { helper } from '@ember/component/helper';

export default helper(function addOne(params/*, hash*/) {
  const [number] = params;
  return number + 1;
});
