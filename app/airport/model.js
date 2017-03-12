import DS from 'ember-data';

export default DS.Model.extend({
  continent: DS.attr('string'),
  gps_code: DS.attr('string'),
  iata_code: DS.attr('string'),
  ident: DS.attr('string'),
  iso_country: DS.attr('string'),
  iso_region: DS.attr('string'),
  local_code: DS.attr('string'),
  municipality: DS.attr('string'),
  name: DS.attr('string'),
  scheduled_service: DS.attr('string'),
  type: DS.attr('string')
});
