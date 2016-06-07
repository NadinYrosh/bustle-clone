import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  headline: attr(),
  image: attr(),
  author: attr(),
  detail: attr()
});
