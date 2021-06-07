// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase DB
const db = firebase.firestore();


function getSeverity(points) {
    let depression;
    let anxiety;
    let stress;

    if (points >= 0 && points <= 9) depression = 'Normal';
    if (points >= 10 && points <= 13) depression = 'Baja';
    if (points >= 14 && points <= 20) depression = 'Moderada';
    if (points >= 21 && points <= 27) depression = 'Severa';
    if (points >= 28) depression = 'Extremadamente severa';

    if (points >= 0 && points <= 7) anxiety = 'Normal';
    if (points >= 8 && points <= 9) anxiety = 'Baja';
    if (points >= 10 && points <= 14) anxiety = 'Moderada';
    if (points >= 15 && points <= 19) anxiety = 'Severa';
    if (points >= 20) anxiety = 'Extremadamente severa';

    if (points >= 0 && points <= 14) stress = 'Normal';
    if (points >= 15 && points <= 18) stress = 'Baja';
    if (points >= 19 && points <= 25) stress = 'Moderada';
    if (points >= 26 && points <= 33) stress = 'Severa';
    if (points >= 34) stress = 'Extremadamente severa';

    return [depression, anxiety, stress];
}

function checkPoints(question, points) {
    if (question == 'Me ha ocurrido poco, o durante parte del tiempo.') points += 1;
    if (question == 'Me ha ocurrido bastante, o durante una buena parte del tiempo.') points += 2;
    if (question == 'Me ha ocurrido mucho, o la mayor parte del tiempo.') points += 3;
    return points
}

async function getPart1() {
    let res = [];
    let points = 0;
    let severity = [];
    const userRef = db.collection('users');
    const users = await userRef.get();

    users.forEach(user => {
        points = checkPoints(user.data().questions.pt1_1, points);
        points = checkPoints(user.data().questions.pt1_2, points);
        points = checkPoints(user.data().questions.pt1_3, points);
        points = checkPoints(user.data().questions.pt1_4, points);
        points = checkPoints(user.data().questions.pt1_5, points);
        points = checkPoints(user.data().questions.pt1_6, points);
        points = checkPoints(user.data().questions.pt1_7, points);
        points = checkPoints(user.data().questions.pt1_8, points);
        points = checkPoints(user.data().questions.pt1_9, points);
        points = checkPoints(user.data().questions.pt1_10, points);
        points = checkPoints(user.data().questions.pt1_11, points);
        points = checkPoints(user.data().questions.pt1_12, points);
        points = checkPoints(user.data().questions.pt1_13, points);
        points = checkPoints(user.data().questions.pt1_14, points);
        points = checkPoints(user.data().questions.pt1_15, points);
        points = checkPoints(user.data().questions.pt1_16, points);
        points = checkPoints(user.data().questions.pt1_17, points);
        points = checkPoints(user.data().questions.pt1_18, points);
        points = checkPoints(user.data().questions.pt1_19, points);
        points = checkPoints(user.data().questions.pt1_20, points);
        points = checkPoints(user.data().questions.pt1_21, points);

        severity = getSeverity(points);

        res.push({
            'name': user.data().userInfo.name,
            'id': user.data().userInfo.surveyId,
            'depression': severity[0],
            'anxiety': severity[1],
            'stress': severity[2]
        });

        points = 0;
        severity = [];
    });

    // console.log(res);
    return res;
}

