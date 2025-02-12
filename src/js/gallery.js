// const pict = document.getElementById('pict');
// const nz = document.getElementById('nz');
// const vp = document.getElementById('vp');
// const basis = document.getElementById('basis');

window.addEventListener('load', function () {
    addEventListener('scroll', del);
    document.getElementById('pict').addEventListener('click', del);
    document.getElementById('nz').addEventListener('click', nz);
    document.getElementById('vp').addEventListener('click', vp);
    let view = document.getElementById('view').style;
    let bas = document.getElementById('bas').style;
    let pict = document.getElementById('pict');
    let n = document.querySelectorAll('.im').length;
    let i = 1;

    document.getElementById('basis').addEventListener('click', (e) => {
        if (e.target.target === 'IMG') {
            let sc = window.pageYOffset;
            bas.top = sc + 'px';
            view.top = sc + 'px';
            pict.src = e.target.src;
            view.visibility = 'visible';
            bas.visibility = 'visible';
            let rig = e.target.src.split('im');
            let lef = rig[1].split('.j');
            i = lef[0];
            document.getElementById('vp').style.visibility = 'visible';
            document.getElementById('nz').style.visibility = 'visible';

            if (i === 1) {
                document.getElementById('nz').style.visibility = 'hidden';
            }
            if (i === n) {
                document.getElementById('vp').style.visibility = 'hidden';
            }
        }
    });

    function del() {
        view.visibility = 'hidden';
        bas.visibility = 'hidden';
        pict.src = './src/image/gallery-box/net.jpg';
        document.getElementById('nz').style.visibility = 'hidden';
        document.getElementById('vp').style.visibility = 'hidden';
    }

    function nz() {
        document.getElementById('vp').style.visibility = 'visible';
        let posi = document.getElementById('pict').src;
        let rig = posi.split('im');
        let lef = rig[1].split('.j');
        i = lef[0];
        if (i > 1) {
            i--;
            document.getElementById('vp').style.visibility = 'visible';
            document.getElementById('pict').src =
                `./src/image/gallery-box/${i}` + `.jpg`;
        }
        if (i == 1) {
            document.getElementById('nz').style.visibility = 'hidden';
        }
    }

    // function nz() {
    //     vp.visibility = 'visible';
    //     let posi = pict.src;
    //     let rig = posi.split('im');
    //     let lef = rig[1].split('.j');
    //     i = lef[0];
    //     if (i > 1) {
    //         i--;
    //         vp.style.visibility = 'visible';
    //         pict.src = `./src/image/gallery-box/${i}` + `.jpg`;
    //     }
    //     if (i == 1) {
    //         nz.style.visibility = 'hidden';
    //     }
    // }

    function vp() {
        document.getElementById('nz').style.visibility = 'visible';

        let posi = document.getElementById('pict').src;
        let rig = posi.split('im');
        let lef = rig[1].split('.j');
        i = lef[0];
        if (i < n) {
            i++;
            document.getElementById('nz').style.visibility = 'visible';
            document.getElementById('pict').src =
                `./src/image/gallery-box/${i}` + `.jpg`;
            if (n == 1) {
                document.getElementById('vp').style.visibility = 'hidden';
            }
        }
    }
});

// function vp() {
//     document.getElementById('nz').style.visibility = 'visible';
//     console.log(nz);
// }
