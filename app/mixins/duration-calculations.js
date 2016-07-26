import Ember from 'ember';
import { durationFrom } from 'travis/utils/helpers';

export default Ember.Mixin.create({
  duration: Ember.computed(
    'duration',
    'finishedAt',
    'startedAt',
    'notStarted',
    function () {
      let duration = this.get('duration');
      if (this.get('notStarted')) {
        return null;
      } else if (duration) {
        return duration;
      } else {
        return durationFrom(this.get('startedAt'), this.get('finishedAt'));
      }
    }
  ),

  updateTimes() {
    this.notifyPropertyChange('duration');
    return this.notifyPropertyChange('finishedAt');
  }
});
