// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firebase DB
const db = firebase.firestore();

const usersRef = db.collection('users');
let emails = [];

// Create user
function createUser(user) {
    const userInfo = {
        // User info.
        firstMessage: user.firstMessage,
        consent: user.consent,
        image: {
            name: user.image.name,
            type: user.image.type,
            content: user.image.content,
            uploaded: false
        },
        surveyId: user.surveyId,
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
        workDifficulties: user.workDifficulties,
        academicPerformance: user.academicPerformance,
        difficultiesToStudy: user.difficultiesToStudy,
        seriousWorkProblems: user.seriousWorkProblems,
        accessToInternetAndDevicesDoctor: user.accessToInternetAndDevicesDoctor,
        accessToInternetAndDevicesStudent: user.accessToInternetAndDevicesStudent,
        academicPerformance: user.academicPerformance,
        difficultiesToStudy: user.difficultiesToStudy,
        typeOfActivity: user.typeOfActivity,
        useOfMask: user.useOfMask,
        typeOfMask: user.typeOfMask,
        created: Date.now()
    };

    const questions = {
        pt1_1: user.pt1_1,
        pt1_2: user.pt1_2,
        pt1_3: user.pt1_3,
        pt1_4: user.pt1_4,
        pt1_5: user.pt1_5,
        pt1_6: user.pt1_6,
        pt1_7: user.pt1_7,
        pt1_8: user.pt1_8,
        pt1_9: user.pt1_9,
        pt1_10: user.pt1_10,
        pt1_11: user.pt1_11,
        pt1_12: user.pt1_12,
        pt1_13: user.pt1_13,
        pt1_14: user.pt1_14,
        pt1_15: user.pt1_15,
        pt1_16: user.pt1_16,
        pt1_17: user.pt1_17,
        pt1_18: user.pt1_18,
        pt1_19: user.pt1_19,
        pt1_20: user.pt1_20,
        pt1_21: user.pt1_21,
        pt2_Intense_1: user.pt2_Intense_1 || 'No aplica',
        pt2_Intense_2: user.pt2_Intense_2 || 'No aplica',
        pt2_Moderated_1: user.pt2_Moderated_1 || 'No aplica',
        pt2_Moderated_2: user.pt2_Moderated_2 || 'No aplica',
        pt2_Hike_1: user.pt2_Hike_1 || 'No aplica',
        pt2_Hike_2: user.pt2_Hike_2 || 'No aplica',
        pt2_Seated_1: user.pt2_Seated_1 || 'No aplica',
        pt3_1: user.pt3_1,
        pt3_2: user.pt3_2,
        pt3_3: user.pt3_3,
        pt3_4: user.pt3_4,
        pt3_5: user.pt3_5,
        pt3_6: user.pt3_6,
        pt3_7: user.pt3_7,
        pt3_8: user.pt3_8,
        pt3_9: user.pt3_9,
        pt3_10: user.pt3_10,
        pt4_1: user.pt4_1,
        pt4_2: user.pt4_2,
        pt4_3: user.pt4_3,
        pt4_4: user.pt4_4,
        pt4_5: user.pt4_5,
        pt4_6: user.pt4_6,
        pt5_1: user.pt5_1,
        pt5_2: user.pt5_2,
        pt5_3: user.pt5_3,
        pt5_4: user.pt5_4,
        pt5_5: user.pt5_5,
        pt5_6: user.pt5_6,
        pt5_7: user.pt5_7,
        pt5_8: user.pt5_8
    };

    // Add a new user in collection 'users'
    try {
        usersRef.doc(user.name).set({
            userInfo: userInfo,
            questions: questions
        });
        console.log("USER CREATED");
    } catch (error) {
        console.log("Something went wrong trying to create the user :/");
        console.log("ERROR: " + error);
    }
}

usersRef.get()
    .then(function(snapshot) {
        if (snapshot) {
            snapshot.forEach(doc => {
                emails.push(doc.data().email);
            });
        }
        else {
            console.log("No data available (when getting emails)");
        }
    }).catch(function(error) {
      console.error(error);
    });
