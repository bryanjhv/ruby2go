var result;importScripts("../js/opal.js"),Opal.load("opal-parser");var console={log:function(e){result+=e},warn:function(e){this.log("[warn] "+e)}};onmessage=function(event){var data=event.data,error;result="";try{reset(),eval(Opal.compile(data.code)),result=result.slice(0,-1)}catch(e){error={name:e.name,message:e.message}}postMessage({id:data.id,error:error,result:result})};