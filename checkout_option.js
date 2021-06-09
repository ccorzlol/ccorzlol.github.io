  
// Initialize extra fields, add addtional field during check out process
ec = ec || {};
ec.order = ec.order || {};
ec.order.extraFields = ec.order.extraFields || {};

// The field "how_did_you_find_us" asks user about how they found the store. Drop down type
ec.order.extraFields.how_did_you_find_us = {
    'title': 'How did you find us?',
    'type': 'select',
    'required': false,
    // 'selectOptions': ['Wechat', 'WhatsApp', 'Other'],
    'options': [
        {'title': 'Wechat'},
      {'title': 'WhatsApp'},
      {'title': 'Other'}
    ],
    'value': 'TV show', // Default value
    'checkoutDisplaySection': 'payment_details'
};

ec.order.extraFields.order_onbehalf_ship = {
    'title': '下单人姓名',
    'textPlaceholder': '填写下单人姓名',
    'type': 'text',
    'tip': ' 下单人的名字',
    'required': false,
    'checkoutDisplaySection': 'shipping_address'
};

ec.order.extraFields.order_onbehalf = {
    'title': '下单人姓名',
    'textPlaceholder': '填写下单人姓名',
    'type': 'text',
    'tip': ' 下单人的名字',
    'required': false,
    'checkoutDisplaySection': 'pickup_details'
};

Ecwid.refreshConfig();
