/**
 * 脉冲软件
 * http://maichong.it
 * Created by Liang on 15/10/1.
 * liang@maichong.it
 */

'use strict';

/**
 * 检测号码是否为中国移动
 * @param tel
 * @returns {boolean}
 */
function isCMCC(tel) {
  return /^(13[4-9]|15[012789]|18[23478]|178|147)\d{8}$/.test(tel);
}

/**
 * 检测号码是否为中国电信
 * @param tel
 * @returns {boolean}
 */
function isCTCC(tel) {
  return /^(133|153|180|181|189|170|171|173|175|177)\d{8}$/.test(tel);
}

/**
 * 检测号码是否为中国联通
 * @param tel
 * @returns {boolean}
 */
function isCUCC(tel) {
  return /^(13[012]|15[56]|18[56]|176)\d{8}$/.test(tel);
}

/**
 * 检测号码是否为合法的中国手机号
 * @param tel
 * @returns {boolean}
 */
function verify(tel) {
  return isCMCC(tel) || isCTCC(tel) || isCUCC(tel);
}

verify.isCMCC = isCMCC;
verify.isCTCC = isCTCC;
verify.isCUCC = isCUCC;
verify.verify = verify;
verify.default = verify;

module.exports = verify;
