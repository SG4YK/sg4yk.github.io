// modified bt SG4YK
var TIME = 0x12c;
var color = '#FFCC00';
var preTime;
var mainTb;
var preTb;
var status = 0x0;
var timer;
var score = 0x0;
var board = new Array(0x12);
for (var i = 0x0; i < 0x12; i++) {
    board[i] = new Array(0xa);
}
for (var i = 0x0; i < 0x12; i++) {
    for (var j = 0x0; j < 0xa; j++) {
        board[i][j] = 0x0;
    }
}
var activeBlock;
var nextBlock;
var previewBlock;
function initBlock() {
    var _0x41b2f3 = {
        'OtbPE': function(_0x528d50, _0x13e498) {
            return _0x528d50 * _0x13e498;
        }
    };
    var _0x57e408 = new Array(0x4);
    var _0x1d66b8 = Math['floor'](_0x41b2f3['OtbPE'](Math['random'](), 0x7));
    switch (_0x1d66b8) {
    case 0x0:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x4
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x0,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x1,
                'y': 0x5
            };
            break;
        }
    case 0x1:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x3
            };
            _0x57e408[0x1] = {
                'x': 0x0,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x0,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x0,
                'y': 0x6
            };
            break;
        }
    case 0x2:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x5
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x1,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x2,
                'y': 0x4
            };
            break;
        }
    case 0x3:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x4
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x1,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x2,
                'y': 0x5
            };
            break;
        }
    case 0x4:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x4
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x1,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x1,
                'y': 0x6
            };
            break;
        }
    case 0x5:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x4
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x2,
                'y': 0x4
            };
            _0x57e408[0x3] = {
                'x': 0x2,
                'y': 0x5
            };
            break;
        }
    case 0x6:
        {
            _0x57e408[0x0] = {
                'x': 0x0,
                'y': 0x5
            };
            _0x57e408[0x1] = {
                'x': 0x1,
                'y': 0x4
            };
            _0x57e408[0x2] = {
                'x': 0x1,
                'y': 0x5
            };
            _0x57e408[0x3] = {
                'x': 0x1,
                'y': 0x6
            };
            break;
        }
    }
    return _0x57e408;
}
function moveDown() {
    var _0x5d1071 = {
        'hPmyv': function(_0x9cabf, _0x486c46) {
            return _0x9cabf(_0x486c46);
        },
        'ewjsb': 'down',
        'lMoRn': function(_0x5309d7, _0x1476cc, _0x3d1b18, _0x255aa0) {
            return _0x5309d7(_0x1476cc, _0x3d1b18, _0x255aa0);
        },
        'wyebU': 'black',
        'qVkxf': function(_0x1c669e, _0x5933d2) {
            return _0x1c669e < _0x5933d2;
        },
        'Wxqsw': function(_0xbdba32, _0x3a64f1) {
            return _0xbdba32 + _0x3a64f1;
        },
        'erKKS': '5|0|3|11|6|10|4|2|1|7|9|8|12|13',
        'VgLyd': function(_0x1e6e19) {
            return _0x1e6e19();
        },
        'XYzXN': function(_0x3be1b4, _0x3c6a4d) {
            return _0x3be1b4(_0x3c6a4d);
        },
        'WxPMd': function(_0x326732, _0x505600) {
            return _0x326732(_0x505600);
        },
        'TNKOn': function(_0x1fc46c, _0x305a13) {
            return _0x1fc46c(_0x305a13);
        },
        'smtEb': 'print',
        'NqDyV': 'game\x20over!\x0a莫要灰心！\x0a再来亿次！',
        'cpSmM': '你已达到分数要求，传送到下一关叭！',
        'xWOsg': 'begin',
        'Goavr': function(_0x59480f, _0x17fb85) {
            return _0x59480f != _0x17fb85;
        },
        'tcwYe': '3|0|2|4|1',
        'vHChv': function(_0x4cc4dc, _0x111d58) {
            return _0x4cc4dc * _0x111d58;
        },
        'bhyPx': function(_0x2b6844, _0x1c6c4d) {
            return _0x2b6844 == _0x1c6c4d;
        },
        'qDRHK': function(_0x581896, _0x48efaa) {
            return _0x581896 == _0x48efaa;
        },
        'asMKj': function(_0x358cb1, _0x23c3c4, _0x1fef80) {
            return _0x358cb1(_0x23c3c4, _0x1fef80);
        }
    };
    if (_0x5d1071['hPmyv'](checkBorder, _0x5d1071['ewjsb'])) {
        _0x5d1071['lMoRn'](paint, mainTb, activeBlock, _0x5d1071['wyebU']);
        for (var _0x200042 = 0x0; _0x5d1071['qVkxf'](_0x200042, 0x4); _0x200042++) {
            activeBlock[_0x200042]['x'] = _0x5d1071['Wxqsw'](activeBlock[_0x200042]['x'], 0x1);
        }
        _0x5d1071['lMoRn'](paint, mainTb, activeBlock, color);
    } else {
        var _0x24d45b = _0x5d1071['erKKS']['split']('|')
          , _0x4c7eea = 0x0;
        while (!![]) {
            switch (_0x24d45b[_0x4c7eea++]) {
            case '0':
                _0x5d1071['VgLyd'](updateBoard);
                continue;
            case '1':
                nextBlock = _0x5d1071['VgLyd'](initBlock);
                continue;
            case '2':
                activeBlock = nextBlock;
                continue;
            case '3':
                var _0x27bfd6 = _0x5d1071['VgLyd'](deleteLine);
                continue;
            case '4':
                ;continue;
            case '5':
                _0x5d1071['XYzXN'](clearInterval, timer);
                continue;
            case '6':
                _0x5d1071['lMoRn'](paint, preTb, previewBlock, _0x5d1071['wyebU']);
                continue;
            case '7':
                previewBlock = _0x5d1071['WxPMd'](copyBlock, nextBlock);
                continue;
            case '8':
                _0x5d1071['VgLyd'](applyPreview);
                continue;
            case '9':
                _0x5d1071['lMoRn'](paint, mainTb, activeBlock, color);
                continue;
            case '10':
                if (!_0x5d1071['TNKOn'](validateBlock, nextBlock)) {
                    status = 0x2;
                    // if (_0x5d1071['qVkxf'](score, 0x400)) {
                    if (_0x5d1071['qVkxf'](score, 0x1)) {
                        document['getElementById'](_0x5d1071['smtEb'])['innerText'] = _0x5d1071['NqDyV'];
                    } else {
                        document['getElementById'](_0x5d1071['smtEb'])['innerText'] = _0x5d1071['cpSmM'];
                    }
                    document['getElementById'](_0x5d1071['xWOsg'])['disabled'] = ![];
                    return;
                }
                continue;
            case '11':
                if (_0x5d1071['Goavr'](_0x27bfd6, 0x0)) {
                    var _0x352048 = _0x5d1071['tcwYe']['split']('|')
                      , _0x1020f7 = 0x0;
                    while (!![]) {
                        switch (_0x352048[_0x1020f7++]) {
                        case '0':
                            score = _0x5d1071['Wxqsw'](score, _0x5d1071['vHChv'](_0x27bfd6, 0x40));
                            continue;
                        case '1':
                            _0x5d1071['VgLyd'](paintBoard);
                            continue;
                        case '2':
                            _0x5d1071['VgLyd'](updateScore);
                            continue;
                        case '3':
                            if (_0x5d1071['bhyPx'](_0x27bfd6, 0x2)) {
                                _0x27bfd6 = 0x3;
                            } else if (_0x5d1071['qDRHK'](_0x27bfd6, 0x3)) {
                                _0x27bfd6 = 0x6;
                            } else if (_0x5d1071['qDRHK'](_0x27bfd6, 0x4)) {
                                _0x27bfd6 = 0xa;
                            }
                            continue;
                        case '4':
                            _0x5d1071['VgLyd'](eraseBoard);
                            continue;
                        }
                        break;
                    }
                }
                continue;
            case '12':
                _0x5d1071['lMoRn'](paint, preTb, previewBlock, color);
                continue;
            case '13':
                timer = _0x5d1071['asMKj'](setInterval, moveDown, TIME);
                continue;
            }
            break;
        }
    }
}
function validateBlock(_0x31a78e) {
    var _0x25426c = {
        'TTWnh': function(_0x37bae4, _0x54d041) {
            return _0x37bae4 < _0x54d041;
        },
        'Swegn': function(_0x58482a, _0x3c5606, _0x43ab44) {
            return _0x58482a(_0x3c5606, _0x43ab44);
        }
    };
    if (!_0x31a78e) {
        return ![];
    }
    for (var _0x177754 = 0x0; _0x25426c['TTWnh'](_0x177754, 0x4); _0x177754++) {
        if (!_0x25426c['Swegn'](isCellValid, _0x31a78e[_0x177754]['x'], _0x31a78e[_0x177754]['y'])) {
            return ![];
        }
    }
    return !![];
}
function move(_0x25ca4e) {
    var _0x3b3595 = {
        'wzuDz': function(_0x2dd307, _0x2c08d0) {
            return _0x2dd307(_0x2c08d0);
        },
        'Gmdmu': function(_0x1db155, _0x5f2826, _0xb5e889, _0x210af3) {
            return _0x1db155(_0x5f2826, _0xb5e889, _0x210af3);
        },
        'TERJD': 'black',
        'zfDmd': function(_0xc0446, _0x4e13c1) {
            return _0xc0446 < _0x4e13c1;
        },
        'YozhL': function(_0x2e5291, _0x24ab53) {
            return _0x2e5291 == _0x24ab53;
        },
        'Dabno': 'left',
        'enrmP': function(_0x4b65cf, _0xc636c3) {
            return _0x4b65cf - _0xc636c3;
        },
        'Tzqim': function(_0x24d5ed, _0x1cb282) {
            return _0x24d5ed == _0x1cb282;
        },
        'WOnlB': 'right',
        'yCnRY': function(_0x1cabdf, _0x398cd3) {
            return _0x1cabdf + _0x398cd3;
        },
        'utYfK': function(_0x537329, _0x42fb39, _0x13fcd7, _0x30addf) {
            return _0x537329(_0x42fb39, _0x13fcd7, _0x30addf);
        }
    };
    if (_0x3b3595['wzuDz'](checkBorder, _0x25ca4e)) {
        _0x3b3595['Gmdmu'](paint, mainTb, activeBlock, _0x3b3595['TERJD']);
        for (var _0x3cdfd7 = 0x0; _0x3b3595['zfDmd'](_0x3cdfd7, 0x4); _0x3cdfd7++) {
            if (_0x3b3595['YozhL'](_0x25ca4e, _0x3b3595['Dabno'])) {
                activeBlock[_0x3cdfd7]['y'] = _0x3b3595['enrmP'](activeBlock[_0x3cdfd7]['y'], 0x1);
            } else if (_0x3b3595['Tzqim'](_0x25ca4e, _0x3b3595['WOnlB'])) {
                activeBlock[_0x3cdfd7]['y'] = _0x3b3595['yCnRY'](activeBlock[_0x3cdfd7]['y'], 0x1);
            }
        }
        _0x3b3595['utYfK'](paint, mainTb, activeBlock, color);
    }
}
function rotate() {
    var _0x44b0b4 = {
        'ERpsC': '4|2|5|6|1|3|7|0',
        'nmnvq': function(_0x28d1d5, _0x44cee2, _0x1eb26d, _0x7bca8a) {
            return _0x28d1d5(_0x44cee2, _0x1eb26d, _0x7bca8a);
        },
        'mdHvB': function(_0x1f30b7, _0x1cb582) {
            return _0x1f30b7 < _0x1cb582;
        },
        'RbZdy': function(_0x30195e, _0x98b4de, _0x4d8e6b) {
            return _0x30195e(_0x98b4de, _0x4d8e6b);
        },
        'qMukn': function(_0x412e08, _0x20c3d5) {
            return _0x412e08 / _0x20c3d5;
        },
        'taaSM': function(_0x3755aa, _0x26a52b) {
            return _0x3755aa + _0x26a52b;
        },
        'iijgr': function(_0x3e19f0, _0x13e2c2) {
            return _0x3e19f0 + _0x13e2c2;
        },
        'jEZya': 'black',
        'BNxvS': function(_0x524ac5, _0x29a987) {
            return _0x524ac5(_0x29a987);
        },
        'NlTMz': function(_0x5e5200, _0x404394) {
            return _0x5e5200 < _0x404394;
        },
        'qdSQv': function(_0x402125, _0x107c25) {
            return _0x402125 - _0x107c25;
        },
        'FVMcZ': function(_0xcbca8f, _0x207308) {
            return _0xcbca8f - _0x207308;
        }
    };
    var _0x3b78e1 = _0x44b0b4['ERpsC']['split']('|')
      , _0x417ed1 = 0x0;
    while (!![]) {
        switch (_0x3b78e1[_0x417ed1++]) {
        case '0':
            _0x44b0b4['nmnvq'](paint, mainTb, _0x22dd42, color);
            continue;
        case '1':
            for (var _0x3f0d19 = 0x0; _0x44b0b4['mdHvB'](_0x3f0d19, 0x4); _0x3f0d19++) {
                if (!_0x44b0b4['RbZdy'](isCellValid, _0x22dd42[_0x3f0d19]['x'], _0x22dd42[_0x3f0d19]['y'])) {
                    return;
                }
            }
            continue;
        case '2':
            var _0x1ab649 = Math['round'](_0x44b0b4['qMukn'](_0x44b0b4['taaSM'](_0x44b0b4['iijgr'](_0x44b0b4['iijgr'](_0x22dd42[0x0]['x'], _0x22dd42[0x1]['x']), _0x22dd42[0x2]['x']), _0x22dd42[0x3]['x']), 0x4));
            continue;
        case '3':
            _0x44b0b4['nmnvq'](paint, mainTb, activeBlock, _0x44b0b4['jEZya']);
            continue;
        case '4':
            var _0x22dd42 = _0x44b0b4['BNxvS'](copyBlock, activeBlock);
            continue;
        case '5':
            var _0x25b965 = Math['round'](_0x44b0b4['qMukn'](_0x44b0b4['iijgr'](_0x44b0b4['iijgr'](_0x44b0b4['iijgr'](_0x22dd42[0x0]['y'], _0x22dd42[0x1]['y']), _0x22dd42[0x2]['y']), _0x22dd42[0x3]['y']), 0x4));
            continue;
        case '6':
            for (var _0x3f0d19 = 0x0; _0x44b0b4['NlTMz'](_0x3f0d19, 0x4); _0x3f0d19++) {
                _0x22dd42[_0x3f0d19]['x'] = _0x44b0b4['qdSQv'](_0x44b0b4['iijgr'](_0x1ab649, _0x25b965), activeBlock[_0x3f0d19]['y']);
                _0x22dd42[_0x3f0d19]['y'] = _0x44b0b4['iijgr'](_0x44b0b4['FVMcZ'](_0x25b965, _0x1ab649), activeBlock[_0x3f0d19]['x']);
            }
            continue;
        case '7':
            for (var _0x3f0d19 = 0x0; _0x44b0b4['NlTMz'](_0x3f0d19, 0x4); _0x3f0d19++) {
                activeBlock[_0x3f0d19]['x'] = _0x22dd42[_0x3f0d19]['x'];
                activeBlock[_0x3f0d19]['y'] = _0x22dd42[_0x3f0d19]['y'];
            }
            continue;
        }
        break;
    }
}
function checkBorder(_0x53341c) {
    var _0x1bb171 = {
        'iarvf': function(_0x1b1636, _0xacdb78) {
            return _0x1b1636 < _0xacdb78;
        },
        'ZwTcO': function(_0x450a96, _0x160a61) {
            return _0x450a96 == _0x160a61;
        },
        'oXPWJ': 'left',
        'dfzFH': function(_0x2ff557, _0x4fcf35, _0x32a105) {
            return _0x2ff557(_0x4fcf35, _0x32a105);
        },
        'fqNcL': function(_0x120d43, _0x1ec833) {
            return _0x120d43 - _0x1ec833;
        },
        'YtoSI': function(_0x91abd, _0x248b1f) {
            return _0x91abd == _0x248b1f;
        },
        'ymJCi': 'right',
        'poqAC': function(_0x2e98af, _0x5cad7c) {
            return _0x2e98af + _0x5cad7c;
        },
        'hPzJW': function(_0x2b08c4, _0xb909a5) {
            return _0x2b08c4 == _0xb909a5;
        },
        'ZJprK': 'down',
        'DcSjg': function(_0x26fc0c, _0x1f1aeb, _0x83a85b) {
            return _0x26fc0c(_0x1f1aeb, _0x83a85b);
        }
    };
    for (var _0x14078a = 0x0; _0x1bb171['iarvf'](_0x14078a, activeBlock['length']); _0x14078a++) {
        if (_0x1bb171['ZwTcO'](_0x53341c, _0x1bb171['oXPWJ'])) {
            var _0x38a38d = _0x1bb171['dfzFH'](isCellValid, activeBlock[_0x14078a]['x'], _0x1bb171['fqNcL'](activeBlock[_0x14078a]['y'], 0x1));
        } else if (_0x1bb171['YtoSI'](_0x53341c, _0x1bb171['ymJCi'])) {
            var _0x38a38d = _0x1bb171['dfzFH'](isCellValid, _0x1bb171['poqAC'](activeBlock[_0x14078a]['x'], 0x1), _0x1bb171['poqAC'](activeBlock[_0x14078a]['y'], 0x1));
        } else if (_0x1bb171['hPzJW'](_0x53341c, _0x1bb171['ZJprK'])) {
            var _0x38a38d = _0x1bb171['DcSjg'](isCellValid, _0x1bb171['poqAC'](activeBlock[_0x14078a]['x'], 0x1), activeBlock[_0x14078a]['y']);
        }
        if (!_0x38a38d) {
            return ![];
        }
    }
    return !![];
}
function isCellValid(_0x2e950e, _0x30439e) {
    var _0x3282b4 = {
        'zrwko': function(_0x59d589, _0x3166c3) {
            return _0x59d589 > _0x3166c3;
        },
        'YMSlJ': function(_0x43130a, _0x4366f4) {
            return _0x43130a < _0x4366f4;
        },
        'WvJtA': function(_0xc63d6d, _0x49ef3f) {
            return _0xc63d6d == _0x49ef3f;
        }
    };
    if (_0x3282b4['zrwko'](_0x2e950e, 0x11) || _0x3282b4['YMSlJ'](_0x2e950e, 0x0) || _0x3282b4['zrwko'](_0x30439e, 0x9) || _0x3282b4['YMSlJ'](_0x30439e, 0x0)) {
        return ![];
    }
    if (_0x3282b4['WvJtA'](board[_0x2e950e][_0x30439e], 0x1)) {
        return ![];
    }
    return !![];
}
function paint(_0x365ecf, _0x4c24c1, _0x18794b) {
    var _0x50c694 = {
        'BcGYS': function(_0x51f910, _0x48003c) {
            return _0x51f910 < _0x48003c;
        }
    };
    for (var _0x20de5c = 0x0; _0x50c694['BcGYS'](_0x20de5c, 0x4); _0x20de5c++) {
        _0x365ecf['rows'][_0x4c24c1[_0x20de5c]['x']]['cells'][_0x4c24c1[_0x20de5c]['y']]['style']['backgroundColor'] = _0x18794b;
    }
}
function updateBoard() {
    var _0x1e2c50 = {
        'zWTQY': function(_0x4e818c, _0x58c468) {
            return _0x4e818c < _0x58c468;
        }
    };
    for (var _0xb65aae = 0x0; _0x1e2c50['zWTQY'](_0xb65aae, 0x4); _0xb65aae++) {
        board[activeBlock[_0xb65aae]['x']][activeBlock[_0xb65aae]['y']] = 0x1;
    }
}
function deleteLine() {
    var _0x2f404e = {
        'cPRYb': function(_0x55ecc9, _0xa8bb66) {
            return _0x55ecc9 < _0xa8bb66;
        },
        'EsXYq': function(_0x268a61, _0x568d21) {
            return _0x268a61 < _0x568d21;
        },
        'XdwLi': function(_0x524a40, _0x521a05) {
            return _0x524a40 == _0x521a05;
        },
        'euIJa': '3|0|1|4|2',
        'JPcCj': function(_0x145f02, _0x23a619) {
            return _0x145f02 * _0x23a619;
        },
        'prMri': 'print',
        'AiNwh': 'GOOD\x20JOB!',
        'YDtAN': 'NICE!',
        'sIRxo': 'WELL\x20DONE!',
        'mdVXo': 'EXCELLENT!',
        'KhomY': 'PERFECT!',
        'WWMTE': function(_0x36b635) {
            return _0x36b635();
        },
        'HVoKQ': function(_0x1fb813, _0x264b19) {
            return _0x1fb813 != _0x264b19;
        },
        'LQzeb': function(_0x4f744a, _0x1c0674) {
            return _0x4f744a - _0x1c0674;
        },
        'fwvtp': function(_0x336d53, _0x1bd6a6) {
            return _0x336d53 >= _0x1bd6a6;
        },
        'edxyf': function(_0xdd8ee6, _0x5c9482) {
            return _0xdd8ee6 + _0x5c9482;
        }
    };
    var _0xbe3c7d = 0x0;
    for (var _0x38b1e4 = 0x0; _0x2f404e['cPRYb'](_0x38b1e4, 0x12); _0x38b1e4++) {
        var _0x1615ad = 0x0;
        for (; _0x2f404e['EsXYq'](_0x1615ad, 0xa); _0x1615ad++) {
            if (_0x2f404e['XdwLi'](board[_0x38b1e4][_0x1615ad], 0x0)) {
                break;
            }
        }
        if (_0x2f404e['XdwLi'](_0x1615ad, 0xa)) {
            var _0x5dce8f = _0x2f404e['euIJa']['split']('|')
              , _0x4a9c5d = 0x0;
            while (!![]) {
                switch (_0x5dce8f[_0x4a9c5d++]) {
                case '0':
                    chatran = Math['floor'](_0x2f404e['JPcCj'](Math['random'](), 0x5));
                    continue;
                case '1':
                    switch (chatran) {
                    case 0x0:
                        document['getElementById'](_0x2f404e['prMri'])['innerText'] = _0x2f404e['AiNwh'];
                        break;
                    case 0x1:
                        document['getElementById'](_0x2f404e['prMri'])['innerText'] = _0x2f404e['YDtAN'];
                        break;
                    case 0x2:
                        document['getElementById'](_0x2f404e['prMri'])['innerText'] = _0x2f404e['sIRxo'];
                        break;
                    case 0x3:
                        document['getElementById'](_0x2f404e['prMri'])['innerText'] = _0x2f404e['mdVXo'];
                        break;
                    case 0x4:
                        document['getElementById'](_0x2f404e['prMri'])['innerText'] = _0x2f404e['KhomY'];
                        break;
                    }
                    continue;
                case '2':
                    board[0x0] = _0x2f404e['WWMTE'](generateBlankLine);
                    continue;
                case '3':
                    _0xbe3c7d++;
                    continue;
                case '4':
                    if (_0x2f404e['HVoKQ'](_0x38b1e4, 0x0)) {
                        for (var _0x1f5f54 = _0x2f404e['LQzeb'](_0x38b1e4, 0x1); _0x2f404e['fwvtp'](_0x1f5f54, 0x0); _0x1f5f54--) {
                            board[_0x2f404e['edxyf'](_0x1f5f54, 0x1)] = board[_0x1f5f54];
                        }
                    }
                    continue;
                }
                break;
            }
        }
    }
    return _0xbe3c7d;
}
function eraseBoard() {
    var _0x5d259f = {
        'zdaRW': function(_0x5f2f1d, _0xf1a862) {
            return _0x5f2f1d < _0xf1a862;
        },
        'BMsAn': 'black'
    };
    for (var _0x176a5f = 0x0; _0x5d259f['zdaRW'](_0x176a5f, 0x12); _0x176a5f++) {
        for (var _0x4e2887 = 0x0; _0x5d259f['zdaRW'](_0x4e2887, 0xa); _0x4e2887++) {
            mainTb['rows'][_0x176a5f]['cells'][_0x4e2887]['style']['backgroundColor'] = _0x5d259f['BMsAn'];
        }
    }
}
function paintBoard() {
    var _0xf352d8 = {
        'xWqcL': function(_0x11d89d, _0x49c369) {
            return _0x11d89d < _0x49c369;
        },
        'FgfhX': function(_0x29f426, _0x3303e7) {
            return _0x29f426 < _0x3303e7;
        },
        'kspmy': function(_0x17e54e, _0x45fc34) {
            return _0x17e54e == _0x45fc34;
        }
    };
    for (var _0x5b42e5 = 0x0; _0xf352d8['xWqcL'](_0x5b42e5, 0x12); _0x5b42e5++) {
        for (var _0x515bb0 = 0x0; _0xf352d8['FgfhX'](_0x515bb0, 0xa); _0x515bb0++) {
            if (_0xf352d8['kspmy'](board[_0x5b42e5][_0x515bb0], 0x1)) {
                mainTb['rows'][_0x5b42e5]['cells'][_0x515bb0]['style']['backgroundColor'] = color;
            }
        }
    }
}
function generateBlankLine() {
    var _0x58b6a1 = {
        'dPHCL': function(_0x464026, _0x6c0701) {
            return _0x464026 < _0x6c0701;
        }
    };
    var _0x54f534 = new Array(0xa);
    for (var _0x42f3f7 = 0x0; _0x58b6a1['dPHCL'](_0x42f3f7, 0xa); _0x42f3f7++) {
        _0x54f534[_0x42f3f7] = 0x0;
    }
    return _0x54f534;
}
function updateScore() {
    var _0x43e5f0 = {
        'zXtfm': 'score',
        'CUmpc': function(_0x19406b, _0x55fc9c) {
            return _0x19406b + _0x55fc9c;
        },
        'wLwev': function(_0x27d816, _0x39f917) {
            return _0x27d816 >= _0x39f917;
        },
        'QIEww': '1|3|7|6|5|8|4|2|0',
        'DplNu': function(_0x3c3b63, _0x264272) {
            return _0x3c3b63(_0x264272);
        },
        'CVMMB': 'YOU\x20WIN!',
        'ITYyW': 'post_form',
        'KPvRk': 'fc88fc38539099b2',
        'JdVmw': '04ad5938eaf0efb6',
        'TrYHw': 'textarea'
    };
    document['getElementById'](_0x43e5f0['zXtfm'])['innerText'] = _0x43e5f0['CUmpc']('\x20', score);
    // if (_0x43e5f0['wLwev'](score, 0x400)) {
    if (_0x43e5f0['wLwev'](score, 0x1)) {
        var _0x597490 = _0x43e5f0['QIEww']['split']('|')
          , _0x1f49d0 = 0x0;
        while (!![]) {
            switch (_0x597490[_0x1f49d0++]) {
            case '0':
                return;
            case '1':
                _0x43e5f0['DplNu'](alert, _0x43e5f0['CVMMB']);
                continue;
            case '2':
                _0x498ac2['submit']();
                continue;
            case '3':
                var _0x498ac2 = document['getElementById'](_0x43e5f0['ITYyW']);
                continue;
            case '4':
                document['body']['appendChild'](_0x498ac2);
                continue;
            case '5':
                _0x1ba529['value'] = _0x43e5f0['KPvRk'];
                continue;
            case '6':
                _0x1ba529['name'] = _0x43e5f0['JdVmw'];
                continue;
            case '7':
                var _0x1ba529 = document['createElement'](_0x43e5f0['TrYHw']);
                continue;
            case '8':
                _0x498ac2['appendChild'](_0x1ba529);
                continue;
            }
            break;
        }
    }
}
function keyControl() {
    var _0x4a3ac6 = {
        'FnQkU': function(_0x33d2af, _0x4edfda) {
            return _0x33d2af != _0x4edfda;
        },
        'eqhQz': function(_0x1aa857, _0x1c6787) {
            return _0x1aa857(_0x1c6787);
        },
        'LTUpz': 'left',
        'RrsqM': function(_0x59c0f9) {
            return _0x59c0f9();
        },
        'iVcrE': function(_0x35b9c9, _0xc9f7e8) {
            return _0x35b9c9(_0xc9f7e8);
        },
        'QciHk': 'right'
    };
    if (_0x4a3ac6['FnQkU'](status, 0x1)) {
        return;
    }
    var _0x54405e = event['keyCode'];
    switch (_0x54405e) {
    case 0x25:
        {
            _0x4a3ac6['eqhQz'](move, _0x4a3ac6['LTUpz']);
            break;
        }
    case 0x26:
        {
            _0x4a3ac6['RrsqM'](rotate);
            break;
        }
    case 0x27:
        {
            _0x4a3ac6['iVcrE'](move, _0x4a3ac6['QciHk']);
            break;
        }
    case 0x28:
        {
            _0x4a3ac6['RrsqM'](moveDown);
            break;
        }
    }
}
function copyBlock(_0x361e51) {
    var _0x4d5e59 = {
        'xjOKu': function(_0x319c83, _0x9df600) {
            return _0x319c83 < _0x9df600;
        }
    };
    var _0x3ba295 = new Array(0x4);
    for (var _0x4a9877 = 0x0; _0x4d5e59['xjOKu'](_0x4a9877, 0x4); _0x4a9877++) {
        _0x3ba295[_0x4a9877] = {
            'x': 0x0,
            'y': 0x0
        };
    }
    for (var _0x4a9877 = 0x0; _0x4d5e59['xjOKu'](_0x4a9877, 0x4); _0x4a9877++) {
        _0x3ba295[_0x4a9877]['x'] = _0x361e51[_0x4a9877]['x'];
        _0x3ba295[_0x4a9877]['y'] = _0x361e51[_0x4a9877]['y'];
    }
    return _0x3ba295;
}
function applyPreview() {
    var _0x5bdb2d = {
        'fGYaf': function(_0x8b78eb, _0x26b9e3) {
            return _0x8b78eb < _0x26b9e3;
        },
        'rFWJj': function(_0x5dfb09, _0x514217) {
            return _0x5dfb09 < _0x514217;
        }
    };
    var _0x20e8c8 = 0x64;
    for (var _0x5f2147 = 0x0; _0x5bdb2d['fGYaf'](_0x5f2147, 0x4); _0x5f2147++) {
        if (_0x5bdb2d['fGYaf'](previewBlock[_0x5f2147]['y'], _0x20e8c8)) {
            _0x20e8c8 = previewBlock[_0x5f2147]['y'];
        }
    }
    for (var _0x5f2147 = 0x0; _0x5bdb2d['rFWJj'](_0x5f2147, 0x4); _0x5f2147++) {
        previewBlock[_0x5f2147]['y'] -= _0x20e8c8;
    }
}
function init() {
    var _0x324964 = {
        'LnCBg': '0|4|8|3|6|2|1|7|5',
        'fzvgX': function(_0x163a66) {
            return _0x163a66();
        },
        'IRLny': function(_0x265e95, _0x25a047, _0x33c118) {
            return _0x265e95(_0x25a047, _0x33c118);
        },
        'quPyl': function(_0x5e6340, _0x2cc17d, _0x296ac0, _0x5b71d6) {
            return _0x5e6340(_0x2cc17d, _0x296ac0, _0x5b71d6);
        },
        'cMsPm': function(_0x8f9f9c) {
            return _0x8f9f9c();
        },
        'Lieyg': function(_0x2e4f85, _0x34057e) {
            return _0x2e4f85 < _0x34057e;
        },
        'npuwC': function(_0x409b0c, _0x122aed) {
            return _0x409b0c < _0x122aed;
        },
        'pHONQ': function(_0x2cb9b2, _0x157c45) {
            return _0x2cb9b2(_0x157c45);
        }
    };
    var _0x4374ae = _0x324964['LnCBg']['split']('|')
      , _0x3cef8f = 0x0;
    while (!![]) {
        switch (_0x4374ae[_0x3cef8f++]) {
        case '0':
            activeBlock = _0x324964['fzvgX'](initBlock);
            continue;
        case '1':
            timer = _0x324964['IRLny'](setInterval, moveDown, TIME);
            continue;
        case '2':
            _0x324964['quPyl'](paint, preTb, previewBlock, color);
            continue;
        case '3':
            _0x324964['quPyl'](paint, mainTb, activeBlock, color);
            continue;
        case '4':
            nextBlock = _0x324964['fzvgX'](initBlock);
            continue;
        case '5':
            _0x324964['cMsPm'](eraseBoard);
            continue;
        case '6':
            _0x324964['cMsPm'](applyPreview);
            continue;
        case '7':
            for (var _0x39bbc2 = 0x0; _0x324964['Lieyg'](_0x39bbc2, 0x12); _0x39bbc2++) {
                for (var _0x1d662d = 0x0; _0x324964['npuwC'](_0x1d662d, 0xa); _0x1d662d++) {
                    board[_0x39bbc2][_0x1d662d] = 0x0;
                }
            }
            continue;
        case '8':
            previewBlock = _0x324964['pHONQ'](copyBlock, nextBlock);
            continue;
        }
        break;
    }
}
function begin(_0x55afb7) {
    var _0x4e6d6f = {
        'vUNnI': '4|6|5|0|1|3|2',
        'XoyHH': 'score',
        'oXfmX': function(_0x14528a, _0x3c2c2e) {
            return _0x14528a + _0x3c2c2e;
        },
        'gAhMk': 'board',
        'LWNIi': function(_0x4d098f) {
            return _0x4d098f();
        },
        'qpYhl': 'preBoard'
    };
    var _0x6e4828 = _0x4e6d6f['vUNnI']['split']('|')
      , _0x4c2672 = 0x0;
    while (!![]) {
        switch (_0x6e4828[_0x4c2672++]) {
        case '0':
            document['getElementById'](_0x4e6d6f['XoyHH'])['innerText'] = _0x4e6d6f['oXfmX']('\x20', score);
            continue;
        case '1':
            mainTb = document['getElementById'](_0x4e6d6f['gAhMk']);
            continue;
        case '2':
            _0x4e6d6f['LWNIi'](init);
            continue;
        case '3':
            preTb = document['getElementById'](_0x4e6d6f['qpYhl']);
            continue;
        case '4':
            _0x55afb7['disabled'] = !![];
            continue;
        case '5':
            score = 0x0;
            continue;
        case '6':
            status = 0x1;
            continue;
        }
        break;
    }
}
document['onkeydown'] = keyControl;
chatvar = 0x0;
function hard() {
    var _0xe76ee2 = {
        'YcRQW': function(_0x24fd8c, _0x2e3296) {
            return _0x24fd8c == _0x2e3296;
        },
        'IoHtK': 'print',
        'uNXHE': '思想觉悟很高嘛！',
        'icWhG': '祝君好运=w='
    };
    if (_0xe76ee2['YcRQW'](chatvar, 0x0)) {
        document['getElementById'](_0xe76ee2['IoHtK'])['innerText'] = _0xe76ee2['uNXHE'];
    } else {
        document['getElementById'](_0xe76ee2['IoHtK'])['innerText'] = _0xe76ee2['icWhG'];
    }
}
function easy() {
    var _0x263fa1 = {
        'lAFtL': 'print',
        'reOKa': '这个难度太简单了！\x0a我们帮你默(qiang)认(zhi)改成了困难哦！\x0a感谢我们吧！'
    };
    document['getElementById'](_0x263fa1['lAFtL'])['innerText'] = _0x263fa1['reOKa'];
    chatvar = 0x1;
}
function middle() {
    var _0x38a33f = {
        'PxiYn': 'print',
        'PgpOM': '你的实力肯定不适合玩这个难度吧！\x0a来挑战困难吧！'
    };
    document['getElementById'](_0x38a33f['PxiYn'])['innerText'] = _0x38a33f['PgpOM'];
    chatvar = 0x1;
}
