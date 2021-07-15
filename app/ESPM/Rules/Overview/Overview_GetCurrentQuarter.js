
var clientAPI;

/**
 * Describe this function...
 */
export default function Overview_GetCurrentQuarter(clientAPI) {
  var d = new Date();
  var q = [1,2,3,4];
  var qNum = q[Math.floor(d.getMonth() / 3)];
  
  return String("Q" + qNum);
  
}
