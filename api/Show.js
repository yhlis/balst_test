// import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/controls/OrbitControls.js'
// import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r122/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from "three"
import { OrbitControls } from "three-orbit-controls"

var scene, camera, renderer, controls;
var arcLine, straightLine;

init();

function init() {
    // 创建场景和相机
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.set(5, 5, 8);
    // 创建渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //控制器
    controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
}





function ArcLine(x, y, rx, StartAngle, endAngle) {
    var geometry = new THREE.BufferGeometry(); //声明一个几何体对象Geometry
    // // 创建弧线几何体
    //参数：前两个参数圆弧坐标原点x,y  第三个为：圆弧半径    0, 2 * Math.PI：圆弧起始角度

    // var StartAngle1 = (StartAngle / Math.PI * 180) / 180 * Math.PI
    // var endAngle1 = (endAngle / Math.PI * 180) / 180 * Math.PI

    var StartAngle1 = (((StartAngle / Math.PI) * 180) / 180) * Math.PI
    var endAngle1 = (((endAngle / Math.PI) * 180) / 180) * Math.PI

    var arc = new THREE.ArcCurve(x, y, rx, StartAngle1, endAngle1);
    //getPoints是基类Curve的方法,返回一个vector2对象作为元素组成的数组
    var points = arc.getPoints(50); //分段数50,返回51个顶点
    // setFromPoints方法从points中提取数据改变几何体的顶点属性vertices
    geometry.setFromPoints(points);

    // 创建线段材质
    var material = new THREE.LineBasicMaterial({ color: 0x00ff00 });

    // 创建线段对象
    arcLine = new THREE.Line(geometry, material);

    // 将线段添加到场景中
    scene.add(arcLine);
}


function StraigrtLine(x, y, z, i, j, k) { //x,y,z为第一个点的坐标，i，j,k为第二个点的坐标
    const geometry = new THREE.BufferGeometry();
    const start = new THREE.Vector3(x, y, z);
    const end = new THREE.Vector3(i, j, k);
    const lineCurve = new THREE.LineCurve3(start, end);
    const points2 = lineCurve.getPoints(100);
    geometry.setFromPoints(points2);
    const material = new THREE.LineBasicMaterial({
        color: 0x8888,
        linewidth: 1,
    });
    const straightLine = new THREE.Line(geometry, material);
    scene.add(straightLine);
}

showTube();

function showTube(x, y, z, i, j, k) {
    // 三维样条曲线
    const path = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.0, 0.0, 0.0),
        new THREE.Vector3(-3.0, 4.0, 3.0),
    ]);
    // 样条曲线path作为TubeGeometry参数生成管道
    const geometry = new THREE.TubeGeometry(path, 200, 0.1, 100);

    const material = new THREE.MeshBasicMaterial({
        //map: texture,
        //side: THREE.DoubleSide, //双面显示看到管道内壁
        color: 0xffffff,
        wireframeLinecap: 'square',
        aoMapIntensity: 0,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

}

//3,创建环境光对象
// var ambient = new THREE.AmbientLight({
//     color: 0xffffff
// });
// scene.add(ambient);



function initPoint(vertices) {
    let canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;

    let context = canvas.getContext("2d");
    context.fillStyle = "#ffffff";

    //canvas 创建圆
    context.arc(50, 50, 20, 0, 2 * Math.PI);
    context.fill();

    // 创建材质
    let texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    //创建点,是用PointsMaterial的map属性来设置材质
    let geometry = new THREE.BufferGeometry();
    // 点位置
    geometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(vertices, 3)
    );


    let material = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.4,
        map: texture
    });

    let points = new THREE.Points(geometry, material);

    //points.position.set(5, -2, -2);

    return points;
}


