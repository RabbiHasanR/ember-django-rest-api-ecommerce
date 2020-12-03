import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
    alreadySignInUser: 'Rabbi',
    hasLaftFoot: true,
    hasRightFoot: false,
    colors: [],
    number: 10,
    name: 'rabbi',
    copPayingAttention: true,
    copInUserArea: false,
    user: computed.alias('alreadySignInUser', function() {
        return this.alreadySignInUser;
    }),
    hasFoot: computed.and('hasLaftFoot','hasRightFoot'),
    isColorEmpty: computed.notEmpty('colors'),
    isNumberBig: computed.gt('number', 20),
    isNumberSmall: computed.lt('number', 20),
    copInProblem: computed.and('copPayingAttention', 'copInUserArea'),
    copNotProblem: computed.not('copInProblem')
});
