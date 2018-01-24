import DS from 'ember-data';

export default DS.Model.extend({
  manager: DS.attr('string'),
  status: DS.attr('string'),
  receptionDate: DS.attr('string'),
  confirmDate: DS.attr('string'),
  orderNumber: DS.attr('string'),
  purchaseTotal: DS.attr('string'),
  internationalShippingFee: DS.attr('string'),
  totalCharge: DS.attr('string'),
  customerResponse: DS.attr('string'),
  customerService: DS.attr('string'),
  user: DS.belongsTo('user'),
});