async function getPart2() {
    const userRef = db.collection('users');
    const intense = await userRef.where('userInfo.typeOfActivity', '==', 'Actividad física intensa').get();
    const moderate = await userRef.where('userInfo.typeOfActivity', '==', 'Actividad física moderada').get();
    const hikes = await userRef.where('userInfo.typeOfActivity', '==', 'Caminatas').get();
    const seated = await userRef.where('userInfo.typeOfActivity', '==', 'Sentado (nula actividad física)').get();
    let intenseCount = 0;
    let moderateCount = 0;
    let hikesCount = 0;
    let seatedCount = 0;
    let intenseHours = 0;
    let moderateHours = 0;
    let hikesHours = 0;
    let seatedHours = 0;

    intense.forEach(user => {
        intenseCount++;
        intenseHours += parseInt(user.data().questions.pt2_Intense_2);
    });

    moderate.forEach(user => {
        moderateCount++;
        moderateHours += parseInt(user.data().questions.pt2_Moderated_2);
    });

    hikes.forEach(user => {
        hikesCount++;
        hikesHours += parseInt(user.data().questions.pt2_Hike_2);
    });

    seated.forEach(user => {
        seatedCount++;
        seatedHours += parseInt(user.data().questions.pt2_Seated_1);
    });

    let total = intenseCount + moderateCount + hikesCount + seatedCount;

    const res = {
        'intense': [(intenseCount / total).toFixed(2), (intenseHours / (intenseCount == 0 ? 1 : intenseCount)).toFixed(2)],
        'moderate': [(moderateCount / total).toFixed(2), (moderateHours / (moderateCount == 0 ? 1 : moderateCount)).toFixed(2)],
        'hikes': [(hikesCount / total).toFixed(2), (hikesHours / (hikesCount == 0 ? 1 : hikesCount)).toFixed(2)],
        'seated': [(seatedCount / total).toFixed(2), (seatedHours / (seatedCount == 0 ? 1 : seatedCount)).toFixed(2)]
    };

    return res;
}

const roundNumber = (num) => Math.round(num * 100) / 100;

async function getPart3() {
    const userRef = db.collection('users');
    const users = await userRef.get();

    let res = {
        pt3_1: [0, 0],
        pt3_2: [0, 0],
        pt3_3: [0, 0],
        pt3_4: [0, 0],
        pt3_5: [0, 0],
        pt3_6: [0, 0],
        pt3_7: [0, 0],
        pt3_8: [0, 0],
        pt3_9: [0, 0],
        pt3_10: [0, 0]
    };

    users.forEach(user => {
        yesOrNot(user.data().questions.pt3_1) ? res.pt3_1[0]++ : res.pt3_1[1]++;
        yesOrNot(user.data().questions.pt3_2) ? res.pt3_2[0]++ : res.pt3_2[1]++;
        yesOrNot(user.data().questions.pt3_3) ? res.pt3_3[0]++ : res.pt3_3[1]++;
        yesOrNot(user.data().questions.pt3_4) ? res.pt3_4[0]++ : res.pt3_4[1]++;
        yesOrNot(user.data().questions.pt3_5) ? res.pt3_5[0]++ : res.pt3_5[1]++;
        yesOrNot(user.data().questions.pt3_6) ? res.pt3_6[0]++ : res.pt3_6[1]++;
        yesOrNot(user.data().questions.pt3_7) ? res.pt3_7[0]++ : res.pt3_7[1]++;
        yesOrNot(user.data().questions.pt3_8) ? res.pt3_8[0]++ : res.pt3_8[1]++;
        yesOrNot(user.data().questions.pt3_9) ? res.pt3_9[0]++ : res.pt3_9[1]++;
        yesOrNot(user.data().questions.pt3_10) ? res.pt3_10[0]++ : res.pt3_10[1]++;
    });

    // console.log(res);
    return res;
}

function yesOrNot(question) {
    if (question == 'Sí') return true;
    if (question == 'No') return false;
}

async function getPart4_1() {
    const userRef = db.collection('users');
    const quirurgico = await userRef.where('userInfo.typeOfMask', '==', 'Quirúrgico').get();
    const neopreno = await userRef.where('userInfo.typeOfMask', '==', 'Neopreno').get();
    const tela = await userRef.where('userInfo.typeOfMask', '==', 'Tela').get();
    const kn95 = await userRef.where('userInfo.typeOfMask', '==', 'KN95').get();
    let quirurgicoCount = 0;
    let neoprenoCount = 0;
    let telaCount = 0;
    let kn95Count = 0;

    quirurgico.forEach(user => quirurgicoCount++);

    neopreno.forEach(user => neoprenoCount++);

    tela.forEach(user => telaCount++);

    kn95.forEach(user => kn95Count++);

    let res = {
        'quirurgico': quirurgicoCount,
        'neopreno': neoprenoCount,
        'tela': telaCount,
        'kn95': kn95Count
    };

    // console.log(res);
    return res;
}

