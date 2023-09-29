export const beforeException = () => {
  return "This should work";
};

window.someExecutionError();

export const afterException = () => {
  return "This won't work :(";
};
