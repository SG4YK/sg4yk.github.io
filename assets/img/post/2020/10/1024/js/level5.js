let music = new MusicBox('.music-box');
let arr_ans = [0x1, 0x1, 0x5, 0x5, 0x6, 0x6, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x1];
let sign = 0x0;
window['addEventListener']('keydown', function(_0x414df5) {
    var _0x7cc940 = {
        'fsEZG': function(_0x3ca0ae, _0x425f82) {
            return _0x3ca0ae % _0x425f82;
        },
        'RlrgV': function(_0x30ee04, _0x59d113) {
            return _0x30ee04 - _0x59d113;
        },
        'UTFAR': function(_0x1a44f4, _0xf23cce) {
            return _0x1a44f4 == _0xf23cce;
        },
        'tTEea': function(_0x5ce878, _0x985a62) {
            return _0x5ce878 >= _0x985a62;
        },
        'eIHsP': '5|4|1|0|6|2|7|8|3',
        'KBjzu': '04ad5938eaf0efb6',
        'ZKrwu': 'textarea',
        'GBDXz': 'post_form',
        'StGLC': '45f609eedf0d948f',
        'akaah': function(_0x48f5e7, _0x505868) {
            return _0x48f5e7 / _0x505868;
        },
        'eSbBo': function(_0x1077d9, _0x28b21f) {
            return _0x1077d9 - _0x28b21f;
        },
        'dLUhN': function(_0x391ab0, _0x36d6ec) {
            return _0x391ab0 / _0x36d6ec;
        }
    };
    let _0x3da397 = _0x7cc940['fsEZG'](_0x7cc940['RlrgV'](_0x414df5['keyCode'], 0x30), music['arrFrequency']['length']);
    if (_0x7cc940['UTFAR'](_0x3da397, arr_ans[sign])) {
        sign++;
        if (_0x7cc940['tTEea'](sign, arr_ans['length'])) {
            var _0x2320d8 = _0x7cc940['eIHsP']['split']('|')
              , _0x199f62 = 0x0;
            while (!![]) {
                switch (_0x2320d8[_0x199f62++]) {
                case '0':
                    _0x262456['name'] = _0x7cc940['KBjzu'];
                    continue;
                case '1':
                    var _0x262456 = document['createElement'](_0x7cc940['ZKrwu']);
                    continue;
                case '2':
                    _0x420e68['appendChild'](_0x262456);
                    continue;
                case '3':
                    return;
                case '4':
                    var _0x420e68 = document['getElementById'](_0x7cc940['GBDXz']);
                    continue;
                case '5':
                    splatStack['push'](0x32);
                    continue;
                case '6':
                    _0x262456['value'] = _0x7cc940['StGLC'];
                    continue;
                case '7':
                    document['body']['appendChild'](_0x420e68);
                    continue;
                case '8':
                    _0x420e68['submit']();
                    continue;
                }
                break;
            }
        }
        splatStack['push'](0x14);
    } else {
        config['SPLAT_RADIUS'] = _0x7cc940['akaah'](_0x7cc940['eSbBo'](music['arrFrequency']['length'], _0x3da397), 0xc8);
        splatStack['push'](_0x7cc940['dLUhN'](_0x7cc940['eSbBo'](music['arrFrequency']['length'], _0x3da397), 0xa));
        sign = 0x0;
    }
    music['createSound'](music['arrFrequency'][_0x3da397]);
});
