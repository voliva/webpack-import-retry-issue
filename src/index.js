async function tryRun() {
  let module;
  try {
    module = await import("./module.js");
  } catch (ex) {
    console.log("error loading module, retrying in 1 second");
    setTimeout(tryRun, 1000);
    return;
  }

  console.log("before", module.beforeException());
  console.log("after", module.afterException());
}

tryRun();
