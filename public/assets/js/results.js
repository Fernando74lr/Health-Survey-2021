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
    if (question == 'Me ha ocurrido poco, o durante parte del tiempo.') points+=1;
    if (question == 'Me ha ocurrido bastante, o durante una buena parte del tiempo.') points+=2;
    if (question == 'Me ha ocurrido mucho, o la mayor parte del tiempo.') points+=3;
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
        'intense': [(intenseCount/total).toFixed(2), (intenseHours/(intenseCount == 0 ? 1 : intenseCount)).toFixed(2)],
        'moderate': [(moderateCount/total).toFixed(2), (moderateHours/(moderateCount == 0 ? 1 : moderateCount)).toFixed(2)],
        'hikes': [(hikesCount/total).toFixed(2), (hikesHours/(hikesCount == 0 ? 1 : hikesCount)).toFixed(2)],
        'seated': [(seatedCount/total).toFixed(2), (seatedHours/(seatedCount == 0 ? 1 : seatedCount)).toFixed(2)]
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
        case never: options[0]++; break;
        case sometimes: options[1]++; break;
        case enoughTimes: options[2]++; break;
        case aLot: options[3]++; break;
        case always: options[4]++; break;
                                                    
        default: break;
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
    part_1 = await getPart1();
    part_2 = await getPart2();
    part_3 = await getPart3();
    part_4_1 = await getPart4_1();
    part_4_2 = await getPart4_2();
    part_5 = await getPart5();
}

loadData();

function downloadPDF() {
    window.print();
}