const miniu = require('miniu');
const semver = require('semver');
const ora = require('ora');
const path = require('path');
const getUploadApp = require('./base');

const spinner = ora('upload start...\n').start();

const codePath = path.join(__dirname, '../');

async function uploadTinyApp() {
  const app = await getUploadApp();
  const { appId } = app;
  console.log(`upload appId is ${appId}`);
  const lastVersion = await miniu.getUploadVersion({
    appId,
  });
  // 上传版本
  let uploadVersion = '0.0.1';
  if (lastVersion) {
    uploadVersion = semver.inc(lastVersion, 'patch');
  }
  console.log(`upload version is ${uploadVersion}`);
  const uploadResult = await miniu.miniUpload({
    project: codePath,
    appId,
    version: uploadVersion,
    experience: true, // 设置为体验版本
    onProgressUpdate (info) {
      const { status, data } = info
      console.log(status, data);
    },
  });
  console.log(`the result of upload tiny app is: ${JSON.stringify(uploadResult)}`);
  spinner.succeed('小程序上传成功');
  return uploadResult;
}

uploadTinyApp();
