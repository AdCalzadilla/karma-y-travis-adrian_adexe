!function(){if(!mocha)throw new Exception("mocha library does not exist in global namespace!");var n=mocha._reporter,t=function(t){t.on("start",function(){blanket.setupCoverage()}),t.on("end",function(){blanket.onTestsDone()}),t.on("suite",function(){blanket.onModuleStart()}),t.on("test",function(){blanket.onTestStart()}),t.on("test end",function(n){blanket.onTestDone(n.parent.tests.length,"passed"===n.state)}),new n(t)};t.prototype=n.prototype,mocha.reporter(t);var e=mocha.run,o=null;mocha.run=function(n){o=n,console.log("waiting for blanket...")},blanket.beforeStartTestRunner({callback:function(){blanket.options("existingRequireJS")||e(o),mocha.run=e}})}();