module.exports = {
  TYPE_CALLBACK: 'Callback',
  TYPE_REMOTE_HANDLER: 'RemoteHandler',
  TYPE_REMOTE_INSTANCE: 'RemoteInstance',

  eventName: function (namespace, name) {
    return namespace + '/' + name;
  },

  eventCallbackName: function (namespace, id) {
    return namespace + '/' + 'cb' + '/' + id;
  },
};
