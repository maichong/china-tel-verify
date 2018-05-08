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
  return /^(13[5-9]|14[78]|15[012789]|18[23478]|178|198)\d{8}$/.test(tel)
    || /^134[0-8]\d{7}$/.test(tel) // 1349为中国电信卫星通信，其余134*为中国移动
    || /^170[356]\d{7}$/.test(tel) // 虚拟运营商
    ;
}

/**
 * 检测号码是否为中国电信
 * @param tel
 * @returns {boolean}
 */
function isCTCC(tel) {
  return /^(133|149|153|17[347]|18[019])\d{8}$/.test(tel)
    || /^1349\d{7}$/.test(tel) // 卫星通信
    || /^170[012]\d{7}$/.test(tel) // 虚拟运营商
    ;
}

/**
 * 检测号码是否为中国联通
 * @param tel
 * @returns {boolean}
 */
function isCUCC(tel) {
  return /^(13[012]|14[056]|15[56]|166|17[156]|18[56])\d{8}$/.test(tel)
    || /^170[4789]\d{7}$/.test(tel) // 虚拟运营商
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
