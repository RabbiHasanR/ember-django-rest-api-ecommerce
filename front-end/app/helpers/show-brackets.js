import { helper } from '@ember/component/helper';

export default helper(function showBrackets(params/*, hash*/) {
  const [bracket] = params
  return bracket;
});