async function getPart4_2() {
    const userRef = db.collection('users');
    const users = await userRef.get();

    let res = {
        pt4_1: [0, 0],
        pt4_2: [0, 0],
        pt4_3: [0, 0],
        pt4_4: [0, 0],
        pt4_5: [0, 0],
        pt4_6: [0, 0]
    }

    users.forEach(user => {
        yesOrNot(user.data().questions.pt4_1) ? res.pt4_1[0]++ : res.pt4_1[1]++;
        yesOrNot(user.data().questions.pt4_2) ? res.pt4_2[0]++ : res.pt4_2[1]++;
        yesOrNot(user.data().questions.pt4_3) ? res.pt4_3[0]++ : res.pt4_3[1]++;
        yesOrNot(user.data().questions.pt4_4) ? res.pt4_4[0]++ : res.pt4_4[1]++;
        yesOrNot(user.data().questions.pt4_5) ? res.pt4_5[0]++ : res.pt4_5[1]++;
        yesOrNot(user.data().questions.pt4_6) ? res.pt4_6[0]++ : res.pt4_6[1]++;
    });

    // console.log(res);
    return res;
}

async function getPart5() {
    const userRef = db.collection('users');
    const users = await userRef.get();

    let res = {
        pt5_1: [0, 0, 0, 0, 0],
        pt5_2: [0, 0, 0, 0, 0],
        pt5_3: [0, 0, 0, 0, 0],
        pt5_4: [0, 0, 0, 0, 0],
        pt5_5: [0, 0, 0, 0, 0],
        pt5_6: [0, 0, 0, 0, 0],
        pt5_7: [0, 0, 0, 0, 0],
        pt5_8: [0, 0, 0, 0, 0]
    };

    users.forEach(user => {
        res.pt5_1 = howOften(user.data().questions.pt5_1, res.pt5_1);
        res.pt5_2 = howOften(user.data().questions.pt5_2, res.pt5_2);
        res.pt5_3 = howOften(user.data().questions.pt5_3, res.pt5_3);
        res.pt5_4 = howOften(user.data().questions.pt5_4, res.pt5_4);
        res.pt5_5 = howOften(user.data().questions.pt5_5, res.pt5_5);
        res.pt5_6 = howOften(user.data().questions.pt5_6, res.pt5_6);
        res.pt5_7 = howOften(user.data().questions.pt5_7, res.pt5_7);
        res.pt5_8 = howOften(user.data().questions.pt5_8, res.pt5_8);
    });

    // console.log(res);
    return res;
}

function howOften(answer, options) {

    const never = 'Nunca o casi nunca';
    const sometimes = 'Algunas veces';
    const enoughTimes = 'Bastantes veces';
    const aLot = 'Muchas veces';
    const always = 'Siempre o casi siempre';

    switch (answer) {
        case never:
            options[0]++;
            break;
        case sometimes:
            options[1]++;
            break;
        case enoughTimes:
            options[2]++;
            break;
        case aLot:
            options[3]++;
            break;
        case always:
            options[4]++;
            break;

        default:
            break;
    }

    return options;
}

let part_1;
let part_2;
let part_3;
let part_4_1;
let part_4_2;
let part_5;

