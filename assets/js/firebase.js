// Firebase connections
const admin = require("firebase-admin");
const serviceAccount = require("jsonKey/health-survey-2021-firebase-adminsdk-xzxop-39378c4bce.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Firebase DB
const db = admin.firestore();

test();

function test() {
    createUser(userTest);
    console.log("User loaded");
}

// Create user
function createUser(user) {
    const userInfo = {
        firstMessage: user.firstMessage,
        consent: user.consent,
        image: user.image.name,
        facultyYear: user.facultyYear,
        name: user.name,
        age: user.age,
        gender: user.gender,
        civilStatus: user.civilStatus,
        kids: user.kids,
        state: user.state,
        municipality: user.municipality,
        typeOfResidence: user.typeOfResidence,
        email: user.email,
        emailConfirmation: user.emailConfirmation,
        occupation: user.occupation,
        semester: user.semester,
        worked: user.worked,
        seriousWorkProblems: user.seriousWorkProblems,
        accessToInternetAndDevicesStudent: user.accessToInternetAndDevicesStudent,
        academicPerformance: user.academicPerformance,
        difficultiesToStudy: user.difficultiesToStudy,
        created: Date.now()
    };

    const userQuestionsPart1 = {
        qn1: user.pt1_1,
        qn2: user.pt1_2,
        qn3: user.pt1_3,
        qn4: user.pt1_4,
        qn5: user.pt1_5,
        qn6: user.pt1_6,
        qn7: user.pt1_7,
        qn8: user.pt1_8,
        qn9: user.pt1_9,
        qn10: user.pt1_10,
        qn11: user.pt1_11,
        qn11: user.pt1_12,
        qn13: user.pt1_13,
        qn14: user.pt1_14,
        qn15: user.pt1_15,
        qn16: user.pt1_16,
        qn17: user.pt1_17,
        qn18: user.pt1_18,
        qn19: user.pt1_19,
        qn20: user.pt1_20,
        qn21: user.pt1_21
    };

    const userQuestionsPart2 = {
        qnIntense1: user.pt2_Intense_1 || 'No aplica',
        qnIntense2: user.pt2_Intense_2 || 'No aplica',
        qnModerated1: user.pt2_Moderated_1 || 'No aplica',
        qnModerated2: user.pt2_Moderated_2 || 'No aplica',
        qnHike1: user.pt2_Hike_1 || 'No aplica',
        qnHike2: user.pt2_Hike_2 || 'No aplica',
        qnSeated1: user.pt2_Seated_1 || 'No aplica'
    };

    const userQuestionsPart3 = {
        qn1: user.pt3_1,
        qn2: user.pt3_2,
        qn3: user.pt3_3,
        qn4: user.pt3_4,
        qn5: user.pt3_5,
        qn6: user.pt3_6,
        qn7: user.pt3_7,
        qn8: user.pt3_8,
        qn9: user.pt3_9,
        qn10: user.pt3_10
    };

    const userQuestionsPart4 = {
        qn1: user.pt4_1,
        qn2: user.pt4_2,
        qn3: user.pt4_3,
        qn4: user.pt4_4,
        qn5: user.pt4_5,
        qn6: user.pt4_6
    };

    const userQuestionsPart5 = {
        qn1: user.pt5_1,
        qn2: user.pt5_2,
        qn3: user.pt5_3,
        qn4: user.pt5_4,
        qn5: user.pt5_5,
        qn6: user.pt5_6,
        qn7: user.pt5_7,
        qn8: user.pt5_8
    };

    // Add a new user in collection 'users'
    // const res = await 
    db.collection('users').doc(user.name).set(userInfo);
    db.collection(`users/${user.name}/questions`).doc('part1').set(userQuestionsPart1);
    db.collection(`users/${user.name}/questions`).doc('part2').set(userQuestionsPart2);
    db.collection(`users/${user.name}/questions`).doc('part3').set(userQuestionsPart3);
    db.collection(`users/${user.name}/questions`).doc('part4').set(userQuestionsPart4);
    db.collection(`users/${user.name}/questions`).doc('part5').set(userQuestionsPart5);
}

const userTest = {
    "firstMessagge": true,
    "consent": true,
    "image": [
        {
            "name": "pp9.PNG",
            "type": "image/png",
            "content": "data:image/png;base64"
        }
    ],
    "facultyYear": "2000",
    "name": "FLR",
    "age": 20,
    "sex": "Masculino",
    "civilStatus": "Soltero (a)",
    "kids": false,
    "state": "Puebla",
    "municipality": "Puebla",
    "typeOfResidence": "Urbano",
    "email": "flopezramirez@hotmail.com",
    "emailConfirmation": "flopezramirez@hotmail.com",
    "occupation": "Alumno",
    "semester": "7mo",
    "worked": true,
    "seriousWorkProblems": "Nunca o casi nunca",
    "accessToInternetAndDevices_Student": "Fácil de obtener",
    "academicPerformance": "Tuve menor aprovechamiento",
    "difficultiesToStudy": "Nunca o casi nunca",
    "pt1_1": "No me ha ocurrido",
    "pt1_2": "No me ha ocurrido",
    "pt1_3": "No me ha ocurrido",
    "pt1_4": "No me ha ocurrido",
    "pt1_5": "No me ha ocurrido",
    "pt1_6": "No me ha ocurrido",
    "pt1_7": "No me ha ocurrido",
    "pt1_8": "No me ha ocurrido",
    "pt1_9": "No me ha ocurrido",
    "pt1_10": "No me ha ocurrido",
    "pt1_11": "No me ha ocurrido",
    "pt1_12": "No me ha ocurrido",
    "pt1_13": "No me ha ocurrido",
    "pt1_14": "No me ha ocurrido",
    "pt1_15": "No me ha ocurrido",
    "pt1_16": "No me ha ocurrido",
    "pt1_17": "No me ha ocurrido",
    "pt1_18": "No me ha ocurrido",
    "pt1_19": "No me ha ocurrido",
    "pt1_20": "No me ha ocurrido",
    "pt1_21": "No me ha ocurrido",
    "typeOfActivity": "Sentado (nula actividad física)",
    "pt2_Seated_1": 10,
    "pt3_1": true,
    "pt3_2": false,
    "pt3_3": false,
    "pt3_4": true,
    "pt3_5": true,
    "pt3_6": true,
    "pt3_7": true,
    "pt3_8": true,
    "pt3_9": true,
    "pt3_10": true,
    "useOfMask": "Casi siempre",
    "typeOfMask": "KN95",
    "pt4_1": true,
    "pt4_2": false,
    "pt4_3": true,
    "pt4_4": true,
    "pt4_5": false,
    "pt4_6": true,
    "pt5_1": "Nunca o casi nunca",
    "pt5_2": "Nunca o casi nunca",
    "pt5_3": "Nunca o casi nunca",
    "pt5_4": "Nunca o casi nunca",
    "pt5_5": "Nunca o casi nunca",
    "pt5_6": "Bastantes veces",
    "pt5_7": "Algunas veces",
    "pt5_8": "Algunas veces"
};