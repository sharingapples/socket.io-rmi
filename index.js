module.exports = {
  TYPE_CALLBACK: 'Callback',

  TYPE_REMOTE_HANDLER: 'RemoteHandler',

  TYPE_REMOTE_INSTANCE: 'RemoteInstance',

  /**
   * Get the name of the event for the given namespace and name
   * @param  {string} namespace     The namespace name (can be empty)
   * @param  {string} name          The name of the method
   * @return {string}               The event name to be used in the client as well
   *                                as server
   */
  eventName: function (namespace, name) {
    return namespace + '/' + name;
  },

  /**
   * Get the name of the event for the callback with the given id
   * @param  {string} namespace The namespace name (can be empty)
   * @param  {number} id        A unique id for the callback identification
   * @return {string}           The event name to be used in the client as well
   *                            as server
   */
  eventCallbackName: function (namespace, id) {
    return namespace + '/' + 'cb' + '/' + id;
  },
};