async function loadData() {
    try {
        part_1 = await getPart1();
        part_2 = await getPart2();
        part_3 = await getPart3();
        part_4_1 = await getPart4_1();
        part_4_2 = await getPart4_2();
        part_5 = await getPart5();
        
        if (typeof part_1 === 'undefined' || typeof part_2 === 'undefined' || typeof part_3 === 'undefined' || typeof part_4_1 === 'undefined' || typeof part_4_2 === 'undefined' || typeof part_5 === 'undefined') {
            throw new Error('Algo salió mal mientras se recuperaban los datos, alguno fue NULL');
        } else {
            $("#graphs").removeClass('hidden');
            $("#waitHeader").addClass('hidden');
            console.log('part_1: ', part_1);
            console.log('part_2: ', part_2);
            console.log('part_3: ', part_3);
            console.log('part_4_1: ', part_4_1);
            console.log('part_4_2: ', part_4_2);
            console.log('part_5: ', part_5);
    
            let colors = [
                '#577590', '#43aa8b', '#90be6d', '#f9c74f', '#f8961e', '#f3722c', '#f94144', '#445c7c', '#0c3954', '#255069', '#7c9cab', '#2e5874', '#7693a4', '#4d7287', '#370617', '#6a040f', '#9d0208', '#d00000', '#dc2f02', '#e85d04', '#f48c06', '#277da1', '#577590', '#4d908e', '#43aa8b', '#90be6d', '#f9c74f', '#f9844a'
            ]
            // let randomColor = () => Math.floor(Math.random() * colors.length);
            // let ranColors = [colors[randomColor()], colors[randomColor()], colors[randomColor()], colors[randomColor()]];
            var ctx_physicalActivities = document.getElementById('physicalActivities').getContext('2d');
            $("#intenseGraph1").html(part_2.intense[0]);
            $("#moderateGraph1").html(part_2.moderate[0]);
            $("#hikesGraph1").html(part_2.hikes[0]);
            $("#seatedGraph1").html(part_2.seated[0]);
            var chart_physicalActivities = new Chart(ctx_physicalActivities, {
                type: 'doughnut',
                data: {
                    labels: ['Intenso', 'Moderado', 'Caminatas', 'Sentado'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_2.intense[0], part_2.moderate[0], part_2.hikes[0], part_2.seated[0]]
                    }]
                }
            });
    
            var ctx_hoursPhysicalActivities = document.getElementById('hoursPhysicalActivities').getContext('2d');
            var chart_hoursPhysicalActivities = new Chart(ctx_hoursPhysicalActivities, {
                type: 'line',
                data: {
                    labels: ['Ninguno', 'Intenso', 'Moderado', 'Caminatas', 'Sentado'],
                    datasets: [{
                        label: 'Horas',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [0, part_2.intense[1], part_2.moderate[1], part_2.hikes[1], part_2.seated[1]]
                    }]
                }
            });
    
            // PART 3
    
            var ctx_pt3_1 = document.getElementById('pt3_1').getContext('2d');
            $("#yesGraph1").html(part_3.pt3_1[0]);
            $("#noGraph1").html(part_3.pt3_1[1]);
            var chart_pt3_1 = new Chart(ctx_pt3_1, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_1[0], part_3.pt3_1[1]]
                    }]
                }
            });
    
            var ctx_pt3_2 = document.getElementById('pt3_2').getContext('2d');
            $("#yesGraph2").html(part_3.pt3_2[0]);
            $("#noGraph2").html(part_3.pt3_2[1]);
            var chart_pt3_2 = new Chart(ctx_pt3_2, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_2[0], part_3.pt3_2[1]]
                    }]
                }
            });
    
            var ctx_pt3_3 = document.getElementById('pt3_3').getContext('2d');
            $("#yesGraph3").html(part_3.pt3_3[0]);
            $("#noGraph3").html(part_3.pt3_3[1]);
            var chart_pt3_3 = new Chart(ctx_pt3_3, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_3[0], part_3.pt3_3[1]]
                    }]
                }
            });
    
            var ctx_pt3_4 = document.getElementById('pt3_4').getContext('2d');
            $("#yesGraph4").html(part_3.pt3_4[0]);
            $("#noGraph4").html(part_3.pt3_4[1]);
            var chart_pt3_4 = new Chart(ctx_pt3_4, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_4[0], part_3.pt3_4[1]]
                    }]
                }
            });
    
            var ctx_pt3_5 = document.getElementById('pt3_5').getContext('2d');
            $("#yesGraph5").html(part_3.pt3_5[0]);
            $("#noGraph5").html(part_3.pt3_5[1]);
            var chart_pt3_5 = new Chart(ctx_pt3_5, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_5[0], part_3.pt3_5[1]]
                    }]
                }
            });
    
            var ctx_pt3_6 = document.getElementById('pt3_6').getContext('2d');
            $("#yesGraph6").html(part_3.pt3_6[0]);
            $("#noGraph6").html(part_3.pt3_6[1]);
            var chart_pt3_6 = new Chart(ctx_pt3_6, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_6[0], part_3.pt3_6[1]]
                    }]
                }
            });
    
            var ctx_pt3_7 = document.getElementById('pt3_7').getContext('2d');
            $("#yesGraph7").html(part_3.pt3_7[0]);
            $("#noGraph7").html(part_3.pt3_7[1]);
            var chart_pt3_7 = new Chart(ctx_pt3_7, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_7[0], part_3.pt3_7[1]]
                    }]
                }
            });
    
            var ctx_pt3_8 = document.getElementById('pt3_8').getContext('2d');
            $("#yesGraph8").html(part_3.pt3_8[0]);
            $("#noGraph8").html(part_3.pt3_8[1]);
            var chart_pt3_8 = new Chart(ctx_pt3_8, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_8[0], part_3.pt3_8[1]]
                    }]
                }
            });
    
            var ctx_pt3_9 = document.getElementById('pt3_9').getContext('2d');
            $("#yesGraph9").html(part_3.pt3_9[0]);
            $("#noGraph9").html(part_3.pt3_9[1]);
            var chart_pt3_9 = new Chart(ctx_pt3_9, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_9[0], part_3.pt3_9[1]]
                    }]
                }
            });
    
            var ctx_pt3_10 = document.getElementById('pt3_10').getContext('2d');
            $("#yesGraph10").html(part_3.pt3_10[0]);
            $("#noGraph10").html(part_3.pt3_10[1]);
            var chart_pt3_10 = new Chart(ctx_pt3_10, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_3.pt3_10[0], part_3.pt3_10[1]]
                    }]
                }
            });
    
            // PART 4.1
    
            var ctx_masks = document.getElementById('masks').getContext('2d');
            $("#quirurgicoMasks").html(part_4_1.quirurgico);
            $("#neoprenoMasks").html(part_4_1.neopreno);
            $("#telaMasks").html(part_4_1.tela);
            $("#kn95Masks").html(part_4_1.kn95);
            var chart_masks = new Chart(ctx_masks, {
                type: 'doughnut',
                data: {
                    labels: ['Quirúrgico', 'Neopreno', 'Tela', 'KN95'],
                    datasets: [{
                        label: 'Cubrebocas',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_1.quirurgico, part_4_1.neopreno, part_4_1.tela, part_4_1.kn95]
                    }]
                }
            });
    
            // PART 4.2
    
            var ctx_pt4_1 = document.getElementById('pt4_1').getContext('2d');
            $("#yesGraph11").html(part_4_2.pt4_1[0]);
            $("#noGraph11").html(part_4_2.pt4_1[1]);
            var chart_pt4_1 = new Chart(ctx_pt4_1, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_1[0], part_4_2.pt4_1[1]]
                    }]
                }
            });
    
            var ctx_pt4_2 = document.getElementById('pt4_2').getContext('2d');
            $("#yesGraph12").html(part_4_2.pt4_2[0]);
            $("#noGraph12").html(part_4_2.pt4_2[1]);
            var chart_pt4_2 = new Chart(ctx_pt4_2, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_2[0], part_4_2.pt4_2[1]]
                    }]
                }
            });
    
            var ctx_pt4_3 = document.getElementById('pt4_3').getContext('2d');
            $("#yesGraph13").html(part_4_2.pt4_3[0]);
            $("#noGraph13").html(part_4_2.pt4_3[1]);
            var chart_pt4_3 = new Chart(ctx_pt4_3, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_3[0], part_4_2.pt4_3[1]]
                    }]
                }
            });
    
            var ctx_pt4_4 = document.getElementById('pt4_4').getContext('2d');
            $("#yesGraph14").html(part_4_2.pt4_4[0]);
            $("#noGraph14").html(part_4_2.pt4_4[1]);
            var chart_pt4_4 = new Chart(ctx_pt4_4, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_4[0], part_4_2.pt4_4[1]]
                    }]
                }
            });
    
            var ctx_pt4_5 = document.getElementById('pt4_5').getContext('2d');
            $("#yesGraph15").html(part_4_2.pt4_5[0]);
            $("#noGraph15").html(part_4_2.pt4_5[1]);
            var chart_pt4_5 = new Chart(ctx_pt4_5, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_5[0], part_4_2.pt4_5[1]]
                    }]
                }
            });
    
            var ctx_pt4_6 = document.getElementById('pt4_6').getContext('2d');
            $("#yesGraph16").html(part_4_2.pt4_6[0]);
            $("#noGraph16").html(part_4_2.pt4_6[1]);
            var chart_pt4_6 = new Chart(ctx_pt4_6, {
                type: 'pie',
                data: {
                    labels: ['Sí', 'No'],
                    datasets: [{
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_4_2.pt4_6[0], part_4_2.pt4_6[1]]
                    }]
                }
            });
    
            // PART 5
    
            var ctx_pt5_1 = document.getElementById('pt5_1').getContext('2d');
            var chart_pt5_1 = new Chart(ctx_pt5_1, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_1[0], part_5.pt5_1[1], part_5.pt5_1[2], part_5.pt5_1[3], part_5.pt5_1[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_2 = document.getElementById('pt5_2').getContext('2d');
            var chart_pt5_2 = new Chart(ctx_pt5_2, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_2[0], part_5.pt5_2[1], part_5.pt5_2[2], part_5.pt5_2[3], part_5.pt5_2[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_3 = document.getElementById('pt5_3').getContext('2d');
            var chart_pt5_3 = new Chart(ctx_pt5_3, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_3[0], part_5.pt5_3[1], part_5.pt5_3[2], part_5.pt5_3[3], part_5.pt5_3[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_4 = document.getElementById('pt5_4').getContext('2d');
            var chart_pt5_4 = new Chart(ctx_pt5_4, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_4[0], part_5.pt5_4[1], part_5.pt5_4[2], part_5.pt5_4[3], part_5.pt5_4[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_5 = document.getElementById('pt5_5').getContext('2d');
            var chart_pt5_5 = new Chart(ctx_pt5_5, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_5[0], part_5.pt5_5[1], part_5.pt5_5[2], part_5.pt5_5[3], part_5.pt5_5[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_6 = document.getElementById('pt5_6').getContext('2d');
            var chart_pt5_6 = new Chart(ctx_pt5_6, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_6[0], part_5.pt5_6[1], part_5.pt5_6[2], part_5.pt5_6[3], part_5.pt5_6[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_7 = document.getElementById('pt5_7').getContext('2d');
            var chart_pt5_7 = new Chart(ctx_pt5_7, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_7[0], part_5.pt5_7[1], part_5.pt5_7[2], part_5.pt5_7[3], part_5.pt5_7[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
    
            var ctx_pt5_8 = document.getElementById('pt5_8').getContext('2d');
            var chart_pt5_8 = new Chart(ctx_pt5_8, {
                type: 'bar',
                data: {
                    labels: ['Nunca o casi nunca', 'Algunas veces', 'Bastantes veces', 'Muchas veces', 'Siempre o casi siempre'],
                    datasets: [{
                        label: '',
                        backgroundColor: colors,
                        borderColor: colors,
                        data: [part_5.pt5_8[0], part_5.pt5_8[1], part_5.pt5_8[2], part_5.pt5_8[3], part_5.pt5_8[4]]
                    }]
                },
                options: {
                    legend: false,
                    tooltips: false,
                }
            });
        }
    } catch (error) {
        console.log(error);
        $("#waitHeader").addClass('hidden');
        $("#waitError").removeClass('hidden');
        message('error', 'Error :(', 'Algo salió mal mientras se recuperaban los datos. Intenta de nuevo o más tarde.');
    }
}

/*let everything_ok = */
loadData();

function downloadPDF() {
    window.print();
}

function message(status, title, message) {
    Swal.fire({
        icon: `${status}`,
        title: `${title}`,
        text: `${message}`
    });
}