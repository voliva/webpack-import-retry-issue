async function tryRun() {
  let module;
  try {
    module = await import("./module.js");
  } catch (ex) {
    console.log("error loading module, retrying in 1 second", ex);
    setTimeout(tryRun, 1000);
    return;
  }

  console.log(module.doSomething());
}

tryRun();
