export default function deleteContentEditableError() {
  console.error = (function (_error) {
    return function (message, ...args) {
      if (
        typeof message !== 'string' ||
        message.indexOf('component is `contentEditable`') === -1
      ) {
        _error.apply(console, args);
      }
    };
  })(console.error);
}
