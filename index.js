const core = require('@actions/core');
const wait = require('./wait');


// most @actions toolkit packages have async methods
async function run() {
    // try {
    const key = core.getInput('ftkey');
    //     core.info(`Waiting ${ms} milliseconds ...`);

    //     core.debug((new Date()).toTimeString()); // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    //     await wait(parseInt(ms));
    //     core.info((new Date()).toTimeString());

    //     core.setOutput('time', new Date().toTimeString());
    // } catch (error) {
    //     core.setFailed(error.message);
    // }

    httpGet("https://sc.ftqq.com/" + key + ".send?text=主人服务器又挂掉啦~");

}

run();

function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false 为同步请求
    xmlHttp.send(null);
    return xmlHttp.responseText;
}