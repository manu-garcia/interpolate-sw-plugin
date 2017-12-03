'use strict';

const InterpolateSWPlugin = require('../index.js');

describe('InterpolateSWPlugin', function () {

  let plugin;

  beforeEach( () => {
    plugin = new InterpolateSWPlugin();
  });

  it('can be instantiated', () => {
    expect(plugin).toBeDefined();
  });

  it('is an object', () => {
    expect(typeof plugin).toBe('object');
  });

  it('has _validOptions method', () => {
    expect(plugin.__proto__.hasOwnProperty('_validOptions')).toBe(true);
  });

  it('default _validOptions are not valid', () => {
    expect(plugin._validOptions()).toBe(false);
  });

  // Configuration

  it('has default configuration', () => {
    expect(plugin.hasOwnProperty('options')).toBe(true);
  });

  it('has default from configuration', () => {
    expect(plugin.options.hasOwnProperty('from')).toBe(true);
  });
  it('has default to configuration', () => {
    expect(plugin.options.hasOwnProperty('to')).toBe(true);
  });
  it('has default replaceCacheVersion configuration', () => {
    expect(plugin.options.hasOwnProperty('replaceCacheVersion')).toBe(true);
  });
  it('has default replaceAssetFiles configuration', () => {
    expect(plugin.options.hasOwnProperty('replaceAssetFiles')).toBe(true);
  });

});