var points = initPoint([
    4.90972, 0.0, 0.0,
    11.0, 4.0, 3.0,
    4.364195555555556, 0.0, 0.0,
    3.818671111111111, 0.0, 0.0,
    3.2731466666666664, 0.0, 0.0,
    2.727622222222222, 0.0, 0.0,
    2.182097777777778, 0.0, 0.0,
    1.6365733333333332, 0.0, 0.0,
    1.0910488888888885, 0.0, 0.0,
    0.5455244444444443, 0.0, 0.0,
    0.0, 0.0, 0.0, -0.08453891962532194, 0.5205486597020134, 0.0, -0.16907783925064387, 1.0410973194040267, 0.0, -0.2536167588759658, 1.5616459791060402, 0.0, -0.362846, 2.234252, 0.0,
    0.043452, 6.605944, 0.0, -0.43569384919168286, 2.784325135123696, 0.0,
    0.043452, 6.605944, 0.0, -0.47315133387352404, 3.3379352867267587, 0.0,
    0.043452, 6.605944, 0.0, -0.47506455588617413, 3.892807887147964, 0.0,
    0.043452, 6.605944, 0.0, -0.4414256545484214, 4.44666318181747, 0.0,
    0.043452, 6.605944, 0.0, -0.37237283895364826, 4.997225595877033, 0.0,
    0.043452, 6.605944, 0.0, -0.26818982012271597, 5.54223308362737, 0.0,
    0.043452, 6.605944, 0.0, -0.1293046453462967, 6.079446422389523, 0.0,
    0.043452, 6.605944, 0.0,
    0.043452, 6.605944, 0.0,
    4.909723, 10.013344, 0.0,
    0.2698812749698076, 7.134664845541556, 0.0,
    4.909723, 10.013344, 0.0,
    0.5535464758851667, 7.6350147259884125, 0.0,
    4.909723, 10.013344, 0.0,
    0.8909483797134747, 8.1008214502492, 0.0,
    4.909723, 10.013344, 0.0,
    1.2779248808834094, 8.526338942975187, 0.0,
    4.909723, 10.013344, 0.0,
    1.709702333979176, 8.906318126709856, 0.0,
    4.909723, 10.013344, 0.0,
    2.1809544402374628, 9.236071673196719, 0.0,
    4.909723, 10.013344, 0.0,
    2.685867951437969, 9.511531825089344, 0.0,
    4.909723, 10.013344, 0.0,
    3.218214380680776, 9.729300574789498, 0.0,
    4.909723, 10.013344, 0.0,
    3.7714268354442773, 9.886691581419715, 0.0,
    4.909723, 10.013344, 0.0,
    4.338681025130319, 9.981763308853083, 0.0,
    4.909723, 10.013344, 0.0,
    4.285464547643611, 1.6929359479343082, 0.0,
    3.7546094131406793, 1.068400495577919, 0.0,
    3.2237542786377484, 1.6929359479343082, 0.0,
    2.6928991441348176, 1.068400495577919, 0.0,
    4.285464547643611, 2.9420068526470873, 0.0,
    3.7546094131406793, 2.3174714002906978, 0.0,
    3.2237542786377484, 2.9420068526470873, 0.0,
    2.6928991441348176, 2.3174714002906978, 0.0,
    4.285464547643611, 4.191077757359866, 0.0,
    3.7546094131406793, 3.566542305003477, 0.0,
    3.2237542786377484, 4.191077757359866, 0.0,
    2.6928991441348176, 3.566542305003477, 0.0,
    4.285464547643611, 5.4401486620726445, 0.0,
    3.7546094131406793, 4.815613209716255, 0.0,
    3.2237542786377484, 5.4401486620726445, 0.0,
    2.6928991441348176, 4.815613209716255, 0.0,
    4.285464547643611, 6.6892195667854235, 0.0,
    3.7546094131406793, 6.064684114429034, 0.0,
    3.2237542786377484, 6.6892195667854235, 0.0,
    2.6928991441348176, 6.064684114429034, 0.0,
    4.90972, 0.49302, 0.0,
    3.7871425, 0.49302, 0.0,
    2.664565, 0.49302, 0.0,
    1.5419875000000003, 0.49302, 0.0,
    0.41941, 0.49302, 0.0,
    0.2521188705541456, 1.445973594362669, 0.0,
    0.07341979534470333, 2.4639123976100326, 0.0,
    0.5067421262897458, 6.4373201544129115, 0.0, -0.00405636166908252, 3.470436257189827, 0.0,
    0.5067421262897458, 6.4373201544129115, 0.0,
    0.04328729486172733, 4.478826763390342, 0.0,
    0.5067421262897458, 6.4373201544129115, 0.0,
    0.21472680884933304, 5.473664100774063, 0.0,
    0.5067421262897458, 6.4373201544129115, 0.0,
    0.5067421262897458, 6.4373201544129115, 0.0,
    4.909723, 9.520320935206733, 0.0,
    1.026826464545001, 7.457271814846168, 0.0,
    4.909723, 9.520320935206733, 0.0,
    1.778739257634609, 8.320646739260326, 0.0,
    4.909723, 9.520320935206733, 0.0,
    2.717587527575655, 8.975897099464476, 0.0,
    4.909723, 9.520320935206733, 0.0,
    3.787317307606147, 9.383901151202789, 0.0,
    4.909723, 9.520320935206733, 0.0,
    1.9043650000000003, 1.0684, 0.0,
    1.9043650000000003, 1.0684, 0.0,
    0.9025819313830512, 1.068400495577919, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    0.6412033046594354, 2.0907240830770384, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    0.5241707954171293, 3.13942217873919, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    0.5537474988172635, 4.194215771192691, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    0.7293614806615514, 5.234707978489683, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    1.0460537139870363, 6.236815293544714, 0.0,
    4.909723, 8.944943504422081, 0.0,
    1.5018591913819215, 7.132620090995475, 0.0,
    4.909723, 8.944943504422081, 0.0,
    2.161452015819837, 7.891014562434309, 0.0,
    4.909723, 8.944943504422081, 0.0,
    2.985388906354041, 8.46664714384002, 0.0,
    4.909723, 8.944943504422081, 0.0,
    3.9243988990630836, 8.82509532970729, 0.0,
    4.909723, 8.944943504422081, 0.0,
    1.3716133609360195, 1.636262058628715, 0.0,
    1.587289656844792, 6.0649711520985505, 0.0,
    1.1561601075345624, 2.7432836341984115, 0.0,
    1.587289656844792, 6.0649711520985505, 0.0,
    1.1207509702650844, 3.870520550811734, 0.0,
    1.587289656844792, 6.0649711520985505, 0.0,
    1.2662997578839361, 4.988882041386569, 0.0,
    1.587289656844792, 6.0649711520985505, 0.0,
    1.587289656844792, 6.0649711520985505, 0.0,
    4.909723, 8.377081941371285, 0.0,
    2.110579401093857, 7.006433501950896, 0.0,
    4.909723, 8.377081941371285, 0.0,
    2.892621794171195, 7.747104284455258, 0.0,
    4.909723, 8.377081941371285, 0.0,
    3.8611094530869003, 8.218501322156738, 0.0,
    4.909723, 8.377081941371285, 0.0,
    1.9667873752545366, 2.20315669945774, 0.0,
    1.7804383043203806, 3.4378872157030522, 0.0,
    1.8353711885179713, 4.685391845842423, 0.0,
    4.909723, 7.81018730054226, 0.0,
    4.909723, 7.81018730054226, 0.0,
    3.7592560156948194, 7.579358003941889, 0.0,
    4.909723, 7.81018730054226, 0.0,
    4.909723, 10.013344, 0.0,
    4.909723, 9.520320935206733, 0.0,
    4.909723, 8.952459372155937, 0.0,
    4.909723, 8.385564731326912, 0.0,
    4.909723, 7.819403920442748, 0.0,
    4.91028, 0.0, 0.0,
    5.4558044444444445, 0.0, 0.0,
    6.001328888888889, 0.0, 0.0,
    6.546853333333334, 0.0, 0.0,
    7.092377777777778, 0.0, 0.0,
    7.637902222222222, 0.0, 0.0,
    8.183426666666668, 0.0, 0.0,
    8.728951111111112, 0.0, 0.0,
    9.274475555555556, 0.0, 0.0,
    9.82, 0.0, 0.0,
    9.904538919625322, 0.5205486597020134, 0.0,
    9.989077839250644, 1.0410973194040267, 0.0,
    10.073616758875966, 1.5616459791060402, 0.0,
    10.182846000000001, 2.234252, 0.0,
    9.776548, 6.605944, 0.0,
    10.255693849191683, 2.784325135123696, 0.0,
    9.776548, 6.605944, 0.0,
    10.293151333873524, 3.3379352867267587, 0.0,
    9.776548, 6.605944, 0.0,
    10.295064555886174, 3.892807887147964, 0.0,
    9.776548, 6.605944, 0.0,
    10.261425654548422, 4.44666318181747, 0.0,
    9.776548, 6.605944, 0.0,
    10.192372838953649, 4.997225595877033, 0.0,
    9.776548, 6.605944, 0.0,
    10.088189820122716, 5.54223308362737, 0.0,
    9.776548, 6.605944, 0.0,
    9.949304645346297, 6.079446422389523, 0.0,
    9.776548, 6.605944, 0.0,
    9.776548, 6.605944, 0.0,
    4.910277000000001, 10.013344, 0.0,
    9.550118725030192, 7.134664845541556, 0.0,
    4.910277000000001, 10.013344, 0.0,
    9.266453524114834, 7.6350147259884125, 0.0,
    4.910277000000001, 10.013344, 0.0,
    8.929051620286526, 8.1008214502492, 0.0,
    4.910277000000001, 10.013344, 0.0,
    8.542075119116591, 8.526338942975187, 0.0,
    4.910277000000001, 10.013344, 0.0,
    8.110297666020823, 8.906318126709856, 0.0,
    4.910277000000001, 10.013344, 0.0,
    7.639045559762538, 9.236071673196719, 0.0,
    4.910277000000001, 10.013344, 0.0,
    7.134132048562032, 9.511531825089344, 0.0,
    4.910277000000001, 10.013344, 0.0,
    6.601785619319225, 9.729300574789498, 0.0,
    4.910277000000001, 10.013344, 0.0,
    6.048573164555723, 9.886691581419715, 0.0,
    4.910277000000001, 10.013344, 0.0,
    5.481318974869681, 9.981763308853083, 0.0,
    4.910277000000001, 10.013344, 0.0,
    5.53453545235639, 1.6929359479343082, 0.0,
    6.065390586859321, 1.068400495577919, 0.0,
    6.596245721362251, 1.6929359479343082, 0.0,
    7.127100855865183, 1.068400495577919, 0.0,
    5.53453545235639, 2.9420068526470873, 0.0,
    6.065390586859321, 2.3174714002906978, 0.0,
    6.596245721362251, 2.9420068526470873, 0.0,
    7.127100855865183, 2.3174714002906978, 0.0,
    5.53453545235639, 4.191077757359866, 0.0,
    6.065390586859321, 3.566542305003477, 0.0,
    6.596245721362251, 4.191077757359866, 0.0,
    7.127100855865183, 3.566542305003477, 0.0,
    5.53453545235639, 5.4401486620726445, 0.0,
    6.065390586859321, 4.815613209716255, 0.0,
    6.596245721362251, 5.4401486620726445, 0.0,
    7.127100855865183, 4.815613209716255, 0.0,
    5.53453545235639, 6.6892195667854235, 0.0,
    6.065390586859321, 6.064684114429034, 0.0,
    6.596245721362251, 6.6892195667854235, 0.0,
    7.127100855865183, 6.064684114429034, 0.0,
    4.91028, 0.49302, 0.0,
    6.0328575, 0.49302, 0.0,
    7.155435000000001, 0.49302, 0.0,
    8.278012499999999, 0.49302, 0.0,
    9.400590000000001, 0.49302, 0.0,
    9.567881129445855, 1.445973594362669, 0.0,
    9.746580204655297, 2.4639123976100326, 0.0,
    9.313257873710254, 6.4373201544129115, 0.0,
    9.824056361669083, 3.470436257189827, 0.0,
    9.313257873710254, 6.4373201544129115, 0.0,
    9.776712705138273, 4.478826763390342, 0.0,
    9.313257873710254, 6.4373201544129115, 0.0,
    9.605273191150667, 5.473664100774063, 0.0,
    9.313257873710254, 6.4373201544129115, 0.0,
    9.313257873710254, 6.4373201544129115, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    8.793173535454999, 7.457271814846168, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    8.041260742365392, 8.320646739260326, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    7.102412472424345, 8.975897099464476, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    6.032682692393854, 9.383901151202789, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    7.915635, 1.0684, 0.0,
    7.915635, 1.0684, 0.0,
    8.91741806861695, 1.068400495577919, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    9.178796695340566, 2.0907240830770384, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    9.295829204582871, 3.13942217873919, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    9.266252501182738, 4.194215771192691, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    9.090638519338448, 5.234707978489683, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    8.773946286012965, 6.236815293544714, 0.0,
    4.910277000000001, 8.944943504422081, 0.0,
    8.318140808618079, 7.132620090995475, 0.0,
    4.910277000000001, 8.944943504422081, 0.0,
    7.658547984180164, 7.891014562434309, 0.0,
    4.910277000000001, 8.944943504422081, 0.0,
    6.834611093645959, 8.46664714384002, 0.0,
    4.910277000000001, 8.944943504422081, 0.0,
    5.895601100936917, 8.82509532970729, 0.0,
    4.910277000000001, 8.944943504422081, 0.0,
    8.44838663906398, 1.636262058628715, 0.0,
    8.232710343155208, 6.0649711520985505, 0.0,
    8.663839892465438, 2.7432836341984115, 0.0,
    8.232710343155208, 6.0649711520985505, 0.0,
    8.699249029734915, 3.870520550811734, 0.0,
    8.232710343155208, 6.0649711520985505, 0.0,
    8.553700242116065, 4.988882041386569, 0.0,
    8.232710343155208, 6.0649711520985505, 0.0,
    8.232710343155208, 6.0649711520985505, 0.0,
    4.910277000000001, 8.377081941371285, 0.0,
    7.709420598906143, 7.006433501950896, 0.0,
    4.910277000000001, 8.377081941371285, 0.0,
    6.927378205828806, 7.747104284455258, 0.0,
    4.910277000000001, 8.377081941371285, 0.0,
    5.9588905469131, 8.218501322156738, 0.0,
    4.910277000000001, 8.377081941371285, 0.0,
    7.853212624745463, 2.20315669945774, 0.0,
    8.03956169567962, 3.4378872157030522, 0.0,
    7.984628811482029, 4.685391845842423, 0.0,
    4.910277000000001, 7.81018730054226, 0.0,
    4.910277000000001, 7.81018730054226, 0.0,
    6.060743984305181, 7.579358003941889, 0.0,
    4.910277000000001, 7.81018730054226, 0.0,
    4.910277000000001, 10.013344, 0.0,
    4.910277000000001, 9.520320935206733, 0.0,
    4.910277000000001, 8.952459372155937, 0.0,
    4.910277000000001, 8.385564731326912, 0.0,
    4.910277000000001, 7.819403920442748, 0.0,
]);
scene.add(points);



function render() {
    renderer.render(scene, camera);
    //requestAnimationFrame(render);
}
render();



//当屏幕尺寸发生改变时重新渲染物体
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / this.window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, this.window.innerHeight);
})