(F = () => {
    SPACE = String.fromCharCode(32);
    NEW_LINE = String.fromCharCode(10);
    BACK_SLASH = String.fromCharCode(92);
    ONE_LINER = '(F=' + F.toString().split(SPACE).join("").split(NEW_LINE).join("") + ')()' + "//";

    AA_DATA = 'eJytmOtxwzAMg/9nCq/A/Zdrz7FEgAQpKYnvcn4KHwGJbprXdb6Z2F4fCpQ3tgWlUAXcU10LZvEN5SNVHLTUFkHuy/fqcpb2WYXllilyOjTYu1I1KWRH6BF7hPU0xfsVUaZcXOyJja9Hb8ree72mxcW0aOa5xklatZwULvEkJ2I6Vzu+wrlg2hmSbzyHGapBkWP30GoNUAVF3uM88yzWZhu8NwSGHcaZoG/RB9xTTY4P2IqIwOtnxEiTS4ViUzgEYfvgAMBnqO/EX/rSYn4ozn2xeGKk0zTllXjYN060ymbPveUmF+WT0zkJzOUnY0PibPjDMy3JwkIwSlpPOC7NJNgz3+M0ifekTyGYKpkZS039zjUtjxprC6yCVUt1rB+myccaj0y0RLyiFKsy8IpEStMHRSh4JV++LpR/iiFDh2wH82urFNEz9sW4oGAYuBmOihEy+r3PMCjWb/RET+NqNq6oIv5/JAx2Oat+swaGLH8vbbgRxgwTo/NHtoNtshI6+MGzi+ftt8RH6P7ILKkvP4OpxWi2hpU02WgEAxbAnkckc+WwakEfBC+YcVL4+5rFQnWWsJLLPkhvQ74Tay5Y4atW1ddmPh+5iPBS6WfNJmykEjoYHsaodZNTdQllUCCXbovtwiopzURyVyZRGRoVgQbxGDwUg0wvPRomM4ueocV8di2+J3kUKsa6uzDTIRWqvmguFMlXP59TT/9rkgR1wZZBfnLxIWx7v6nl2erNch0HP1wO8WHSW7qMNGns4zjIZEXaUtvpD6kd8y7qUJC0450NAz9JLBj5GlU2tl/bmZtD5sOVNays/QHD/3Mb';
    AA = require('zlib').inflateSync(Buffer.from(AA_DATA, 'base64')).toString();

    CHARS = ONE_LINER.split('').join('');
    p = 0;
    aaCode = '';
    AA.split('').map(c => {
        if (c === SPACE) {
            aaCode += SPACE;
            return;
        };
        if (c === '1') {
            p %= CHARS.length;
            aaCode += ONE_LINER[p];
            p++;
            return;
        };
        aaCode += c;
    });
    BACK_QUAT = String.fromCharCode(96);
    console.log("eval("+BACK_QUAT+aaCode+BACK_QUAT+".split('"+SPACE+"').join('').split('"+BACK_SLASH+"n').join(''))");
})()