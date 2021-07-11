const Logger = (function () {
  let _serverStartTime = new Date();
  let _project1Requests = 0;

  // Server info
  function getServerStartTime() {
    return _serverStartTime;
  }
  function getServerStartTimeFormatted() {
    return `${_serverStartTime.toLocaleDateString()} ${_serverStartTime.toLocaleTimeString()}`;
  }

  // Project 1
  function addProject1Request() {
    _project1Requests++;
  }
  function getProject1Requests() {
    return _project1Requests;
  }

  return {
    // Server info
    getServerStartTime,
    getServerStartTimeFormatted,
    // Project 1
    addProject1Request,
    getProject1Requests,
  };
})();

module.exports = Logger;
