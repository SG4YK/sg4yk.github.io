// modified by sg4yk
dd = 0.2;
cfa = document['getElementById']('father');
canv = document['getElementById']('gc');
ctx = canv['getContext']('2d');
canv2 = document['getElementById']('gc2');
ctx2 = canv2['getContext']('2d');
ined = document['getElementById']('ed');
bu = document['getElementById']('bu');
mes = document['getElementById']('mes');
outm = document['getElementById']('outm');
x = 0.1;
y = 0.1;
size = Math['min'](window['innerWidth'], window['innerHeight']) * 0.65;
cfa['style']['width'] = size + 'px';
cfa['style']['height'] = size + 'px';
canv['width'] = size;
canv['height'] = size;
canv2['width'] = size;
canv2['height'] = size;
levels = ['x', 'x^2', 'x<0', '0.1/x', 'abs(x)', 'abs(x^3)', 'sin(10x)<10y', 'sin(PI*x)', 'exp(E*x)', 'x%0.2>y', 'sqrt(0.5-x^2)', 'x^2+x', 'x^2+y^2<0.5', 'ceil(x*10)/10', 'x^3+0.3*x^2-0.5*x-0.3', 'x^10+y^10<0.1', 'tan(x^2*3.8)', 'ceil(x*10)/10+floor(x*10)/10', 'min(x^2-x,x)', 'sin(x)^2+sin(y)^2<0.5', 'tan(x)^2+tan(y)^2<0.5', 'sin(10x+0.3sin(1000x))', 'log(E*x)', 'gamma(10x)/10', 'x\x20mod\x200.4', 'x^x', 'pow(x^3,x)', 'abs(sin(x))', '((2x)^2+(2y)^2-1)^3<(2x)^2(2y)^3', 'x*y<0', 'x*y<0.1', 'x<-0.2\x20or\x20x>0.2', '-0.8<x<0.2', '-0.2<x<y<0.2', '(abs(x)-0.5)^2+y^2<0.1', 'abs(sin(x^2*5))', 'max(x%0.2,sin(10*PI*x))', 'gamma(abs(x)*10)/10', 'max(sin(x*10)/10,cos(x*10)/10)', 'log(abs(x*5)-0.1)/5', 'x%(0.2)+sin(x*10)/10', 'max(0,x)', 'max(0.1x,x)', 'sign(sin(x*10))/10', 'atan(x*1.5)', 'tanh(x*1.5)', '1/(1+e^(-x*10))', 'sign(sin(x*1000))/2', '0.1sin(10x)+0.2sin(20x)+0.3sin(30x)+0.4sin(40x)', 'abs(x)+abs(y)<0.5', 'sin(10x)%1-0.5', '0.2*isPrime(ceil(x*20))', 'norm(cos(i*10x))/10', 'gcd(6,ceil(10*x))/10', 'sin(PI*(x+sin(x*1000)))'];
ses = [[-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [], [-0x64, 0x64], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [], [0x64, 0x1004], [-0x7d0, 0x7d0], [], [-0x320, 0x320], [-0x7d0, 0x7d0], [], [0x7d1, 0x1771], [-0x7d0, 0x7d0], [], [-0x7d0, 0x7d0], [-0xbb9, 0x3e9], [-0x7d0, 0x7d0], [], [], [-0x7d0, 0x7d0], [-0x64, 0x1004], [-0x3e8, 0x3e8], [-0x7d0, 0x7d0], [0x0, 0xfa0], [0x0, 0xfa0], [-0x7d0, 0x7d0], [], [], [], [], [], [], [], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x12c, -0xc8], [-0x7d0, 0x7d0], [0x7d0, 0x1770], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0], [], [-0x7d0, 0x7d0], [0x0, 0xfa0], [-0x1f4, 0x1f4], [-0x7d0, 0x7d0], [-0x7d0, 0x7d0]];
qab = 0x0;
qa = 0x0;
qb = 0x0;
ltype = '';
lvn = 0x0;
score = 0x20000;
R = Infinity;
reCanvas2();
reCanvas();
nextLevel();
ined['value'] = '((2x)^2+(2y)^2-1)^3<(2x)^2(2y)^3';
plot(ined['value'], 'red', 'boolean');
function reMes() {
    var _0x18bc26 = {
        'Kyqvo': function(_0x39df90, _0x1d97d1) {
            return _0x39df90 + _0x1d97d1;
        },
        'DZUWs': function(_0x5ebb83, _0x69b255) {
            return _0x5ebb83 + _0x69b255;
        },
        'BjzLC': function(_0x94bca6, _0x103bf1) {
            return _0x94bca6 + _0x103bf1;
        },
        'SQptj': function(_0xb6d515, _0x249742) {
            return _0xb6d515 + _0x249742;
        },
        'MrJod': function(_0x2d5266, _0x3ae4e8) {
            return _0x2d5266 + _0x3ae4e8;
        },
        'oEsKo': '关卡：',
        'oRSeZ': '；得分：',
        'WsyFT': '；当前残差：'
    };
    mes['innerHTML'] = _0x18bc26['Kyqvo'](_0x18bc26['DZUWs'](_0x18bc26['BjzLC'](_0x18bc26['SQptj'](_0x18bc26['MrJod'](_0x18bc26['oEsKo'], lvn), _0x18bc26['oRSeZ']), score), _0x18bc26['WsyFT']), R);
}
function nextLevel() {
    var _0x273dfe = {
        'GGuyR': '10|13|0|7|2|9|8|1|3|11|6|12|5|4',
        'GTGaZ': function(_0x5c4799, _0x2a6a40) {
            return _0x5c4799(_0x2a6a40);
        },
        'OMCGT': function(_0x1fb17b, _0xecc93) {
            return _0x1fb17b - _0xecc93;
        },
        'kMMFe': function(_0x35c312) {
            return _0x35c312();
        },
        'DearS': function(_0xbdecf6, _0xc12d6c) {
            return _0xbdecf6 > _0xc12d6c;
        },
        'swEVA': function(_0x1403a6, _0x1aad8b) {
            return _0x1403a6 + _0x1aad8b;
        },
        'lKcsr': function(_0x3b1773, _0x43cfbe) {
            return _0x3b1773 + _0x43cfbe;
        },
        'zpYXq': '你已通关！你的平均得分是',
        'Nmqlt': function(_0x49105e, _0x2bbe61) {
            return _0x49105e / _0x2bbe61;
        },
        'tNthG': '分（满分20000）。flag:\x201db8d352466b5e5b',
        'PlVBA': function(_0x882b81, _0x3cdc1a) {
            return _0x882b81 != _0x3cdc1a;
        },
        'RMPlZ': function(_0x2dcb43, _0x21cbbc) {
            return _0x2dcb43(_0x21cbbc);
        },
        'AbdHk': function(_0x29c0ba, _0x1ae0a0) {
            return _0x29c0ba * _0x1ae0a0;
        },
        'EhSlR': function(_0x3db314) {
            return _0x3db314();
        }
    };
    var _0x4d449a = _0x273dfe['GGuyR']['split']('|')
      , _0x143401 = 0x0;
    while (!![]) {
        switch (_0x4d449a[_0x143401++]) {
        case '0':
            y = 0.1;
            continue;
        case '1':
            R = Infinity;
            continue;
        case '2':
            qa = 0x0;
            continue;
        case '3':
            ined['value'] = '';
            continue;
        case '4':
            _0x273dfe['GTGaZ'](plot2, levels[_0x273dfe['OMCGT'](lvn, 0x1)]);
            continue;
        case '5':
            _0x273dfe['kMMFe'](reCanvas);
            continue;
        case '6':
            if (_0x273dfe['DearS'](lvn, levels['length'])) {
                _0x273dfe['GTGaZ'](alert, _0x273dfe['swEVA'](_0x273dfe['lKcsr'](_0x273dfe['zpYXq'], _0x273dfe['Nmqlt'](score, levels['length'])), _0x273dfe['tNthG']));
                return;
            }
            continue;
        case '7':
            qab = 0x0;
            continue;
        case '8':
            if (_0x273dfe['PlVBA'](R, Infinity) && !_0x273dfe['RMPlZ'](isNaN, R)) {
                score += Math['trunc'](_0x273dfe['AbdHk'](0x186a0, _0x273dfe['OMCGT'](dd, R)));
            }
            continue;
        case '9':
            qb = 0x0;
            continue;
        case '10':
            lvn += 0x1;
            continue;
        case '11':
            outm['innerHTML'] = '';
            continue;
        case '12':
            _0x273dfe['EhSlR'](reCanvas2);
            continue;
        case '13':
            x = 0.1;
            continue;
        }
        break;
    }
}
function buOnClick() {
    var _0x2583ac = {
        'vAGHk': function(_0x2621ff) {
            return _0x2621ff();
        },
        'uvlWT': '1px\x20solid\x20red'
    };
    _0x2583ac['vAGHk'](nextLevel);
    bu['disabled'] = !![];
    bu['style']['border'] = _0x2583ac['uvlWT'];
}
function reCanvas() {
    var _0x1e8e9a = {
        'mpQqy': '4|2|0|1|3',
        'tcUZH': '1px\x20solid\x20red',
        'CeKVx': function(_0x4b66d0) {
            return _0x4b66d0();
        }
    };
    var _0x5c5cf3 = _0x1e8e9a['mpQqy']['split']('|')
      , _0xb7980a = 0x0;
    while (!![]) {
        switch (_0x5c5cf3[_0xb7980a++]) {
        case '0':
            R = Infinity;
            continue;
        case '1':
            bu['style']['border'] = _0x1e8e9a['tcUZH'];
            continue;
        case '2':
            bu['disabled'] = !![];
            continue;
        case '3':
            _0x1e8e9a['CeKVx'](reMes);
            continue;
        case '4':
            canv['width'] = canv['width'];
            continue;
        }
        break;
    }
}
function reCanvas2() {
    var _0x492ff4 = {
        'rjfWE': '6|3|1|2|5|4|0',
        'gaoFM': function(_0x236de7, _0xc39b2b) {
            return _0x236de7 / _0xc39b2b;
        },
        'OhRnu': function(_0x289727, _0x4025cf) {
            return _0x289727 / _0x4025cf;
        },
        'ueKpv': 'gray'
    };
    var _0x749328 = _0x492ff4['rjfWE']['split']('|')
      , _0x15b98d = 0x0;
    while (!![]) {
        switch (_0x749328[_0x15b98d++]) {
        case '0':
            ctx2['stroke']();
            continue;
        case '1':
            ctx2['moveTo'](_0x492ff4['gaoFM'](size, 0x2), 0x0);
            continue;
        case '2':
            ctx2['lineTo'](_0x492ff4['OhRnu'](size, 0x2), size);
            continue;
        case '3':
            ctx2['strokeStyle'] = _0x492ff4['ueKpv'];
            continue;
        case '4':
            ctx2['lineTo'](size, _0x492ff4['OhRnu'](size, 0x2));
            continue;
        case '5':
            ctx2['moveTo'](0x0, _0x492ff4['OhRnu'](size, 0x2));
            continue;
        case '6':
            canv2['width'] = canv2['width'];
            continue;
        }
        break;
    }
}
function plot(_0x224be1, _0x41784a, _0x17037a) {
    var _0x4b550d = {
        'mtPUu': function(_0x1b2d7a) {
            return _0x1b2d7a();
        },
        'XZVJB': function(_0x4b7d89, _0x5a3451) {
            return _0x4b7d89 == _0x5a3451;
        },
        'OaXgt': 'boolean',
        'ImFkR': '0|3|2|4|1',
        'ByKJx': function(_0x2bf089, _0x13e645) {
            return _0x2bf089 - _0x13e645;
        },
        'RkSEK': function(_0x5b75ef, _0x1b06cc) {
            return _0x5b75ef <= _0x1b06cc;
        },
        'lnCaf': function(_0x2700eb, _0x525d11) {
            return _0x2700eb <= _0x525d11;
        },
        'RSLrZ': function(_0x514d28, _0x2bad71) {
            return _0x514d28 / _0x2bad71;
        },
        'EaSVH': function(_0x2a4ff0, _0x3ff7cf) {
            return _0x2a4ff0 * _0x3ff7cf;
        },
        'ASkNm': function(_0x138573, _0x274c16) {
            return _0x138573 / _0x274c16;
        },
        'nNFaP': function(_0x391f6b, _0x4b485f) {
            return _0x391f6b / _0x4b485f;
        },
        'YNnvg': function(_0x4f1907, _0x6562e0) {
            return _0x4f1907 == _0x6562e0;
        },
        'gsNey': function(_0x4bbeea, _0x20d87e) {
            return _0x4bbeea != _0x20d87e;
        },
        'KCdoA': function(_0x1d4849, _0x20e59e) {
            return _0x1d4849(_0x20e59e);
        },
        'GLDzH': function(_0x1d3bbd, _0x30752a) {
            return _0x1d3bbd * _0x30752a;
        },
        'dWuVv': function(_0x37ea04, _0x1b7081) {
            return _0x37ea04 * _0x1b7081;
        },
        'FRJOo': function(_0x371427, _0x554eaf) {
            return _0x371427 - _0x554eaf;
        },
        'btBVo': function(_0x59e03e, _0x2b90a8) {
            return _0x59e03e + _0x2b90a8;
        },
        'lionO': function(_0x447cfd, _0x7f1b66) {
            return _0x447cfd > _0x7f1b66;
        },
        'SEIxm': 'number',
        'dqlbD': function(_0x811f31, _0x35a44e) {
            return _0x811f31 * _0x35a44e;
        },
        'fiPly': function(_0x68b8ff, _0x116cda) {
            return _0x68b8ff != _0x116cda;
        },
        'EfHZM': function(_0x59f146, _0xd07e6c) {
            return _0x59f146 < _0xd07e6c;
        },
        'BElWs': function(_0x14bc3e, _0x79b54) {
            return _0x14bc3e - _0x79b54;
        },
        'chKwN': function(_0x455051, _0x4bc084) {
            return _0x455051 * _0x4bc084;
        },
        'KvtcJ': function(_0xf16e25, _0x56a14c) {
            return _0xf16e25 * _0x56a14c;
        },
        'sBbsX': function(_0x4c204b, _0x1d07bb) {
            return _0x4c204b - _0x1d07bb;
        },
        'kbfwI': function(_0x151e9d, _0x3c3828) {
            return _0x151e9d * _0x3c3828;
        },
        'PxfmC': function(_0x110b0e, _0x140dfe) {
            return _0x110b0e(_0x140dfe);
        },
        'JlnPl': function(_0x167bb2, _0x499db2, _0x36281f) {
            return _0x167bb2(_0x499db2, _0x36281f);
        },
        'ibYRb': function(_0x1ffb86, _0x5cf002) {
            return _0x1ffb86 - _0x5cf002;
        }
    };
    comp = math['compile'](_0x224be1);
    _0x4b550d['mtPUu'](reCanvas);
    ctx['fillStyle'] = _0x41784a;
    if (_0x4b550d['XZVJB'](_0x17037a, _0x4b550d['OaXgt'])) {
        var _0x2f0e65 = _0x4b550d['ImFkR']['split']('|')
          , _0x2f28ab = 0x0;
        while (!![]) {
            switch (_0x2f0e65[_0x2f28ab++]) {
            case '0':
                comp2 = math['compile'](levels[_0x4b550d['ByKJx'](lvn, 0x1)]);
                continue;
            case '1':
                _0x4b550d['mtPUu'](judge);
                continue;
            case '2':
                for (var _0x2d2f70 = 0x0; _0x4b550d['RkSEK'](_0x2d2f70, size); _0x2d2f70 += jd) {
                    for (var _0xc2a7c6 = 0x0; _0x4b550d['lnCaf'](_0xc2a7c6, size); _0xc2a7c6 += jd) {
                        x = _0x4b550d['RSLrZ'](_0x4b550d['ByKJx'](_0x4b550d['EaSVH'](0x2, _0x2d2f70), size), size);
                        y = _0x4b550d['ASkNm'](-_0x4b550d['ByKJx'](_0x4b550d['EaSVH'](0x2, _0xc2a7c6), size), size);
                        ans = comp['evaluate']({
                            'x': x,
                            'y': y
                        });
                        if (_0x4b550d['XZVJB'](ans, !![])) {
                            ctx['fillRect'](_0x2d2f70, _0xc2a7c6, _0x4b550d['nNFaP'](jd, 0x2), _0x4b550d['nNFaP'](jd, 0x2));
                            qb += 0x1;
                            if (_0x4b550d['YNnvg'](comp2['evaluate']({
                                'x': x,
                                'y': y
                            }), !![])) {
                                qab += 0x1;
                            }
                        }
                    }
                }
                continue;
            case '3':
                jd = _0x4b550d['nNFaP'](size, 0xc8);
                continue;
            case '4':
                if (_0x4b550d['gsNey'](ltype, _0x4b550d['OaXgt'])) {
                    R = Infinity;
                } else {
                    R = _0x4b550d['KCdoA'](parseFloat, _0x4b550d['nNFaP'](Math['tan'](_0x4b550d['GLDzH'](_0x4b550d['dWuVv'](0.5, Math['PI']), _0x4b550d['ByKJx'](0x1, _0x4b550d['nNFaP'](qab, _0x4b550d['FRJOo'](_0x4b550d['btBVo'](qa, qb), qab))))), 0x2)['toFixed'](0x6));
                    if (_0x4b550d['lionO'](R, 0x5f5e100)) {
                        R = Infinity;
                    }
                    qab = 0x0;
                    qb = 0x0;
                }
                continue;
            }
            break;
        }
    } else if (_0x4b550d['YNnvg'](_0x17037a, _0x4b550d['SEIxm'])) {
        for (var _0x2d2f70 = _0x4b550d['dqlbD'](-0xa, size); _0x4b550d['lnCaf'](_0x2d2f70, _0x4b550d['dqlbD'](0xa, size)); _0x2d2f70++) {
            x = _0x4b550d['nNFaP'](_0x2d2f70, _0x4b550d['dqlbD'](0xa, size));
            y = comp['evaluate']({
                'x': x,
                'y': y
            });
            if (_0x4b550d['fiPly'](typeof y, _0x4b550d['SEIxm']) || _0x4b550d['lionO'](y, 0x1) || _0x4b550d['EfHZM'](y, -0x1) || _0x4b550d['KCdoA'](isNaN, y)) {
                continue;
            }
            ctx['fillRect'](_0x4b550d['BElWs'](_0x4b550d['chKwN'](_0x4b550d['KvtcJ'](_0x4b550d['btBVo'](x, 0x1), 0.5), size), 0x1), _0x4b550d['sBbsX'](_0x4b550d['kbfwI'](_0x4b550d['kbfwI'](_0x4b550d['sBbsX'](0x1, y), size), 0.5), 0x1), 0x2, 0x2);
        }
        if (_0x4b550d['fiPly'](ltype, _0x4b550d['SEIxm'])) {
            R = Infinity;
        } else {
            R = _0x4b550d['PxfmC'](parseFloat, _0x4b550d['JlnPl'](calR, _0x224be1, levels[_0x4b550d['ibYRb'](lvn, 0x1)])['toFixed'](0x6));
        }
        _0x4b550d['mtPUu'](judge);
    }
}
function judge() {
    var _0x1e2712 = {
        'xOjFj': function(_0x41ee66) {
            return _0x41ee66();
        },
        'BaqMh': function(_0x3eee3a, _0xe0eaef) {
            return _0x3eee3a < _0xe0eaef;
        },
        'heHun': '1px\x20solid\x20green',
        'EiJaU': '1px\x20solid\x20red'
    };
    _0x1e2712['xOjFj'](reMes);
    // if (_0x1e2712['BaqMh'](R, dd)) {
    //     bu['disabled'] = ![];
    //     bu['style']['border'] = _0x1e2712['heHun'];
    // } else {
    //     bu['disabled'] = !![];
    //     bu['style']['border'] = _0x1e2712['EiJaU'];
    // }
    bu['disabled'] = ![];
    bu['style']['border'] = _0x1e2712['heHun'];
}
function calR(_0x16ef62, _0x47e7f0) {
    var _0x54d447 = {
        'LpciM': function(_0x44efe6, _0x124ad1) {
            return _0x44efe6 - _0x124ad1;
        },
        'oIDux': function(_0x260354, _0x2a7845) {
            return _0x260354 <= _0x2a7845;
        },
        'YjSuU': function(_0x5723af, _0x448cc4) {
            return _0x5723af / _0x448cc4;
        },
        'nMsYD': function(_0x1e16da, _0x38bb36) {
            return _0x1e16da != _0x38bb36;
        },
        'mikVJ': 'number',
        'hjJIJ': function(_0x59975d, _0x3bd778) {
            return _0x59975d == _0x3bd778;
        },
        'gHOGr': function(_0x20e95d, _0x4dea8f) {
            return _0x20e95d == _0x4dea8f;
        },
        'rGGYC': function(_0x3f6c47, _0x31f096) {
            return _0x3f6c47(_0x31f096);
        },
        'PquzG': function(_0x1ccd20, _0xec9c57) {
            return _0x1ccd20 / _0xec9c57;
        },
        'TvBpM': function(_0x190448, _0x5363b3) {
            return _0x190448 - _0x5363b3;
        }
    };
    r = 0x0;
    comp = math['compile'](_0x16ef62);
    comp2 = math['compile'](_0x47e7f0);
    start = ses[_0x54d447['LpciM'](lvn, 0x1)][0x0];
    end = ses[_0x54d447['LpciM'](lvn, 0x1)][0x1];
    for (var _0x37830b = start; _0x54d447['oIDux'](_0x37830b, end); _0x37830b++) {
        x = _0x54d447['YjSuU'](_0x37830b, 0x7d0);
        y1 = comp['evaluate']({
            'x': x,
            'y': y
        });
        y2 = comp2['evaluate']({
            'x': x,
            'y': y
        });
        if (_0x54d447['nMsYD'](typeof y2, _0x54d447['mikVJ'])) {
            continue;
        }
        if (_0x54d447['hjJIJ'](y2, -Infinity) || _0x54d447['gHOGr'](y2, Infinity) || _0x54d447['rGGYC'](isNaN, y1)) {
            continue;
        }
        r += Math['abs'](_0x54d447['LpciM'](y1, y2));
    }
    return _0x54d447['PquzG'](r, _0x54d447['TvBpM'](end, start));
}
function plot2(_0x522e1c) {
    var _0x2eaea1 = {
        'jilTG': 'gray',
        'tJVzH': function(_0x54487a, _0x4ed099) {
            return _0x54487a == _0x4ed099;
        },
        'qrNBD': 'boolean',
        'zPdWe': function(_0x46a817, _0x414874) {
            return _0x46a817 / _0x414874;
        },
        'WMPDy': function(_0x3b5494, _0x10c46f) {
            return _0x3b5494 <= _0x10c46f;
        },
        'dsNXK': function(_0xe2d37f, _0x4e22c1) {
            return _0xe2d37f <= _0x4e22c1;
        },
        'WvPZt': function(_0x245148, _0x333645) {
            return _0x245148 / _0x333645;
        },
        'DANYO': function(_0x3800a7, _0x31c232) {
            return _0x3800a7 - _0x31c232;
        },
        'tMMLA': function(_0x58b950, _0x4e48c8) {
            return _0x58b950 * _0x4e48c8;
        },
        'jZyPa': function(_0x177041, _0x341660) {
            return _0x177041 / _0x341660;
        },
        'SKXcP': function(_0x3d6e08, _0x57eba2) {
            return _0x3d6e08 == _0x57eba2;
        },
        'xSpyJ': function(_0x171461, _0x40ace2) {
            return _0x171461 / _0x40ace2;
        },
        'rJFkz': 'number',
        'zmuKM': function(_0xb48693, _0x5937a6) {
            return _0xb48693 * _0x5937a6;
        },
        'QuIVx': function(_0x3f3110, _0x3b545d) {
            return _0x3f3110 * _0x3b545d;
        },
        'ENPLX': function(_0x3a0fe7, _0x4a1450) {
            return _0x3a0fe7 != _0x4a1450;
        },
        'XNrpB': function(_0xf4ff97, _0x3e69aa) {
            return _0xf4ff97 > _0x3e69aa;
        },
        'HakqI': function(_0x255fc3, _0x559c1f) {
            return _0x255fc3 < _0x559c1f;
        },
        'cPsoj': function(_0xfb8d49, _0x100dce) {
            return _0xfb8d49 - _0x100dce;
        },
        'PUHFL': function(_0x886a97, _0x1d56fc) {
            return _0x886a97 * _0x1d56fc;
        },
        'fPErX': function(_0x2378de, _0x28307c) {
            return _0x2378de * _0x28307c;
        },
        'ZpNhK': function(_0x1297e8, _0x9c5f61) {
            return _0x1297e8 + _0x9c5f61;
        },
        'OPpRm': function(_0x327527, _0xe78c43) {
            return _0x327527 * _0xe78c43;
        }
    };
    comp = math['compile'](_0x522e1c);
    outeval = comp['evaluate']({
        'x': x,
        'y': y
    });
    ltype = typeof outeval;
    ctx2['fillStyle'] = _0x2eaea1['jilTG'];
    if (_0x2eaea1['tJVzH'](ltype, _0x2eaea1['qrNBD'])) {
        jd = _0x2eaea1['zPdWe'](size, 0xc8);
        for (var _0x1d8bff = 0x0; _0x2eaea1['WMPDy'](_0x1d8bff, size); _0x1d8bff += jd) {
            for (var _0x456342 = 0x0; _0x2eaea1['dsNXK'](_0x456342, size); _0x456342 += jd) {
                x = _0x2eaea1['WvPZt'](_0x2eaea1['DANYO'](_0x2eaea1['tMMLA'](0x2, _0x1d8bff), size), size);
                y = _0x2eaea1['jZyPa'](-_0x2eaea1['DANYO'](_0x2eaea1['tMMLA'](0x2, _0x456342), size), size);
                if (_0x2eaea1['SKXcP'](comp['evaluate']({
                    'x': x,
                    'y': y
                }), !![])) {
                    ctx2['fillRect'](_0x1d8bff, _0x456342, _0x2eaea1['jZyPa'](jd, 0x2), _0x2eaea1['xSpyJ'](jd, 0x2));
                    qa += 0x1;
                }
            }
        }
    } else if (_0x2eaea1['SKXcP'](ltype, _0x2eaea1['rJFkz'])) {
        for (var _0x1d8bff = _0x2eaea1['zmuKM'](-0xa, size); _0x2eaea1['dsNXK'](_0x1d8bff, _0x2eaea1['zmuKM'](0xa, size)); _0x1d8bff++) {
            x = _0x2eaea1['xSpyJ'](_0x1d8bff, _0x2eaea1['QuIVx'](0xa, size));
            y = comp['evaluate']({
                'x': x,
                'y': y
            });
            if (_0x2eaea1['ENPLX'](typeof y, _0x2eaea1['rJFkz']) || _0x2eaea1['XNrpB'](y, 0x1) || _0x2eaea1['HakqI'](y, -0x1)) {
                continue;
            }
            ctx2['fillRect'](_0x2eaea1['cPsoj'](_0x2eaea1['PUHFL'](_0x2eaea1['fPErX'](_0x2eaea1['ZpNhK'](x, 0x1), 0.5), size), 0x1), _0x2eaea1['cPsoj'](_0x2eaea1['fPErX'](_0x2eaea1['OPpRm'](_0x2eaea1['cPsoj'](0x1, y), size), 0.5), 0x1), 0x2, 0x2);
        }
    }
}
function inChange() {
    var _0x8a4da = {
        'zhLMx': '0|1|2|4|3',
        'UGAoq': function(_0x22c5c4, _0x41779e) {
            return _0x22c5c4 == _0x41779e;
        },
        'xsMZf': function(_0x5739a3) {
            return _0x5739a3();
        },
        'rWZOI': '0/0',
        'CCahk': function(_0x200513, _0x2b6873) {
            return _0x200513 == _0x2b6873;
        },
        'iQKUj': 'NaN',
        'zOarv': function(_0xab43dc, _0x114325) {
            return _0xab43dc == _0x114325;
        },
        'iilwd': function(_0x3204b6, _0x5cce89) {
            return _0x3204b6 != _0x5cce89;
        },
        'FLkdU': 'object',
        'hJtZW': function(_0x432de4, _0x2edc69, _0x4dc55b, _0x4c0e82) {
            return _0x432de4(_0x2edc69, _0x4dc55b, _0x4c0e82);
        },
        'RZaOe': 'blue',
        'fYZyT': function(_0x18842d, _0x1082a5) {
            return _0x18842d != _0x1082a5;
        },
        'ZsZjY': 'function'
    };
    var _0x5e56a1 = _0x8a4da['zhLMx']['split']('|')
      , _0x50bcf4 = 0x0;
    while (!![]) {
        switch (_0x5e56a1[_0x50bcf4++]) {
        case '0':
            if (_0x8a4da['UGAoq'](ined['value'], '')) {
                _0x8a4da['xsMZf'](reCanvas);
                outm['innerHTML'] = '';
                return;
            }
            continue;
        case '1':
            x = 0.1;
            continue;
        case '2':
            y = 0.1;
            continue;
        case '3':
            if (_0x8a4da['UGAoq'](ined['value'], _0x8a4da['rWZOI']) || _0x8a4da['CCahk'](ined['value'], _0x8a4da['iQKUj'])) {} else if (_0x8a4da['zOarv'](Math['abs'](outeval), Infinity) && _0x8a4da['iilwd'](type, _0x8a4da['FLkdU'])) {} else {
                _0x8a4da['hJtZW'](plot, ined['value'], _0x8a4da['RZaOe'], type);
            }
            continue;
        case '4':
            try {
                outeval = math['evaluate'](ined['value']);
                type = typeof outeval;
                if (_0x8a4da['fYZyT'](type, _0x8a4da['ZsZjY'])) {
                    outm['innerHTML'] = outeval;
                } else {
                    outm['innerHTML'] = _0x8a4da['ZsZjY'];
                }
            } catch (_0x370eeb) {
                outm['innerHTML'] = '';
                try {
                    outeval = math['evaluate'](ined['value'], {
                        'x': x,
                        'y': y
                    });
                } catch (_0x7ad55c) {
                    outeval = Infinity;
                }
                type = typeof outeval;
            }
            continue;
        }
        break;
    }
}
ined['addEventListener']('keydown', function(_0xb14f30) {
    var _0x3ecbcd = {
        'UZxLY': function(_0x5ab904, _0x39e749) {
            return _0x5ab904 == _0x39e749;
        },
        'dIHFt': function(_0x13ae49) {
            return _0x13ae49();
        }
    };
    if (_0x3ecbcd['UZxLY'](_0xb14f30['keyCode'], 0xd)) {
        _0xb14f30['preventDefault']();
        if (bu['disabled']) {
            _0x3ecbcd['dIHFt'](inChange);
        } else {
            bu['click']();
        }
    }
    return;
});
