  
// Initialize extra fields
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


Ecwid.refreshConfig();