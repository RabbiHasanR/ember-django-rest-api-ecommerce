import { helper } from '@ember/component/helper';

export default helper(function formateDate(params/*, hash*/) {
  const [date] = params;
  return new Date(date);
});
