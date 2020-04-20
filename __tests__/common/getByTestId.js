export default (wrapper, testID) =>
    wrapper.findWhere(node => node.prop('testID') === testID);
