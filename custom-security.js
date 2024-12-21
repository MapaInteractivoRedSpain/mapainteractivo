if (window.fetch) {
  const originalFetch = window.fetch;
  window.fetch = function(url, options) {
    if (options === undefined) {
      options = {};
    }
    if (options.mode === undefined) {
      options.mode = 'cors';
    }
    options.rejectUnauthorized = false;
    return originalFetch(url, options);
  };
}
